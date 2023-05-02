import React from "react";
import Banner from "./Banner";
import ChefList from "./ChefList";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div className="custom-container text-center">
      <Banner></Banner>
      <ChefList></ChefList>
      <Services></Services>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
