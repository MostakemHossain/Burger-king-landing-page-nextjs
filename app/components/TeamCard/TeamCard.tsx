import Image from "next/image";

interface props {
  image: string;
  name: string;
  position: string;
  desc: string;
}

const TeamCard = ({ image, name, position, desc }: props) => {
  return (
    <div className="p-3 shadow-2xl rounded-md">
      <Image
        src={image}
        alt="img"
        height={400}
        width={400}
        className="mx-auto rounded-2xl"
      />
      <h1 className="text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 mx-auto text-white text-center w-fit font-medium">
        {position}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
        {desc}
      </p>
    </div>
  );
};

export default TeamCard;
