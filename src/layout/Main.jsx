import React from "react";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

import Footer from "../components/Shared/Footer";
import NavigationBar from "../components/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
