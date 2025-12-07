import { MdEdit, MdOutlineDeleteForever } from "react-icons/md"
import { TbEyeFilled } from "react-icons/tb"
import { Link } from "react-router"
import Panel from "./panel"

interface Datas{
    id:number,
    location_name:string,
    location_description: string

}

interface Header{
    name:string,
}
type SimpleTableProps = {
    datas: Datas[],
    headers:Header[]
}

export default function SimpleTable({datas,headers}:SimpleTableProps){
    return <>



     <table className="shadow rounded-lg border-collapse w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr className="">
                    {headers.map((header, key) => (
                        <th key={key} className="uppercase p-2 text-left font-semibold text-sm ">{header.name}</th>
                    ))}

                </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-gray-200">

                {datas?.map((data, index) => (
                    <tr key={index}>

                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.location_name}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.location_description}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.location_name}</td>
                        
                        {/* <td className="p-2 bg-amber-950 text-sm text-gray-700 text-left capitalize">{data.installer}</td> */}


                        <td className="">
                            <div className="flex  justify-start items-center gap-1.5 ">
                                <Link to={`/editdevice/${data.id}`}><MdEdit className=" text-2xl  cursor-pointer font-bold" /></Link>
                                <MdOutlineDeleteForever className="text-2xl cursor-pointer font-bold" />
                                <Link to={`/device/${data.id}`}><TbEyeFilled className=" text-2xl  cursor-pointer font-bold" /></Link>


                            </div>
                        </td>
                    </tr>

                ))}

            </tbody>
        </table>
    
    
    </>
}