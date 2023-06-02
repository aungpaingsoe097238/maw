import React from "react";
import AboutImg from "../assets/img/about.png";

const About = () => {
  return (
    <>
      <div className=" w-[70%] mx-auto ">

        <div className=" mb-5">
          <span className=" text-3xl font-bold underline ">About me</span>
          <span className=" text-sm bg-slate-300 p-1 ml-2 " >Who am I</span>
        </div>


        <div className="flex gap-10 ">

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
            <button className=" bg-slate-500 p-4 text-white ">More About me</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
