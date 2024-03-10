import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import PopularBurger from "./PopularBurger/PopularBurger";

const Home = () => {
  return (
    <div className="overflow-hiddin">
      <Hero />
      <Features />
      <PopularBurger />
    </div>
  );
};

export default Home;
