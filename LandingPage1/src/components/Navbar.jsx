import React from 'react'
import navclose from '../assets/icon-close.svg'
import hamburger from '../assets/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

    const [isopen,setIsOpen]=useState(false);

    const toggleNav=()=>{
        setIsOpen(!isopen)
    }

  return (
    <div className="relative w-full h-screen bg-[url('/src/assets/mobile/image-hero.jpg')] md:bg-[url('/src/assets/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat md:p-12 p-7">
      {/* <!-- Overlay --> */}
      <div className="absolute inset-0 bg-black/60"></div>
  
       {/* <!-- Content above overlay --> */}
        <div className="relative z-10 flex items-center justify-between max-w-[1440px] mx-auto">
            <h1 className="font-bold text-[25px] md:text-5xl ml-4 md:ml-10 mb-2 text-stone-100">epsilon</h1>
            <ul className="items-center font-semibold text-xl text-stone-300 hidden lg:flex">
                <li className='hover:border-b-2 cursor-pointer mr-10'>About</li>
                <li className='mr-10 hover:border-b-2 cursor-pointer'>Careers</li>
                <li className='mr-10 hover:border-b-2 cursor-pointer'>Events</li>
                <li className='mr-10 hover:border-b-2 cursor-pointer'>Products</li>
                <li className='hover:border-b-2 cursor-pointer'>Support</li>
            </ul>
            <div className='lg:hidden cursor-pointer' onClick={toggleNav}>
              <img src={hamburger} alt="" />
            </div>
            <div className={isopen ? 'text-stone-100 fixed top-0 left-0 w-[100%] h-full p-10 border-r-2 bg-[#000300] border-gray-900 ease-in-out duration-300 ' : 'fixed left-[-100%]'}>
              <div  className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl ml-4 mt-5 mb-6'>epsilon</h1>
                <img src={navclose} className='cursor-pointer' onClick={toggleNav} alt="" />
              </div>
              
              <ul className='uppercase mt-12 ml-5 text-xl font-semibold tracking-widest cursor-pointer'>
                <li className='mt-10 border-b-2 border-y-zinc-700 pb-2'>About</li>
                <li className='mt-10 border-b-2 border-y-zinc-700 pb-2'>Careers</li>
                <li className='mt-10 border-b-2 border-y-zinc-700 pb-2'>Events</li>
                <li className='mt-10 border-b-2 border-y-zinc-700 pb-2'>Product</li>
                <li className='mt-10 border-b-2 border-y-zinc-700 pb-2'>Support</li>
              </ul>
              
            </div>
        </div>
    
       <div className={!isopen?"relative w-full max-w-[1440px] h-full md:mx-auto flex flex-col justify-center":"hidden"}>
            <div className='z-10 text-white tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-4 md:ml-10 text-left'>
                <div className='border-2 inline-block p-4 md:pl-4 md:pr-10'>
                <p>IMMERSIVE</p>
                <p className='mt-4 md:mt-6'>EXPERIENCES</p>
                <p className='mt-4 md:mt-4'>THAT DELIVER</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar