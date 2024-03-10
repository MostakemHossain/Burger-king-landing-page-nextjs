"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { BiCycling } from "react-icons/bi";
import img1 from "../../../public/images/b1.png";
import img2 from "../../../public/images/b2.png";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={img1} alt="img-1" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold  text-yellow-400">
              Fast Food Burger
            </h1>
            <h1 className="text-[85px] sm:text-[60px] leading-[5rem] uppercase text-white font-bold">
              Best <br />
              Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] font-semibold">
              Indulge in the exquisite taste of our Special Deluxe Burger,
              crafted with premium ingredients and unique flavors.
            </p>

            <button className="px-8 mt-[2rem] py-3 text-[16px] bg-green-500 transition-all duration-300 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={img2} alt="img-2" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold  text-yellow-400">
              Tasty Burger
            </h1>
            <h1 className="text-[85px] leading-[5rem] uppercase text-white font-bold">
              Top <br />
              Burgers
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px] font-semibold">
              Our Classic Burger is made with the finest ingredients and grilled
              to perfection. Savor the delicious taste with every bite!
            </p>

            <button className="px-8 mt-[2rem] py-3 text-[16px] bg-blue-500 transition-all duration-300 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
