import Delivary from "./Delivary/Delivary";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import PopularBurger from "./PopularBurger/PopularBurger";
import Reservaion from "./Reservation/Reservaion";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="overflow-hiddin">
      <Hero />
      <Features />
      <PopularBurger />
      <Delivary />
      <Team />
      <Reservaion />
    </div>
  );
};

export default Home;
