import React from "react";
import Top from "../components/Top";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Hobbie from "../components/Hobbie";

const Home = () => {
  return (
    <>
      <Top />
      <About />
      <Skill />
      <Portfolio />
      <Hobbie />
      <Contact />
    </>
  );
};

export default Home;
