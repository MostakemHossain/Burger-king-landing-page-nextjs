import Delivary from "./Delivary/Delivary";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import PopularBurger from "./PopularBurger/PopularBurger";

const Home = () => {
  return (
    <div className="overflow-hiddin">
      <Hero />
      <Features />
      <PopularBurger />
      <Delivary />
    </div>
  );
};

export default Home;
