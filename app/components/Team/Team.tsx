import TeamCard from "../TeamCard/TeamCard";

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Meet our expert <span className="text-red-600">Chefs</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/* team card  */}
        <TeamCard
          image="/images/t1.jpg"
          name="Jhon Doe"
          position="Kitchen porter"
          desc="Experienced kitchen porter with a passion for cleanliness and organization."
        />
        <TeamCard
          image="/images/t2.jpg"
          name="Lila Smith"
          position="Head Chef"
          desc="Talented Head Chef specializing in creating delicious and innovative dishes."
        />
        <TeamCard
          image="/images/t3.jpg"
          name="Michel Mark"
          position="Executive Chef"
          desc="Highly skilled Executive Chef known for leading culinary teams and crafting exquisite menus."
        />
      </div>
    </div>
  );
};

export default Team;
