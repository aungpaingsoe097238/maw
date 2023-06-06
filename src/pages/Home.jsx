import React from "react";
import Top from "../components/Top";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>

      {/* <Top/> */}
      <div className=" h-screen flex justify-center items-center ">
        <About />
      </div>

      <Portfolio/>
        {/* <Contact/> */}
        
    </>
  );
};

export default Home;
