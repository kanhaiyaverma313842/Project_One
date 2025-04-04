import { useState } from 'react'
import SectionOne from './components/sections/SectionOne'
import { OuterLayout } from './reusableComponents/Containers'
import SectionTwo from './components/sections/SectionTwo'



function App() {
  
  return (
    <>
      <OuterLayout >
          <h3 className='text-neutral-black  font-montserrat text-[35px] md:text-[70px] font-medium  text-left'>
            Our Work
          </h3>
          <SectionOne />
      </OuterLayout>
      <OuterLayout>
          
          <SectionTwo />
      </OuterLayout>
       
    </>
  )
}

export default App
