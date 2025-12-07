import type { Route } from "../+types/root";


export async function loader({params}:Route.LoaderArgs) {
    const {id} = params
    const rest = await fetch(`http://127.0.0.1:8100/api/device/${id}`);
    const datas = await rest.json()
   
    return datas

}
export default function Device({loaderData}:Route.ComponentProps){
    const device = loaderData;
    
    return <>
    <div className="flex">
        <div className="flex">

        </div>
       
    </div>
    </>
}