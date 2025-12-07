import { Form, Link, redirect, type ActionFunctionArgs } from "react-router";
import TextField from "~/components/textfield";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import SelectFild from "~/components/select";
import type React from "react";
import type { childrenProps } from "./types";







const Modal:React.FC<childrenProps> = ({children})=>{

   
    return <>
        <div className="fixed left-0 top-0 bottom-0 w-full lg:overflow-visible overflow-auto h-full bg-white/30 backdrop-invert backdrop-opacity-10">
            <div className=" pt-5 flex lg:flex-row flex-col rounded-xl m-auto overflow-auto w-2/4  z-30">
                <div className="lg:rounded-l-xl min-h-40  w-full  bg-[url('./images/img5.jpg')]  bg-no-repeat bg-cover bg-center">
                   
                </div>
                <div className="container w-full  ">
                    {children}
                </div>
            </div>
        </div>
    </>
}

        export default Modal;