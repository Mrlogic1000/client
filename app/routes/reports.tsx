import { useState, type ChangeEvent } from "react";
import { Form, redirect } from "react-router";
import Dialog from "~/components/dialog";
import LinkButton from "~/components/linkbutton";
import SelectFild from "~/components/select";
import TextField from "~/components/textfield";
import type { Route } from "../+types/root";


export async function action({request,params}:Route.ActionArgs) {
    const {id}  = params
    const formData = await request.formData()

    const status = formData.get('status')
    const comment = formData.get('comment')
    const datas = {
        status,
        comment,
        device_id:id
    }
    
     console.log(datas)
    const res = await fetch(`http://127.0.0.1:8100/api/report/${id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datas),
    })

    return redirect('/devices')
}

export default function Report() {

    const [val, setVal] = useState('')
    const status = [
        { value: "Urgent", label: "Urgent" },
        { value: "Pending", label: "Pending" },
        { value: "Resolved", label: "Resolved" },
    ]
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setVal(event.target.value);


    };
    return <>
       <Dialog>
         <Form method="post">
           
            <div className="flex flex-col gap-2 bg-gray-400 m-auto p-5 lg:rounded-xl lg:rounded-l-none z-50">
                <SelectFild
                    options={status}
                    id="status"
                    name="status"
                    value=''
                    select="status"
                    onChange={handleSelectChange} />

                <label htmlFor="comment" className="block text-sm/6 p-1  uppercase font-semibold text-gray-200">Report</label>

                <textarea name="comment" id="comment" className="flex-1 block px-4 rounded-md bg-white text-gray-400 focus:text-gray-700 
                    selected:text-gray-700  w-full py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base 
                    focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">

                </textarea>
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

       </Dialog>
    </>
}