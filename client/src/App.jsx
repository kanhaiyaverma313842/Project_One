import { useState, Suspense, lazy } from 'react'

import { OuterLayout, SectionOneSkeleton, SectionTwoSkeleton } from './reusableComponents/Containers'
const SectionOne = lazy(() => (import("./components/sections/SectionOne")))
const SectionTwo = lazy(() => (import("./components/sections/SectionTwo")))



function App() {
  
  return (
    <>
      <OuterLayout >
          <h3 className='text-neutral-black  font-montserrat text-[35px] md:text-[70px] font-medium  text-left'>
            Our Work
          </h3>
          <Suspense fallback={<SectionOneSkeleton/>}>
          <SectionOne />
          </Suspense>
         
      </OuterLayout>
      <OuterLayout>
      <Suspense fallback={<SectionTwoSkeleton/>}>
          <SectionTwo />
      </Suspense>    
      </OuterLayout>
       
    </>
  )
}

export default App
