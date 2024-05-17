import React from "react";
import NavBar from "../components/landingPage/NavBar";
import HeroLanding from "../components/landingPage/HeroLanding";
import Services from "../components/landingPage/Services";

const Landing = () => {
  return (
    <>
      <NavBar />
      <HeroLanding />
      <Services />
    </>
  );
};

export default Landing;
