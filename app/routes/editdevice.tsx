import { Form, Link, redirect, useOutletContext } from "react-router";
import Modal from "~/components/modal";
import SelectFild from "~/components/select";
import TextField from "~/components/textfield";
import { useState, type ChangeEvent } from "react";
import type { Route } from "./+types/editdevice";
import LinkButton from "~/components/linkbutton";
import type { Param } from "~/components/types";

export async function loader({ params }: Route.LoaderArgs) {
    const { id } = params
    const rest = await fetch(`http://127.0.0.1:8100/api/device/${id}`);
    const datas = await rest.json()
    return datas
}


export async function action({ request }: Route.ActionArgs) {
    const formdata = await request.formData();
    const name = formdata.get('name')
    const model = formdata.get('model')
    const purchase_date = formdata.get('purchase_date')
    const mac = formdata.get('mac')
    const manufacture = formdata.get('manufacture')
    const status = formdata.get('status')
    const device_type = formdata.get('device_type')
    const ip = formdata.get('ip')
    const location = formdata.get('location')
    const user_id = formdata.get('user_id')
    const sn = formdata.get('sn')
    const id = formdata.get('id')
    const action = 'update'

    const datas = {
        name,
        model,
        purchase_date,
        ip,
        id,
        location,
        mac,
        manufacture,
        status,
        device_type,
        user_id,
        sn,
        action
    }
    console.log(datas)
    const res = await fetch(`http://127.0.0.1:8100/api/device/${id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datas),
    })

    return redirect('/devices')




}

export default function EditDevice({ loaderData }: Route.ComponentProps) {

    const device = loaderData


    const [val, setVal] = useState('')
    const param: Param[] = useOutletContext()

    const status = param[2]
    const manufac = param[1]
    const ips = param[0]
    const locations = param[3]


    const types = [
        { value: "Router", label: "Router" },
        { value: "Switch", label: "Switch" },
        { value: "Access Point", label: "Access Point" },
        { value: "CCTV", label: "CCTV" },
        { value: "Computer", label: "Computer" },
        { value: "Save", label: "Save" },
    ]
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value);
    };

    const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
        let date = event.target.value;
        const formatDate = new Date(date).toLocaleDateString('en-US');
        setVal(formatDate)

    }
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setVal(event.target.value);


    };
    return <>

        <Modal>
            {
                device ? <Form method="post" >

                    <div className="flex flex-col gap-2 bg-gray-400 m-auto p-5 lg:rounded-xl lg:rounded-l-none">
                        <input type="number" name="id" value={device.id} hidden />


                        <div className="flex lg:flex-row flex-col  w-full gap-2">
                            <TextField type="text" id="name" name="name" isRequired={true} value={device.name} onChange={handleChange} />
                            <SelectFild
                                options={locations}
                                id=""
                                name="location"
                                value={device.location}
                                select="location"
                                onChange={handleSelectChange} />


                        </div>
                        <div className="flex lg:flex-row flex-col  w-full gap-2">
                            <SelectFild options={ips} id="ip" name="ip" select="ip" value={device.ip} onChange={handleSelectChange} />

                            <SelectFild options={types} id="device_type" name="device_type" select="Type" value={device.device_type} onChange={handleSelectChange} />

                        </div>
                        <div className="flex lg:flex-row flex-col  w-full gap-2">
                            <TextField type="text" id="model" name="model" isRequired={true} value={device.model} onChange={handleChange} />
                            <TextField type="text" id="sn" name="sn" isRequired={true} value={device.sn} onChange={handleChange} />

                        </div>


                        <TextField type="text" id="mac" name="mac" isRequired={true} value={device.mac} onChange={handleChange} />
                        <SelectFild options={manufac} id="manufacture" name="manufacture" select="Manufacture" value={device.manufacture} onChange={handleSelectChange} />

                        <TextField type="date" id="purchase_date" isRequired={true} name="purchase_date" value={device.purchase_date} onChange={handleDate} />
                        <SelectFild options={status} id="status" name="status" select="status" value={device.status} onChange={handleSelectChange} />



                        <input type="number" id="user_id" hidden name="user_id" value={1} />
                        <div className="mt-6 flex items-center lg:justify-end justify-center gap-x-6">
                            <LinkButton link="/devices" title="cancel" />
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 
                                cursor-pointer py-2 text-sm font-semibold text-white 
                                shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>

                </Form> : ""
            }
        </Modal>

    </>
}