import { Form } from "react-router";
import LinkButton from "./linkbutton";
import { useState, type ChangeEvent } from "react";
import type { childrenProps } from "./types";

const Dialog:React.FC<childrenProps>=({children})=>{
    

    return <>

     <div className="fixed top-0 w-70 right-0 h-full bg-gray-400">
         <h1 className="text-white text-center text-3xl p-4">Report</h1>
        {children}
            

        </div>

    
    </>
}

export default Dialog
