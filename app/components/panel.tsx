import { useState, type ChangeEvent } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Navigate, redirect } from "react-router";
import { Link, useNavigate } from "react-router";
import type { Datas } from "./types";


Navigate
type PanelProps = {
    title: string,
    url: string,
    searchTerm: string,
    handleSearchTerm: (event: ChangeEvent<HTMLSelectElement>) => void

}



export default function Panel({ title, url, searchTerm, handleSearchTerm }: PanelProps) {

    const navigate = useNavigate()

    const goTo = () => {
        console.log("is working")
        return navigate('/devices')
    }


    return <>
        <div className="flex items-center justify-between p-3 shadow rounded-t-lg w-full bg-gray-300 h-15 ">
            <div>{title}</div>
            <input type="search"
                className="h-10 w-80 px-3 outline-none bg-white rounded-lg placeholder:p-3 placeholder:text-gray-400"
                placeholder="search"
                value={searchTerm}
                onChange={(event:any) => handleSearchTerm(event)}

            />
            <Link to={url}><IoMdAddCircle className="text-4xl cursor-pointer" /></Link>
            {/* <MdOutlineDeleteForever className="bg-red-500 text-3xl p-2 rounded-full cursor-pointer font-bold" /> */}

        </div>
    </>
}