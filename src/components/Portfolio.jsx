import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Title from "./resources/Title";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "Project One",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
      languages: ["JavaScript", "TailWind"],
    },
    {
      title: "Project Two",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
      languages: ["PHP", "Laravel", "Bootstrap"],
    },
    {
      title: "Project Three",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae enim error nisi debitis ad est, fugiat nam. Nostrum",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "https://www.google.com",
      languages: ["C#", "C#.net"],
    },
  ]);

  return (
    <div className="md:h-screen m-2 md:m-0 flex justify-center items-center ">

      <div className=" md:w-[70%] mx-auto ">

        <Title title={'Portfolio'} subTitle={'Work do so far'} />

        <div className=" flex flex-col md:flex-row gap-5">
          {projects?.map((project, index) => {
            return (
              <div className=" basis-1/3 " key={index}>
                <ProjectCard data={project} />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
