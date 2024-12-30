import React from 'react'
import interactive from '../assets/desktop/image-interactive.jpg'

const Section2 = () => {
  return (
    <div className='bg-white w-full max-w-[1440px] mx-auto p-8 md:p-16 mt-4 md:mb-6 mb-[-20px]'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between xl:relative xl:justify-normal pr-5'>
            <img src={interactive} alt="" className='xl:max-w-[55%] md:w-[50%] lg:w-[50%] md:h-[370px] lg:h-[400px] mb-6 md:m-0'/>
            <div className='bg-white p-4 md:pl-6 lg:pt-10 lg:pl-10 xl:absolute top-40 right-28 w-[100%] md:max-w-[50%]'>
                <h1 className='uppercase text-3xl sm:text-5xl text-center md:text-left md:text-4xl lg:text-5xl tracking-wider'>The Leader in interactive vr</h1>
                <p className='mt-6 md:mt-4 text-[15px] sm:text-lg lg:mt-6 lg:text-xl text-center md:text-left text-slate-600 leading-8'>Founded in 2011, epsilon has been producing world-class virtual reality projects for some of the best
      companies around the globe. Our award-winning creations have transformed businesses through digital experiences
      that bind to their brand.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2