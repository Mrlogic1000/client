import { Form, Link, redirect, useLoaderData, useOutletContext, type ActionFunctionArgs } from "react-router";
import TextField from "~/components/textfield";

import { type ReactElement, type JSXElementConstructor, type ReactNode, type ReactPortal, type Key, type ChangeEvent, useState } from "react";
import SelectFild from "~/components/select";
import Modal from "~/components/modal";
import LinkButton from "~/components/linkbutton";
import type { Route } from "../+types/root";
import { types } from "~/components/datas";
import type { Options, Param } from "~/components/types";


function isValidMacAddress(macAddress: string) {
    // Regex for MAC addresses in formats like:
    // 00:1A:2B:3C:4D:5E (colon-separated)
    // 00-1A-2B-3C-4D-5E (hyphen-separated)
    // 001A.2B3C.4D5E (dot-separated)
    const macRegex = new RegExp(
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$|^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/
    );

    return macRegex.test(macAddress);
}
export async function loader() {
    const rest = await fetch("http://127.0.0.1:8100/api/parameters");
    const data = await rest.json()
    return data

}
export async function action({ request }: Route.ActionArgs) {
    try {
        const formdata = await request.formData();
        // const name = formdata.get('name')
        const model = formdata.get('model')
        const purchase_date = formdata.get('purchase_date')
        const mac = formdata.get('mac')
        const manufacture = formdata.get('manufacture')
        const status = formdata.get('status')
        const device_type = formdata.get('device_type')
        const location = formdata.get('location')
        const name = formdata.get('name')
        const ip = formdata.get('ip')
        const user_id = formdata.get('user_id')
        const sn = formdata.get('sn')


        const datas = {
            // name,
            model,
            purchase_date,
            mac,
            manufacture,
            status,
            device_type,
            user_id,
            sn,
            name,
            location,
            ip,

        }
        console.log(datas)
        const res = await fetch("http://127.0.0.1:8100/api/devices", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datas),
        })
        if (!res.ok) {
            const data = await res.json()
            return data
        }


        return redirect('/devices')


    } catch (error) {
        return error

    }



}


export default function NewDevice({ actionData }: Route.ComponentProps) {

    const [val, setVal] = useState('')
    const param: Param[] = useOutletContext()
    console.log(param)
    const status = param[2]
    const manufac = param[1]
    const ips = param[0]
    const locations = param[3]
    const error = actionData

const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setVal(event.target.value);


    };

    return <>


        <div> {error}</div>
        <Form method="post" >
            <div className="flex flex-col gap-2 bg-gray-400 m-auto p-5 lg:rounded-xl lg:rounded-l-none">
                <div className="flex lg:flex-row flex-col  w-full gap-2">
                    <TextField type="text" id="name" name="name" isRequired={true} placeholder="name" />
                    <SelectFild
                        options={locations}
                        id=""
                        name="location"
                        value=''
                        select="location"
                        onChange={handleSelectChange} />




                </div>


                <div className="flex lg:flex-row flex-col  w-full gap-2">
                    <SelectFild options={ips} id="ip" name="ip" select="ip" />
                    <SelectFild options={types} id="device_type" name="device_type" select="type" />

                </div>
                
                <div className="flex lg:flex-row flex-col  w-full gap-2">
                    <TextField type="text" id="sn" name="sn" isRequired={true} placeholder="Serial Number" />
                <TextField type="text" id="mac" name="mac" isRequired={true} placeholder="mac address" />
                </div>
                <div className="flex lg:flex-row flex-col  w-full gap-2">
                    <TextField type="text" id="model" name="model" isRequired={true} placeholder="model" />
                    <TextField type="date" id="purchase_date" isRequired={true} name="purchase_date" placeholder="date" />
                </div>
                
                <div className="flex lg:flex-row flex-col  w-full gap-2">
                    <SelectFild options={manufac} id="manufacture" name="manufacture" select="manufacture" />


                    <SelectFild options={status} id="status" name="status" select="status" />
                </div>



                <input type="number" id="user_id" hidden name="user_id" value={1} />
                <div className="mt-6 flex items-center lg:justify-end justify-center gap-x-6">
                    <LinkButton link="/devices" title="cancel" />
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 cursor-pointer py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>

        </Form>

    </>
}

