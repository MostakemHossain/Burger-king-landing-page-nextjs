import Image from "next/image";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { RiEBike2Fill } from "react-icons/ri";
import delivaryImg from "../../../public/images/delivery.svg";

const Delivary = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={delivaryImg} alt="delivary" />
        </div>
        <div>
          <h1 className="text-[30px] md:text-[40px] uppercase lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-600">Favourite Burger</span> on the
            way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Indulge in the comfort of your own space with our delivery burger
            experience. From our kitchen to your doorstep, savor the perfect
            blend of flavors and convenience. Because great burgers are meant to
            be enjoyed wherever you are. Taste the joy, delivered with every
            bite!
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium uppercase">
              Delivary in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium uppercase">
              Free shipping from 75$
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium uppercase">
              Delivary on your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivary;
