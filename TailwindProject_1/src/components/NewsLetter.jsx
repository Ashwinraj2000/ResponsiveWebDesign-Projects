import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold text-2xl md:text-3xl py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
               <div className='flex flex-col md:flex-row justify-center items-center'>
                   <input type="email" placeholder='Enter your email' className='w-full rounded-md p-3 text-black focus:outline-none focus:ring-0'/>
                   <button className='w-[175px] rounded-md py-3 ml-4 my-6 bg-[#00df9a] hover:scale-105  text-black font-bold tracking-wide'>Notify me</button>
               </div>
               <p>we care about the protection of your data. read our <span className='text-[#00df9a] underline'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter