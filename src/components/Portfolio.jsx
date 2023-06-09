import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "Project One",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
    },
    {
      title: "Project Two",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
    },
    {
      title: "Project Three",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
    },
  ]);

  return (
    <div className=" w-[70%] mx-auto ">
      <div className=" mb-5">
        <span className=" text-2xl font-bold underline ">Portfolio</span>
        <span className=" text-xs bg-slate-300 p-1 ml-2 ">Work do so far</span>
      </div>

      <div className=" flex gap-3">
        {
          projects?.map((project,index)=>{
            return <div className=" basis-1/3 " key={index}> <ProjectCard data={project} /> </div>
          })
        }
      </div>
    </div>
  );
};

export default Portfolio;
