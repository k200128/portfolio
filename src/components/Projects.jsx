import React from "react";


import amazon from "../assets/portfolio/amazon.png";
import tesla from "../assets/portfolio/tesla.png";
import disney from "../assets/portfolio/disney.png";
import netflix from "../assets/portfolio/netflix.jpg";
import RockPaperScissor from "../assets/portfolio/RockPaperScissor.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: amazon,
      url:"https://k200128.github.io/amazon-clone/",
      git:"https://github.com/k200128/amazon-clone"

    },
    {
      id: 2,
      src: tesla,
      url:"https://k200128.github.io/tesla-clone/",
      git:"https://github.com/k200128/tesla-clone"
    },
    {
      id: 3,
      src: disney,
      url:"https://k200128.github.io/disney-clone/",
      git:"https://github.com/k200128/disney-clone"
    },
    {
      id: 4,
      src: "https://user-images.githubusercontent.com/97960285/166142097-1a53b766-80c3-47a3-87e6-19b319891f5e.png",
      url:"https://netflix-build-a9aad.web.app",
      git:"https://github.com/k200128/netflix-build"
    },
    {
      id: 5,
      src: RockPaperScissor,
      url:"https://condescending-edison-127c4b.netlify.app",
      git:"https://github.com/k200128/resonate"
    },
    // {
    //   id: 6,
    //   src: reactWeather,
    //   url:"",
    //   git:"https://github.com/k200128/parth-portfolio"
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , url, git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg  height[120px] width-140px">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-42 w-90 "
              />
              <div className="flex items-center justify-center">
                

                
                {/* <Routes to={url}> */}
<a href={url}>
                <button 
className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  Demo 
                </button>
                </a>
                {/* </Routes> */}
               
               <a href ={git}> 
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
