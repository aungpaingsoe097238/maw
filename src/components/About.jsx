import React from "react";
import AboutImg from "../assets/img/about.png";
import Title from "./resources/Title";


const About = () => {
  return (
    <div className="md:h-screen m-2 md:m-0 flex justify-center items-center ">

      <div className=" md:w-[70%] mx-auto ">

        <Title  title={'About'} subTitle={'Who am i'}  />
        
        <div className="flex flex-col md:flex-row gap-10 ">

          {/* About Image  */}
          <div className=" basis-1/3">
            <img src={AboutImg} alt="" />
          </div>

          {/* Information */}
          <div className=" basis-2/3">
            <div className=" text-2xl font-bold">I'm Khaing Zar Ni Maw</div>
            <p className=" my-5 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              reiciendis, illum assumenda tempore distinctio nemo nesciunt non
              molestiae accusamus quisquam perferendis autem nulla ut sunt,
              saepe error sit. Beatae, fugiat!
            </p>
            <button class="button-52" role="button">More about me</button>
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default About;
