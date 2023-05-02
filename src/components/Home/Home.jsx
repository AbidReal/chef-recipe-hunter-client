import React from "react";
import Banner from "./Banner";
import ChefList from "./ChefList";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="custom-container text-center">
        <ChefList></ChefList>
        <Services></Services>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
