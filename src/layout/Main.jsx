import React from "react";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

import Footer from "../components/Shared/Footer";
import NavigationBar from "../components/Shared/NavigationBar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <NavigationBar></NavigationBar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>

      <Footer className="mt-auto"></Footer>
    </div>
  );
};

export default Main;
