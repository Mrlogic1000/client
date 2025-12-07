import { Link } from "react-router"


interface DataLinkProps{
    link:string
    icon: any
}

const DataLink = ({link,icon}:DataLinkProps)=>{
    return <>
    <Link to={link}> <div className="text-xl cursor-pointer font-bold">{icon}</div></Link>
    
    </>
}

export default DataLink