import type { ChangeEvent } from "react"
import type { SelectFildProps } from "./types"


export default function SelectFild({ options, devices, id, select, value, name, onChange }: SelectFildProps) {
  return <>
    {
     (<>
        <div>
          <label htmlFor={select} className="block text-sm/6 p-1  uppercase font-semibold text-gray-200">{name}</label>
        <select
          id={name}
          name={name}          
          onChange={onChange}
           
          className="flex-1 block px-4 rounded-md bg-white text-gray-400 focus:text-gray-700 
          selected:text-gray-700  w-full py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base 
          focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
          
            {value && (<option selected value={value} >{value}</option>)}
          {options.map((option, index) => (
            <option  key={index} defaultValue={option.value}
            
             >{option.label}</option>
          ))}

        </select>
        </div>

      </>)
    }
  </>
}