"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burger</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {/* burger card */}

          <BurgerCard
            title="Savory Bacon Explosion"
            image="/images/b1.png"
            reviews="45"
            description="Experience the explosion of flavors with our savory bacon-infused masterpiece."
            price="12.99"
          />
          <BurgerCard
            title="Spicy Jalapeño Kick"
            image="/images/b2.png"
            reviews="38"
            description="Ignite your taste buds with the perfect blend of spice and succulence."
            price="11.99"
          />
          <BurgerCard
            title="Mushroom Swiss Symphony"
            image="/images/b3.png"
            reviews="42"
            description="Elevate your senses with the harmonious combination of sautéed."
            price="13.49"
          />
          <BurgerCard
            title="BBQ Bliss Bonanza"
            image="/images/b4.png"
            reviews="41"
            description="Embark on a journey of barbecue delight with our BBQ-infused bliss."
            price="14.99"
          />
          <BurgerCard
            title="Avocado Ranch Dream"
            image="/images/b5.png"
            reviews="48"
            description="Satisfy your cravings with the dreamy combination of creamy."
            price="15.99"
          />
          <BurgerCard
            title="Classic Deluxe Joy"
            image="/images/b6.png"
            reviews="37"
            description="Indulge in the timeless joy of our deluxe burger, a true classic perfected."
            price="10.88"
          />
          <BurgerCard
            title="Buffalo Blue Cheese"
            image="/images/b7.png"
            reviews="50"
            description="Experience the boldness of buffalo paired with the richness of blue cheese."
            price="16.49"
          />
          <BurgerCard
            title="Southwestern Sunset"
            image="/images/b8.png"
            reviews="44"
            description="Savor the sensational flavors of the Southwest with this sunset-inspired creation."
            price="14.88"
          />
          <BurgerCard
            title="Triple Cheese Ultimate Bliss"
            image="/images/b9.png"
            reviews="46"
            description="Dive into ultimate bliss with three layers of exquisite cheese on a succulent patty."
            price="17.99"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
