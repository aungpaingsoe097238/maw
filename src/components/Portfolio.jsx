import React from "react";
import top from "../assets/img/top.png";

const Portfolio = () => {
  return (
    <div className=" w-[70%] mx-auto ">
      <div className=" mb-5">
        <span className=" text-2xl font-bold underline ">Portfolio</span>
        <span className=" text-xs bg-slate-300 p-1 ml-2 ">Work do so far</span>
      </div>

      <div className=" flex gap-3">
        <div className=" basis-1/3">
          <img src={top} alt="" />

          <div className=" flex justify-between mt-2">
            <span className=" font-bold">Alpha</span>
            <span>Icons</span>
          </div>

          <div className=" my-3 text-slate-700 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae
            enim error nisi debitis ad est, fugiat nam. Nostrum voluptatum
            repellat enim quo eveniet ab tempore odit blanditiis consequatur
            accusantium.
          </div>

          <div className=" flex gap-2 text-xs ">
            <div className=" bg-slate-200 px-3 py-1 ">Javascript</div>
            <div className=" bg-slate-200 px-3 py-1 ">Reactjs</div>
            <div className=" bg-slate-200 px-3 py-1 ">tailwindcss</div>
          </div>
        </div>

        <div className=" basis-1/3">Project Two</div>
        <div className=" basis-1/3">Project Three</div>
      </div>
    </div>
  );
};

export default Portfolio;
