const NewsLetter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] md:text-[40px] lg:text-[50px] text-black font-bold uppercase">
          Join for Hot Burger Offers
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Craving mouth-watering burgers? Subscribe to our newsletter and be the
          first to know about exclusive burger deals and promotions. Whether
          you're a fan of classic cheeseburgers or adventurous with gourmet
          options, our newsletter brings you sizzling offers that will make your
          taste buds dance. Don't miss out on the juiciest updates – sign up
          now!
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-5 bg-gray-400 rounded-lg placeholder:text-black outline-none w-[40%]"
          />
          <button className="px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-300 rounded-md text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
