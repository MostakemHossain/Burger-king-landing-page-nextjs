import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-[5rem] pb-[5rem]">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        <div>
          <div className="flex items-center space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold text-white">
              BurgerBite
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[.3rem]">
            Indulge in the extraordinary. Every bite is a masterpiece. Join us
            on a gastronomic adventure, where passion meets the palate and
            cravings find their match.
          </p>
          <p className="text-white mt-[1rem]">mostakememon123@gmai.com</p>
          <p className="text-red-300 text-[19px] font-bold">+880-1849545637</p>
        </div>

        <div className="text-gray-600">
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Products
          </h1>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Chicken Burger
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Beef Burger
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Crispy Burger
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Clasic Burger
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Delight Burger
          </p>
        </div>
        <div className="text-gray-600">
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Link
          </h1>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Home
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            About
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Menu
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            Products
          </p>
          <p className="mt-[0.7rem] hover:text-yellow-300 transition-all cursor-pointer w-fit duration-300">
            NewsLetter
          </p>
        </div>

        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white uppercase">
            Opening Hours
          </h1>
          <p className="text-white text-[18px]">
            Monday-Friday: <span className="text-yellow-300">10AM -9PM</span>
          </p>
          <p className="text-white text-[18px]">
            Saturday-Sunday: <span className="text-yellow-300">10AM -7PM</span>
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
            <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
            <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-600" />
          </div>
        </div>
      </div>
      <p className="text-gray-600 hover:text-yellow-500 text-center mt-[1.3rem] text-[18px]">
        copyright 2024 Burger Bite. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
