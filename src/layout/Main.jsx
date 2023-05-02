import React from "react";
import Home from "../components/Home/Home";

import Footer from "../components/Shared/Footer";
import NavigationBar from "../components/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Home></Home>

      <Footer></Footer>
    </div>
  );
};

export default Main;
