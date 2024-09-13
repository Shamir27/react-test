import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Top from "../headers/Top";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Top />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
