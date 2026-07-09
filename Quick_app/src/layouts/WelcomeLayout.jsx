import React from "react";
import { Outlet } from "react-router-dom";
import WelcomeNav from "../component/WelcomeNav";
import Footer from "../component/Footer";

const WelcomeLayout = () => {
  return (
    <>
      <WelcomeNav />
      <Outlet />
      <Footer/>
    </>
  );
};

export default WelcomeLayout;