import React from 'react'
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";




function SideNav() {
  return (
    <div className='w-[20%] h-screen bg-[#04293A] text-[#e8eaf5] p-2'>
      <div className="brand-name mb-5 w-full px-3 py-2 flex items-center justify-center gap-3 border-b-[1px] border-[#dadada]">
        <PiTelevisionSimpleFill className='text-xl cursor-pointer'/>
        <h1 className='text-xl font-semibold text-center leading-none cursor-pointer'>Movie Site</h1>
      </div>
      <div className="feed-links-div p-2 ">
        <h1 className='text-xl font-bold mb-3'>Feeds</h1>
        <div className="feed-links w-full flex flex-col gap-2">
           {[
            {
            name:"Treding",
            icon:<FaFire/>
           },
            {
            name:"Popular",
            icon:<BsStars/>
           },
            {
            name:"Movies",
            icon:<BiSolidCameraMovie/>
           },
            {
            name:"TV Shows",
            icon:<PiTelevisionSimpleLight/>
           },
            {
            name:"People",
            icon:<IoMdPeople/>
           },
           ].map((item, index)=>(
            <Link key={index} className="flex transition-all items-center justify-start gap-2 feed-link w-full rounded-lg hover:bg-[#0b1927] p-2 cursor-pointer">
                {item.icon}
            <h2>{item.name}</h2>
        </Link>
           ))
           }
        </div>
      </div>
      <div className="Website-links-div p-2 mt-3">
        <h1 className='text-xl font-bold mb-3'>Website Info</h1>
        <div className="Website-links w-full flex flex-col gap-2">
           {[
            {
            name:"About Movie Site",
            icon:<FaInfoCircle/>
           },
            {
            name:"Contact",
            icon:<FaPhoneAlt/>
           },
           ].map((item, index)=>(
            <Link key={index} className="flex transition-all items-center justify-start gap-2 feed-link w-full rounded-lg hover:bg-[#0b1927] p-2 cursor-pointer">
                {item.icon}
            <h2>{item.name}</h2>
        </Link>
           ))
           }
        </div>
      </div>
    </div>
  )
}

export default SideNav
