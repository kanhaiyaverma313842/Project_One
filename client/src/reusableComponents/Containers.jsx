const OuterLayout = ({ children }) => {
    return (
      <div className="px-[30px]  md:px-[60px] py-[50px] md:py-[100px] flex flex-col gap-y-10 md:gap-y-20">
        {children}
      </div>
    );
  };


const CardLayout = ({image,title,width}) =>{

  return(
    <div className={`${width} flex flex-col justify-center items-center h-auto md:h-[494px]`}>
  <div className='w-full  p-[15px] bg-neutral-pink rounded-[30px]'>
    <img  src={image} className="w-full h-[300px] md:h-[383px]  object-fill rounded-[30px]"/>
  </div>
  <div className="w-full flex justify-center">
  <div className="py-2 px-8 lg:px-4 xl:px-8 bg-neutral-pink w-fit rounded-b-[30px] h-auto flex ">
    <p className=" lg:max-w-[250px] max-w-[300px]  text-center h-[32px] lg:h-[63px] font-montserrat flex items-center justify-center text-base lg:text-base  xl:text-xl font-semibold">
      {title}
    </p>
  </div>
</div>
</div>
  )
} 

const SkeletonLoader = ({ width = 'w-full', height = 'h-20', rounded = 'rounded-[25px]' }) => {
  return (
    <div className={`animate-pulse bg-gray-300 ${width} ${height} ${rounded}`}></div>
  )
}

const SectionOneSkeleton = () => {
  return (
    <div className='space-y-10'>

      {/* Banner section */}
      <div className="flex flex-col md:flex-row justify-between items-center rounded-[25px] bg-neutral-pink p-0 gap-10 md:gap-[100px]">
        {/* Skeleton for Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <SkeletonLoader width="w-full" height="h-[300px] md:h-[448px]" rounded="rounded-[25px]" />
        </div>

        {/* Skeleton for Text + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-10 text-center md:text-left md:px-[45px] px-4 pb-[15px]">
          <div className="flex flex-col gap-5 w-full">
            <SkeletonLoader width="w-3/4" height="h-8" />
            <SkeletonLoader width="w-full" height="h-5" />
            <SkeletonLoader width="w-2/3" height="h-5" />
          </div>
          <SkeletonLoader width="w-[135px]" height="h-[44px]" rounded="rounded-full" />
        </div>
      </div>

      {/* Cards section */}
      <div className="space-y-10 p-4 w-full flex-row md:flex-col">
        {[1, 2].map((_, index) => (
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10" key={index}>
            <div className={`space-y-4 ${index % 2 === 0 ? 'w-full lg:w-1/3' : 'w-full lg:w-2/3'}`}>
              <SkeletonLoader width="w-full" height="h-[220px]" rounded="rounded-xl" />
              <SkeletonLoader width="w-3/4" height="h-4" />
            </div>
            <div className={`space-y-4 ${index % 2 === 0 ? 'w-full lg:w-2/3' : 'w-full lg:w-1/3'}`}>
              <SkeletonLoader width="w-full" height="h-[220px]" rounded="rounded-xl" />
              <SkeletonLoader width="w-3/4" height="h-4" />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

const SectionTwoSkeleton = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between h-full lg:h-[626px] gap-[30px] lg:gap-[60px]'>

      {/* Skeleton for LayoutOne */}
      <div className='w-full lg:w-2/5 flex flex-col p-5 md:p-10 space-y-10'>
        <SkeletonLoader width="w-3/4" height="h-10 md:h-16" />
        <SkeletonLoader width="w-full" height="h-5" />
        <SkeletonLoader width="w-5/6" height="h-5" />
        <SkeletonLoader width="w-2/3" height="h-5" />
      </div>

      {/* Skeleton for LayoutTwo */}
      <div className='w-full lg:w-3/5 flex flex-col justify-center items-center lg:flex-row gap-12'>

        {/* Card 1 */}
        <div className='flex flex-col md:flex-row gap-[50px] h-min w-full'>
          <div className='rounded-[25px] bg-[#E7F4C0] w-full'>
            <SkeletonLoader width="w-full" height="h-[313px]" rounded="rounded-t-[25px]" />

            <div className='p-6 space-y-4'>
              <SkeletonLoader width="w-3/4" height="h-5" />
              <SkeletonLoader width="w-full" height="h-4" />
              <SkeletonLoader width="w-2/5" height="h-4" />
              <SkeletonLoader width="w-24" height="h-8" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col md:flex-row gap-[50px] h-min w-full'>
          <div className='rounded-[25px] bg-[#E7F4C0] w-full'>
            <SkeletonLoader width="w-full" height="h-[243px]" rounded="rounded-t-[25px]" />

            <div className='p-6 space-y-4'>
              <SkeletonLoader width="w-3/4" height="h-5" />
              <SkeletonLoader width="w-full" height="h-4" />
              <SkeletonLoader width="w-2/3" height="h-4" />
              <SkeletonLoader width="w-24" height="h-8" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export {OuterLayout, CardLayout, SectionOneSkeleton, SectionTwoSkeleton}  





  