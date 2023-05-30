import React from "react";
import AboutImg from '../assets/img/about.png';

const About = () => {
  return (
    <div className=" h-screen w-[70%] mx-auto bg-blue-500 ">
      <div className="flex">
        <div>
          <img src={ AboutImg } className=" w-[500px] " alt="" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          ipsam expedita possimus ad atque quas aperiam quis laborum! Fugit
          dignissimos labore molestias perferendis neque, nisi beatae optio non
          illum laboriosam.
        </div>
      </div>
    </div>
  );
};

export default About;
