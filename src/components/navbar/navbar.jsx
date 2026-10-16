import React, { useState,useEffect } from 'react'
import {navLinks} from '../../data/data'
import { MenuIcon, XIcon } from 'lucide-react'


const Navbar=()=>{


const [open,setOpen]=useState(false)
const [scroll,setScroll]=useState(false)

useEffect(()=>{

    const handleScroll=()=>{
    setScroll(window.scrollY>10)
};

window.addEventListener('scroll',handleScroll)

return()=>window.removeEventListener('scroll',handleScroll)
},[])



    return(
        <>
        <nav
  className={`fixed inset-x-0 top-0 z-20 w-full
    px-4 sm:px-6 lg:px-8
    overflow-x-clip
    transition-all duration-300
    ${scroll ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}
  `}
>
<div className='flex items-center justify-between font-medium py-4 mx-auto max-w-7xl'>

    {/* left navbar*/}
    <a href='/'>
        <img src='/assets/bolu-res.png' alt='logo' className='h-16 w-26'/>
    </a>

      {/* middle navbar*/}
      <div className='hidden md:flex items-center gap-10 '>
{navLinks.map((link)=>{
    return(
        <a key={link.name} href={link.href} className='hover:text-zinc-600'>
            {link.name}
        </a>
    )
})}
      </div>


       {/* right navbar*/}
       <a href='#booking-process' className='hidden md:block capitalize bg-red-500
        hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-700'>
book a table
       </a>

       <button onClick={()=>setOpen(true)} className='md:hidden bg-red-600 text-white p-2 cursor-pointer 
        rounded-md aspect-square hover:bg-red-800 transition-all duration-700 ease-in-out'>
        <MenuIcon/>
       </button>

</div>
        </nav>


<div className={`flex flex-col items-center justify-center p-8 
fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform 
    duration-400 ${open?'translate-x-0':'translate-x-full'}`}>
    <div className='flex flex-col items-center space-y-6 font-medium'>
        {navLinks.map((link)=>(
            <a key={link.name} href={link.href} className='tet-2xl text-zinc-800 hover:text-red-500 transition'>
                {link.name}
            </a>
        ))}

        <button onClick={()=>setOpen(false)}
        className='bg-red-600 text-white p-2 rounded-md aspect-square cursor-pointer  ' 
        >
<XIcon/>
        </button>
    </div>
</div>
</>
        )
}


export default Navbar;