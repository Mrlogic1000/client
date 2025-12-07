import Table from "~/components/table"
import type { Route } from "./+types/devices"
import { Form, Outlet, redirect, useNavigate } from "react-router";
import MyPaginationComponent from "~/components/pagenation";
import LinkButton from "~/components/linkbutton";
import Dialog from "~/components/dialog";


export async function loader() {
    try {
        const res = await fetch("http://127.0.0.1:8100/api/devices");

        if (!res.ok) {
            throw new Response("Failed to fetch data", { status: res.status });
        }

        const data = await res.json()
        return data

    } catch (error) {

    }

}


export default function Devices({ loaderData }: Route.ComponentProps) {
    const datas = loaderData
    const navigate = useNavigate()

    const func = async ( id: number) => {
        try {
            let obj = {
                id: id,
                action: "delete"
            }
            const link =  `http://127.0.0.1:8100/api/device/${id}`
            const res = await fetch(`${link}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)

            })
            const data = await res.json()

            if (res.ok) {
                return navigate('/devices')

            }
        } catch (error) {
            console.log(error)

        }


    }

   
   
    return <>



        {
            datas ? <MyPaginationComponent  datas={datas}  func={func} link="" /> : ''
        }

        

             
        <Outlet/>
      


    </>
}