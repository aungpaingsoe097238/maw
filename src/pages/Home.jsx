import React from "react";
import NavBar from "../components/NavBar";
import Top from "../components/Top";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>

      <NavBar />
      <Top/>
      <About/>
      <Portfolio/>
      <Contact/>

    </>
  );
};

export default Home;
