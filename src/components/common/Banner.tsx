"use client";
import nextArrow from "~/assets/images/nextArrow.svg";
import prevArrow from "~/assets/images/prevArrow.svg";
import Image from "next/image";
import Link from "next/link";
import banner1 from '~/assets/images/b1.jpg';
import banner2 from '~/assets/images/b2.jpg';
import banner3 from '~/assets/images/b3.jpg';
import banner4 from '~/assets/images/b4.jpg';
import quoteIcon from '~/assets/images/quote.svg';
import { useState } from "react";
 
const Banner = () => {
 
  const [activePage, setActivePage] = useState(0);

  const CarouselContent = [
    { 
        id:1,
        backgroundImage: banner1,
        title: "Votre partenaire rénovation en Côte d’Azur",
        description: "Description 1 home destinat because when the syunch home destinat because when the syunch home destinat because when the syunch",
        link: "/link1",
    },
    { 
        id:2,
        backgroundImage: banner4,
        title: "Votre partenaire rénovation en Côte d’Azur",
        description: "Description 1ption 1 home destinat because when the sy ption 1 home destinat because when the sy",
        link: "/link1",
    },
    { 
        id:3,
        backgroundImage: banner3,
        title: "Votre partenaire rénovation en Côte d’Azur",
        description: "Description 1 ption 1 home destinat because destinat because when the sy vption 1 home destinat because when the sy",
        link: "/link1",
    }
  ]
 
  const images = CarouselContent?.map((el, index) => (
    <div className='absolute -z-10 top-0' key={el?.id}>
      <Image src={el.backgroundImage} alt="Background" width={7680} height={3508} loading="lazy" className={`${activePage === index ? 'block' : 'hidden'} h-[100vh] object-cover`} />
    </div>
  ))
 
  const prev = () => {
    setActivePage(prevActivePage => prevActivePage - 1);
  }
 
  const next = () => {
    setActivePage(prevActivePage => prevActivePage + 1);
  }
  return (
    <div className="flex items-center  min-h-[85vh] ">
      {images}
      <div className="absolute left-[30px] top-[50%]">
        <button onClick={prev} className={`${activePage === 0 ? 'hidden' : 'block'}`}>
          <Image
            src={prevArrow}
            alt="human machinebackground page"
            width={40}
            height={40}
          />
        </button>
      </div>
      <div className="p-12 bg-gray-700/25 m-[8%]  ">
      {CarouselContent?.map((el, index) => (
        <div className={`${index === activePage ? 'block' : 'hidden '}  ${activePage === 0 ? 'pl-[3%]' : ''}`} key={index} >
          <div className="">
            <h1 className="text-white text-2xl max-w-[90%] font-bold mb-5 xl:text-4xl xl:max-w-[44%] 2xl:max-w-[50%] xl:leading-10 md:max-w-[60%] md:text-3xl sm:max-w-[70%] sm:text-2xl slide-left ">{el?.title}</h1>
            <p className="text-white max-w-[95%] xl:max-w-[55%] mb-4 md:max-w-[65%] sm:max-w-[80%] slide-left">{el?.description}</p>
            <button className="text-white  bg-[#2B3467] p-3 rounded-md mt-2 hover:bg-transparent hover:border hover:border-white slide-left flex justify-center items-center gap-2">
            <Image
            src={quoteIcon}
            alt="human machinebackground page"
            width={24}
            height={24}
            className="text-white"
          />
              <Link href="#" className="mr-2">Devis gratuit</Link>
            </button>
          </div>
        </div>
      ))}
      </div>
      <div className="absolute right-[30px] top-[50%]">
        <button onClick={next} className={`${(activePage === (CarouselContent!.length - 1)) ? 'hidden' : 'block'}`}>
          <Image
            src={nextArrow}
            alt="human machinebackground page"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};
 
export default Banner;