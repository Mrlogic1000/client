import type React from "react"
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";
import { IoMdAddCircle } from "react-icons/io";
import { Link, Navigate, redirect, useNavigate } from "react-router";
import { TbEyeFilled } from "react-icons/tb";
import Panel from "./panel";
import { LuUnplug } from "react-icons/lu";
import { useState, type ChangeEvent } from "react";
import type { Datas } from "./types";


interface Header {
    name: string,
}
interface Installed {
    ip: string,
    create_at: string

}


type TableProps = {
    headers: Header[],
    datas: Datas[],
    func: (id: number) => void,
    link: string
}
export default function Table({ headers, datas, func }: TableProps) {
    
const [searchTerm, setSearchTerm] = useState('');

const filteredData = datas.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.mac.toLowerCase().includes(searchTerm.toLowerCase())|| item.ip.includes(searchTerm)
    );

const handleSearchTerm = (event:any)=>{
    const e = event.target.value

    setSearchTerm(e)

}

    return <>
        <Panel title="devices" searchTerm={searchTerm} url="crude/create" handleSearchTerm={handleSearchTerm}/>
            <Link to='/devices'><IoMdAddCircle className="text-4xl cursor-pointer" /></Link>
            {/* <MdOutlineDeleteForever className="bg-red-500 text-3xl p-2 rounded-full cursor-pointer font-bold" /> */}

 


        <table className="shadow rounded-lg border-collapse w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr className="">
                    {headers.map((header, key) => (
                        <th key={key} className="uppercase p-2 text-left font-semibold text-sm ">{header.name}</th>
                    ))}

                </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-gray-200">

                {filteredData.map((data, index) => (
                    <tr key={index}>

                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.name}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.model}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.mac}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.sn}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.purchase_date}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.status}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.device_type}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.manufacture}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.location}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.ip}</td>
                        <td className="p-2 text-sm text-gray-700 text-left capitalize">{data.create_at}</td>
                        {/* <td className="p-2 bg-amber-950 text-sm text-gray-700 text-left capitalize">{data.installer}</td> */}


                        <td className="">
                            <div className="flex  justify-start items-center gap-1.5 ">
                                <Link to={`/crud/edit/${data.id}`}><MdEdit className=" text-2xl  cursor-pointer font-bold" /></Link>
                                <MdOutlineDeleteForever onClick={() => { func(data.id) }} className="text-2xl cursor-pointer font-bold" />
                                <Link to={`/device/${data.id}`}><TbEyeFilled className=" text-2xl  cursor-pointer font-bold" /></Link>

                                



                            </div>
                        </td>
                    </tr>

                ))}

            </tbody>
        </table>




    </>
}




