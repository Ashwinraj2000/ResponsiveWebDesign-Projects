import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white max-w-[800px] w-full flex flex-col mx-auto justify-center text-center mt-[90px]'>
        <p className='text-[#00df9a] font-semibold p-2 sm:text-2xl text-xl md:text-3xl'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold'>Grow with data.</h1>
        
    <p className='text-xl sm:text-3xl md:text-4xl font-bold py-4'>Fast, flexible financing for  
        <ReactTyped
            strings={[
                "BTB",
                "BTC",
                "SASS",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className='text-xl sm:text-3xl md:text-4xl font-bold pl-3'>
        </ReactTyped>
    </p>
    <p className='p-2 text-l md:text-2xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>

    <button className='w-[200px] rounded-md py-3 my-5 mx-auto bg-[#00df9a] hover:scale-105  text-black font-bold tracking-wide'>Get started</button>
    </div>
  )
}

export default Hero