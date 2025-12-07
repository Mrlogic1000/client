import { Link } from "react-router";


interface LinkButtonProps{
    link:string,
    title:string
}
export default function LinkButton({link,title}:LinkButtonProps) {
    return <>
        <Link to={link} className="text-sm/6 font-semibold text-gray-900">
            {title}
        </Link>

    </>
}