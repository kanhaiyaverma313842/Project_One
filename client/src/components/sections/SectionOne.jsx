import React from 'react'
import { imgfiveSecOne, imgFourSecOne, imgOneSecOne, imgThreeSecOne, imgTwoSecOne } from '../../assets/image';
import { CardLayout } from '../../reusableComponents/Containers';


const SectionOne = () => {
  const groupedInitiatives = [
    {
      pair: [
        {
          title: "Blood donation & medical camps",
          img:imgfiveSecOne ,
        },
        {
          title: "Food Distribution",
          img: imgThreeSecOne,
        },
      ],
    },
    {
      pair: [
        {
          title: "Old age home",
          img:  imgTwoSecOne,
        },
        {
          title: "Helping underprivilege",
          img: imgFourSecOne,
        },
      ],
    },
  ];
  


  return (
    <div className='space-y-10'>
<div className="flex flex-col md:flex-row justify-between items-center rounded-[25px] bg-neutral-pink p-0 gap-10 md:gap-[100px]">
  {/* Image Section */}
  <div className="w-full md:w-1/2  flex justify-center md:justify-start">
    <img 
      src={imgOneSecOne} 
      alt="img1" 
      className="w-full object-cover rounded-[25px] h-auto md:h-[448px] "
    />
  </div>

  {/* Text and Button Section */}
  <div className="w-full  md:w-1/2 flex flex-col m
  justify-center items-center gap-10 text-center md:text-left    md:px-[45px] px-4 md:pr md:pb-0 pb-[15px] ">
    <div className="flex flex-col gap-5   justify-center items-center">
      <h2 className="text-neutral-black text-start font-opensans text-[24px] sm:text-[28px] md:text-[34px] font-semibold leading-[32px] sm:leading-[38px] md:leading-[44px] capitalize">
        Helping Blind &amp; Leprosy Patients
      </h2>
      <p className="text-start font-montserrat text-neutral-black text-base sm:text-lg md:text-xl font-normal leading-[24px] sm:leading-[26px] md:leading-[28px]  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
    </div>

    <button className="self-start flex justify-center items-center w-[135px] h-[44px] px-[5px] py-[10px] rounded-[50px] bg-[#F78C00]">
      <p className="text-white text-center text-[15px] font-semibold leading-[35px] capitalize">
        Contribute
      </p>
    </button>
  </div>

 
</div>


  <div className="space-y-10 p-4  w-full flex-row md:flex-col  ">
    {/* Row 1 */}
    {
      groupedInitiatives.map((item,index)=>
      (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-10" key={index}>
      <CardLayout image={item.pair[0].img} title={item.pair[0].title} width={index%2 === 0 ? " w-full lg:w-1/3 ": " w-full lg:w-2/3 "}/>
      <CardLayout image={item.pair[1].img} title={item.pair[1].title} width={index%2 === 0 ? " w-full lg:w-2/3": " w-full lg:w-1/3 "}/>
    </div>
      ))
    }

   
  </div>
    </div>
  )
}

export default SectionOne