import React from 'react'
import background from './../images/section image1.jpg'
import imagefloat from './../images/section watch.png'
import Countdown from './Countdown'

const Deals = () => {
  return (
    <div className='h-screen p-4 bg-no-repeat relative bg-cover w-full' style={{backgroundImage: `url(${background})` }}>
      <img src={imagefloat} className='absolute hidden md:block right-15 top-30 floating w-[25%] h-auto' alt="" />

      <div className='md:absolute md:h-0 h-full  flex md:top-35 items-center justify-center flex-col space-y-4 md:left-70 mt-36 md:mt-0'>
            <h1 className='text-5xl font-semibold text-white'>
                Deals of the day
            </h1>
            <Countdown/>
      </div>
    </div>
  )
}

export default Deals
