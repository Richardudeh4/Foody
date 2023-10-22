import { Popover } from '@headlessui/react'
import React,{useState} from 'react'
// import { Link } from 'react-router-dom';


const MobileNavbar = ({title,link}) => {
   
  return (
    <Popover.Button
    className="text-5xl uppercase text-gray-700 hover:bg-slate-300 hover:text-white rounded-xl px-6 py-2 transition  ease-out"
    >
    <a href={link}
   >
{title}
    </a>
    </Popover.Button>
  )
}

export default MobileNavbar
