"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Delivary from "./Delivary/Delivary";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import NewsLetter from "./NewsLetter/NewsLetter";
import PopularBurger from "./PopularBurger/PopularBurger";
import Reservaion from "./Reservation/Reservaion";
import Team from "./Team/Team";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      });
    };
    initAos();
  }, []);
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
