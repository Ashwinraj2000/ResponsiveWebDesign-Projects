import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white text-black py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-center'>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg items-center hover:scale-105 duration-300'>
                <img src={single} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl text-center font-bold'>$149</p>
                <div className='font-medium text-center w-full'>
                    <p className='py-2 border-b mt-5'>500 GB Storage</p>
                    <p className='py-2 border-b '>1 Granted User</p>
                    <p className='py-2 border-b '>Send up to 2 GB</p>
                </div>
                <button className='w-[175px] mx-auto rounded-md py-3 my-6 bg-[#00df9a] hover:scale-105 text-black font-bold tracking-wide'>Start Trial</button>
            </div>
            <div className='w-full bg-gray-100 border shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg items-center hover:scale-105 duration-300'>
                <img src={double} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-4xl font-bold'>$199</p>
                <div className='font-medium w-full'>
                    <p className='py-2 border-b mt-5'>1 TB Storage</p>
                    <p className='py-2 border-b '>3 Users Allowed</p>
                    <p className='py-2 border-b '>Send up to 5 GB</p>
                </div>
                <button className='w-[175px] mx-auto rounded-md py-3 my-6 bg-black hover:scale-105 text-[#00df9a] font-bold tracking-wide'>Start Trial</button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg items-center hover:scale-105 duration-300'>
                <img src={triple} className='w-20 mx-auto mt-[-3rem] bg-white' alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-4xl font-bold'>$299</p>
                <div className='font-medium w-full'>
                    <p className='py-2 border-b mt-5'>5 TB Storage</p>
                    <p className='py-2 border-b '>10 Users Allowed</p>
                    <p className='py-2 border-b '>Send up to 10 GB</p>
                </div>
                <button className='w-[175px] mx-auto rounded-md py-3 my-6 bg-[#00df9a] hover:scale-105 text-black font-bold tracking-wide'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards