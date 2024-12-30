import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar () {
    const [nav,setNav]=useState(false);

    const handleNav=()=>{
        setNav(!nav);
    };

  return (
    <div className='text-white flex justify-between items-center h-24 px-4 mx-auto max-w-[1240px]'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>EPSILON.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {
                nav ? <IoClose size={30}/> : <GiHamburgerMenu size={25}/>
            }
        </div>

       <div className={nav ? 'fixed top-0 left-0 w-[60%] h-full p-2 border-r-2 bg-[#000300] border-gray-900 uppercase ease-in-out duration-300 ' : 'fixed left-[-100%]'}>
       <h1 className='text-3xl font-bold text-[#00df9a]'>EPSILON.</h1>

        <ul className={'mt-3 font-semibold'}>
            <li className='p-4 border-b-2 border-gray-800'>Home</li>
            <li className='p-4 border-b-2 border-gray-800'>Company</li>
            <li className='p-4 border-b-2 border-gray-800'>About</li>
            <li className='p-4 border-b-2 border-gray-800'>Contact</li>
        </ul>
       </div>
    </div>
  );
}

export default Navbar