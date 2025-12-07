import type { ChangeEvent, ReactNode } from "react"

export interface Options {
    value: string,
    label: string,
}

interface Device {
    id: number,
    name: string
}

export type Param = []
   

export type SelectFildProps = {
    options: Options[],
    devices?: Device[],
    id: string,
    select: string,
    value?: string,
    name: string
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void


}
interface Header {
    name: string,
}
export type TableProps = {
    headers: Header[],
    datas: Datas[],
    func: (id: number) => void,
    link: string
}
export interface Datas {
    id: number,
    sn: string,
    device_type: string,
    manufacture: string,
    mac: string,
    model: string,
    name: string,
    status: string,
    purchase_date: string
    create_at?: string
    update_at?: string
    ip:string,
    location: string,
   
}

export type PageProps = {    
    datas: Datas[]
     func: (id:number)=>void,
    link:string
}

export type childrenProps = {
    children: ReactNode
}