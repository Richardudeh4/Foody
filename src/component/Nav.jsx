import React,{useState} from 'react';
import { NavLink } from '../constants';
import { Link } from 'react-router-dom';
import { hamburger } from '../assets';
import MobileNavbar from './MobileNavbar';
import {Popover} from '@headlessui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {IoIosArrowUp} from 'react-icons/io';
import {TbMenu2} from 'react-icons/tb';
import styled from 'styled-components';



const Nav = () => {
  const [open ,setOpen] = useState(false);
  const ToggleMenu = ()=>{
    setOpen((prevOpen) => !prevOpen);
  }
  return (
 <header className='padding-x py-8 z-50 fixed backdrop-blur-sm w-full'>
    <nav className='flex flex-row justify-between items-center  max-container'>
<div className='relative'>
    <Link to="/">
    <h1 className="font-bold leading-8 font-sans text-4xl" >Foody</h1>
    </Link>
</div>

    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden text-gray-700'>
        {
        NavLink.map((item,index)=> (
          <div key={index}>
         
            <li className="hover:text-slate-50 " >
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-700'
            >
              {item.name}
            </a>
          </li>
         
          </div>
        ))
        }
        {/* <li className='flex flex-row gap-10 '>
            <a href={item.href}>{item.name}</a>
        </li> */}
    </ul>
<button className="max-lg:hidden border border-black px-10 py-4 rounded-2xl bg-transparent">
  <a href="#menu">
 <h1 className="font-palanquin leading-5 font-bold">Our Menu</h1>
  </a>
</button>

{/* Mobile Navigation*/}
<Popover className="lg:hidden">
{({ open }) => (
  <>
    <Popover.Button
      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
      aria-label="Toggle site navigation"
    >
      {({ open }) =>
        open ? (
          <IoIosArrowUp className="text-2xl" />
        ) : (
          <TbMenu2 className="text-2xl" />
        )
      }
    </Popover.Button>
{/* <div className='hidden max-lg:block cursor-pointer'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
  </div> */}

 <AnimatePresence initial={false}>
      {open && (
        <>
          <Popover.Overlay
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
          />
    
          <Popover.Panel
            static
            as={motion.div}
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -32,
              transition: { duration: 0.2 },
            }}
            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
          >
    
            <div className="space-y-4">
            {
  NavLink.map((item,index)=> (
    <div className='overflow-hidden'>
      <MobileNavbar key={index} title={item.name} link={item.href}/>
    </div>
  ))
}
</div>
 <button className=" border mt-4 border-black px-4 py-4 mx-8 rounded-[32px] bg-transparent">
 <a href="#menu">
<h1 className="font-palanquin leading-5 font-bold">Our Menu</h1>
 </a>
</button>  
  </Popover.Panel>
   </>
)}
        </AnimatePresence>
                </>
              )}
            </Popover>
{/* <div
className="w-full sm:hidden min-h-[35%] mx-0 mt-4 py-8 bg-slate-300 rounded-2xl"
>
<div className="flex flex-col">
  <div className='flex justify-between'>
      <p className='cursor-pointer text-md text-gray-300' onClick={ToggleMenu}>Close</p>
  </div>
  <div className='flex flex-col h-full justify-center font-sans items-center gap-4'>

  </div> */}
{/* //   <button className=" border mt-4 border-black px-4 py-4 mx-32 rounded-[32px] bg-transparent">
//   <a href="#menu">
//  <h1 className="font-palanquin leading-5 font-bold">Our Menu</h1>
//   </a>
// </button>   
// </div>
// </div> */}
</nav>

</header>
  )
}

export default Nav
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/623c8d03dc7b8e77705cde9a_label.svg


