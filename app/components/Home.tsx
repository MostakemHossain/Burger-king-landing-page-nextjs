import Delivary from "./Delivary/Delivary";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import NewsLetter from "./NewsLetter/NewsLetter";
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
      <NewsLetter />
    </div>
  );
};

export default Home;
