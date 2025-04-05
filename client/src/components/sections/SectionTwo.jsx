import React from 'react'
import { imgOneSecTwo, imgTwoSecTwo } from '../../assets/image'

const SectionTwo = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between h-full  lg:h-[626px] gap-[30px] lg:gap-[60px]'>
     <LayoutOne/>
     <LayoutTwo/>     
    </div>
  )
}

export default SectionTwo


const LayoutOne = () => (
  <div className='w-full lg:w-2/5 flex flex-col p-5 md:p-10 space-y-10 '>
  <h3 className='text-neutral-black leading-tight  font-montserrat text-[35px] md:text-[70px] font-medium  text-left'>
  Stories Of
  Change
  </h3>
  <p className='font-montserrat text-base lg:text-lg leading-[34px]'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
  </p>
  </div>

)

const LayoutTwo = () => (
  <div className='w-full lg:w-3/5  flex flex-col justify-center items-center lg:flex-row gap-12'>
      <div className=' flex flex-col md:flex-row  gap-[50px] h-min'>
      <div className='rounded-[25px] bg-[#E7F4C0]'>
        
        <img  src={imgOneSecTwo} className="w-full h-[313px]  object-fill rounded-t-[25px]"/>
     
      <div className='p-6  flex flex-col items-start justify-center space-y-6'>
      <div className='space-y-4'>
        <h3 className='text-neutral-black text-xl font-semibold leading-normal capitalize'>A Journey of Hope and Support</h3>
        <p className='text-neutral-black font-montserrat text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>
      
      <p className='text-[#F78C00] font-semibold text-2xl '>Read More</p>
      </div>
      

    </div>
   
      </div>
      <div className=' flex flex-col md:flex-row  gap-[50px] h-min'>
      <div className='rounded-[25px] bg-[#E7F4C0]'>
        
        <img  src={imgTwoSecTwo} className="w-full h-[243px]  object-fill rounded-t-[25px]"/>
     
      <div className='p-6  flex flex-col items-start justify-center space-y-6'>
      <div className='space-y-4'>
        <h3 className='text-neutral-black text-xl font-semibold leading-normal capitalize'>A Journey of Hope and Support</h3>
        <p className='text-neutral-black font-montserrat text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>
      
      <p className='text-[#F78C00] font-semibold text-2xl '>Read More</p>
      </div>
      

    </div>
   
      </div>
      </div>
)

