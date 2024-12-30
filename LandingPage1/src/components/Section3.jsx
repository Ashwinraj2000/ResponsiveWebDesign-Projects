import React from 'react'
import earth from '../assets/desktop/image-deep-earth.jpg'
import earth2 from '../assets/mobile/image-deep-earth.jpg'
import night from '../assets/desktop/image-night-arcade.jpg'
import soccer from '../assets/desktop/image-soccer-team.jpg'
import car from '../assets/desktop/image-grid.jpg'
import above from '../assets/desktop/image-from-above.jpg'
import lights from '../assets/desktop/image-pocket-borealis.jpg'
import curiosity from '../assets/desktop/image-curiosity.jpg'
import bowl from '../assets/desktop/image-fisheye.jpg'
import night2 from '../assets/mobile/image-night-arcade.jpg'
import soccer2 from '../assets/mobile/image-soccer-team.jpg'
import car2 from '../assets/mobile/image-grid.jpg'
import above2 from '../assets/mobile/image-from-above.jpg'
import lights2 from '../assets/mobile/image-pocket-borealis.jpg'
import curiosity2 from '../assets/mobile/image-curiosity.jpg'
import bowl2 from '../assets/mobile/image-fisheye.jpg'

const Section3 = () => {
  return (
    <div className='bg-white w-full max-w-[1440px] mx-auto p-8 md:p-16 md:mt-10 mb-6'>
        <div className='w-full flex justify-center md:justify-between items-center mb-10'>
          <h1 className='tracking-wider text-4xl md:text-6xl mb-4'>OUR CREATIONS</h1>
          <button className='bg-black rounded-full text-white text-lg font-semibold px-6 py-2 tracking-widest hidden md:block hover:scale-105 duration-200'>See All</button>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-6 md:gap-16 uppercase'>
            <div className='relative hover:scale-105 duration-300'>
              <img src={earth} className='hidden md:block' alt=""/>
              <img src={earth2} className='block md:hidden' alt=""/>
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>Deep <br /> Earth</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={night} className='hidden md:block' alt="" />
              <img src={night2} className='block md:hidden' alt=""/>
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>Night <br /> Arcade</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={soccer} className='hidden md:block' alt="" />
              <img src={soccer2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>Soccer <br /> Team VR</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={car}  className='hidden md:block' alt="" />
              <img src={car2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>The <br /> Grid</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={above} className='hidden md:block' alt="" />
              <img src={above2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>From Up <br /> Above VR</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={lights} className='hidden md:block' alt="" />
              <img src={lights2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>Pocket <br /> Borealis</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={curiosity} className='hidden md:block' alt="" />
              <img src={curiosity2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>The <br /> Curiosity</h1>
            </div>
            <div className='relative hover:scale-105 duration-300'>
              <img src={bowl} className='hidden md:block' alt="" />
              <img src={bowl2} className='block md:hidden' alt="" />
              <div class="absolute inset-0 bg-black bg-opacity-60"></div>
              <h1 className='absolute bottom-4 left-4 text-xl md:text-3xl tracking-wider font-light text-slate-200'>Make It <br /> Fisheye</h1>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='border-2 border-black text-black text-lg font-semibold px-10 py-2 tracking-widest md:hidden hover:scale-105 duration-200'>See All</button>
        </div>
    </div>
  )
}

export default Section3