import { FaUser, FaUsers, FaCalendarPlus, FaCalendarXmark, FaNetworkWired } from "react-icons/fa6";
import { MdCalendarMonth, MdDepartureBoard, MdDashboard, MdLocationCity } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlaneArrival } from "react-icons/fa";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router";
import { GrInstallOption } from "react-icons/gr";



export default function Sidebar() {
     const [open, setOpen] = useState(false)
  const Menus = [
    { title: "Dashboard", icon: < MdDashboard />, link:"/"},
    { title: "devices", icon: <FaNetworkWired />, link:"/devices"},
    { title: "Save", icon: <MdCalendarMonth /> },
    { title: "Decoders", icon: <FaCalendarPlus /> },
    { title: "TV", icon: <LuNotebookPen /> },
    { title: "Other", icon: <FaPlaneArrival /> },
    
  ]
    return <>
     <aside className={`${open ? "w-auto" : "w-20"} p-2 pt-8   relative h-screen bg-slate-950`} 
     onMouseOver={() => {setOpen(true)}}
     onMouseOut={() => {setOpen(false)}}
     >
          <BsArrowLeftShort
            className={`absolute text-dark-purple border-dark-purple bg-white ${!open && 'rotate-180'} -right-3  top-9 text-3xl border rounded-full cursor-pointer`}
            
          />

          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-360"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Mrlogic</h1>

          <div className={`flex items-center rounded-md bg-slate-500/20 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
            <BsSearch className={`text-white text-lg block float-left cursor-pointer mr-2`} />
            <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white placeholder:text-gray-500 placeholder:italic focus:outline-none ${!open && "hidden"}`} />
          </div>

          <ul className="p-2">
            {
              Menus.map((menu, index) => (
                <NavLink key={index} to={`${menu.link}`}>
                    <li key={index} className={`flex capitalize text-gray-300 text-sm cursor-pointer p-2 justify-start gap-x-4`} >
                  <span className=' text-2xl float-left block group-hover::bg-violet-600'>{menu.icon}</span>
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                </li>
                </NavLink>

              ))
            }
            {/*             {/* <li><a href="#"><i class="fa-solid fa-circle-user"></i><span>Guest Database</span></a></li>
                <li><a href="#"><i class="fa-solid fa-circle-user"></i><span>Guest Message</span></a></li> */}
          </ul>

        </aside>


    </>
} 