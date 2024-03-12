/* eslint-disable react/no-unescaped-entities */
import { BiPhone } from "react-icons/bi";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className={`pt-[5rem]  relative mt-[2rem] pb-[5rem] mb-[3rem]`}>
      <div className="w-full absolute h-full  top-0 left-0 right-0 bottom-0"></div>
      <div className="w-[80%] mx-auto z-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-red-600 leading-[3rem] md:leading-[4rem]">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-green-600 text-[17px] mt-[1rem] ">
            Make your dining experience memorable by reserving a table with us.
            Whether it's a casual dinner with friends or a special celebration,
            we ensure a delightful and cozy atmosphere for you and your guests.
          </p>
          <div className="flex items-center mt-[2rem] space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-[25px]">Quick Order 24/7</h1>
              <p className="text-yellow-700 text-[30px]">+880-1849545637</p>
            </div>
          </div>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
