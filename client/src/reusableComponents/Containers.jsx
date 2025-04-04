const OuterLayout = ({ children }) => {
    return (
      <div className="px-[30px] md:px-[60px] py-[50px] md:py-[100px] flex flex-col gap-y-10 md:gap-y-20">
        {children}
      </div>
    );
  };


const CardLayout = ({image,title,width}) =>{

  return(
    <div className={`${width} flex flex-col justify-center items-center h-[494px]`}>
  <div className='w-full  p-[15px] bg-neutral-pink rounded-[30px]'>
    <img  src={image} className="w-full h-[383px]  object-fill rounded-[30px]"/>
  </div>
  <div className="w-full flex justify-center">
  <div className="px-8 bg-neutral-pink w-fit rounded-b-[30px] h-20 flex justify-center items-center">
    <p className="font-montserrat text-center text-lg md:text-2xl font-semibold">
      {title}
    </p>
  </div>
</div>
</div>
  )
} 


export {OuterLayout,CardLayout}  





  