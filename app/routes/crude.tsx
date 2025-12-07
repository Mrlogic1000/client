import { Outlet } from "react-router";
import Modal from "~/components/modal";
import type { Route } from "../+types/root";
import { status,menu, } from "~/components/datas";


export async function loader() {
    const rest = await fetch("http://127.0.0.1:8100/api/parameters");
    const data = await rest.json()
    return data

}
export default function CRUD({loaderData}:Route.ComponentProps){
    
    const ip = loaderData
    const location = [
        {value:'GTI',label:"GTI"},
        {value:'5CON',label:"5CON"},
    ]
    console.log(ip)
     const parameters = [
        ip,
        menu,
        status,
        location
     ]
    return <>
    
    <Modal>
        <Outlet context={parameters}/>
    </Modal>
    
    </>
}