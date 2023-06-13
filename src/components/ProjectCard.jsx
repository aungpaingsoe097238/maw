import React from "react";
import top from "../assets/img/top.png";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

function ProjectCard({ data }) {

  return (
    <div>
      <img src={top} alt="" />

      <div className=" flex justify-between items-center mt-2">
        <span className=" font-bold">{data.title}</span>
        <span className=" flex ">
          <a href={data.githubUrl} target="_black">
            <AiFillGithub className=" text-3xl cursor-pointer hover:text-slate-500" />
          </a>
          <a href={data.url} target="_black">
            <AiOutlineArrowRight className=" text-3xl cursor-pointer hover:text-slate-500" />
          </a>
        </span>
      </div>

      <div className=" my-3 text-slate-700 ">{data.text}</div>

      <div className=" flex gap-2 text-xs ">
        {data.languages.map((language, index) => (
          <div className=" bg-slate-200 px-3 py-1 " key={index}>
            {language}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

