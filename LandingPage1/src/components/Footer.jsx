import React from 'react'
import insta from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import fb from '../assets/icon-facebook.svg'
import pin from '../assets/icon-pinterest.svg'

const Footer = () => {
  return (
    <div className='bg-[#000000eb] text-white w-full  p-8 md:p-16 md:mt-10'>
        <div className='w-full max-w-[1440px] mx-auto md:grid md:grid-cols-2 md:gap-y-2'>
            <h1 className='font-bold text-3xl tracking-wider col-start-1 text-center md:text-left'>epsilon</h1>
            <ul className='mt-8 md:mt-0 text-[15px] font-semibold cursor-pointer text-center text-slate-300 md:flex'>
                    <li className='mt-5'>About</li>
                    <li className='mt-5 md:ml-4'>Careers</li>
                    <li className='mt-5 md:ml-4'>Events</li>
                    <li className='mt-5 md:ml-4'>Product</li>
                    <li className='mt-5 md:ml-4'>Support</li>
            </ul>
            
            <div className='mt-8 md:mt-0 w-[50%] md:mx-0 mx-auto flex justify-around items-center md:row-start-1 md:col-start-2 justify-self-end'>
                <a href="#instagram" className='hover:scale-110 duration-200'>
                    <img src={insta} alt=""></img>
                </a>
                <a href="#facebook" className='hover:scale-110 duration-200'>
                    <img src={fb} alt=""></img>
                </a>
                <a href="#pinterest" className='hover:scale-110 duration-200'>
                    <img src={pin} alt=""></img>
                </a>
                <a href="#twitter" className='hover:scale-110 duration-200'>
                    <img src={twitter} alt=""></img>
                </a>
            </div>
            <p className='text-center  mt-5 text-gray-500 md:row-start-2 md:col-start-2 md:justify-self-end'> &copy; 2024 Epsilon. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer