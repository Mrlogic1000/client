import { useState } from "react";
import type { IconBaseProps, IconType } from "react-icons"

type ButtonProps = {
    title?: string | number,
    icon?: any,
    handlePageChange: (currentPage: number) => void,
    // currentPage:number,
    disabled: boolean,
    key?: number,
    currentPage: number

}



export default function Button({ title, handlePageChange, currentPage, disabled, key, icon }: ButtonProps) {

    return <>
        <button key={key}
            className={`flex justify-center rounded-lg cursor-pointer items-center p-2 text-gray-700 border-gray-200 w-10 border-2`}
            onClick={() => { handlePageChange(currentPage)} } 
     disabled={disabled}
        >
            {icon}

            {title}
        </button>

    </>
}