import Image from "next/image";
import img1 from "../../../public/images/f1.jpg";
import img2 from "../../../public/images/f2.jpg";
import img3 from "../../../public/images/f3.jpg";

const Features = () => {
  return (
    <div className="pt-[10rem] pb-[3rem]">
      <h1 className="heading">
        Burgers made with <br /> love and{" "}
        <span className="text-red-600">care</span>
      </h1>
      {/* cards  */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* 1st cards  */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300">
            <Image src={img1} alt="img-1" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Burger Bonanza
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Serving happiness between two buns - where every bite is a journey
              to flavor paradise.
            </p>
          </div>
        </div>
        {/* 2nd card   */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-300">
            <Image src={img2} alt="img-1" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Burgers Elevated
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Burgers made with love, served with a side of happiness.Your
              journey to flavor begins at Burger Bite.
            </p>
          </div>
        </div>

        {/* 3rd burger  */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300">
            <Image src={img3} alt="img-1" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Beyond Buns
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Serving happiness between two buns - where every bite is a journey
              to flavor paradise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
