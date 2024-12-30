import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img src={laptop} alt="" className='w-[500px] mx-auto' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-semibold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold text-2xl md:text-3xl py-2'>Manage Data Analytics Centrally</h1>
                <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione velit repellendus officia nulla, distinctio et expedita debitis perspiciatis cum recusandae cupiditate sunt unde assumenda iusto nostrum accusantium consectetur blanditiis qui.
                Quaerat, nihil illum.</p>
                <button className='w-[200px] rounded-md py-3 my-5 mx-auto md:mx-0 bg-[black] hover:scale-105  text-[#00df9a] font-bold tracking-wide'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics