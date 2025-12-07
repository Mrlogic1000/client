import type { ChangeEvent } from "react"

interface TextField{
    id?: string,
    name: string,
    test?:number
    type: string,
    placeholder?: string,
    value?:string,
    isRequired?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>)=>void
}
export default function TextField({id,name,type,placeholder,isRequired=false,value,onChange,test}:TextField) {
    return <>

       <div>
         <label htmlFor={name} className="block text-sm/6 p-1  uppercase font-semibold text-gray-200">{name}{test}</label>

        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={value}
            {...(isRequired ? { required: true } : {})}
            onChange={onChange}
            className="block 
             rounded-md w-full 
               min-w-0 
              bg-white py-1.5 pr-3 pl-1 text-base text-gray-400 focus:text-gray-700  placeholder:text-gray-400 focus:outline-green-500  sm:text-sm/6"
        />
       </div>

    </>
}

