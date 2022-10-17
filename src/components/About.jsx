import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I have extensive knowledge of HTML, CSS, JavaScript, REACT and Backend as well. Combined with my
communication and problem-solving skills. I design, code, and implement websites for a variety of purposes. In my
latest project, I redesigned a website for a private client, which helped increase their sales by 25% this quarter.
Building some clones of well-known companies such as Tesla, Amazon, Disney plus and WhatsApp helped me to
gain another level of experience with the latest changes and versions in use, I have developed effective
communication and teamwork skills as well. 
        </p>

        <br />

        <p className="text-xl">
        I have always been passionate about web development, which led me to pursue a Bachelor of Information
Technology degree. I am constantly seeking out recent technologies and staying up-to-date on trends in the
industry. I would be so thrilled to get an opportunity as a Web Developer and learn a lot more.
        </p>
      </div>
    </div>
  );
};

export default About;
