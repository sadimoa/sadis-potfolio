import js from "../assets/JS.svg";
import reactLogo from "../assets/react.png";
import nodeJs from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import htmlLogo from "../assets/html.png";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

const About = () => {
  return (
    <div className="min-h-screen ml-20 bg-[#1d1d1d] text-white flex flex-col  justify-center px-6 md:px-12">
      <div className="md:text-left flex flex-col space-y-5">
        <h2 className="text-3xl md:text-6xl font-extrabold text-[#00ffff]">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-fit md:max-w-[40rem] ">
          Hi, I'm Sadia, a self-taught web developer passionate about building
          intuitive and user-friendly web applications. With 4 years of
          programming experience, I specialize in React, Tailwind CSS, Node.js,
          Express, and MongoDB, creating modern and responsive digital
          solutions. Let’s connect and create something amazing together! 🚀
        </p>

        <button className="cursor-pointer bg-[#2d2d2d] py-2 w-fit rounded px-5 font-medium">
          Download CV 📄
        </button>
      </div>
      <div className="flex gap-4 mt-10 self-start text-2xl md:text-3xl">
        <FaGithub className="cursor-pointer" />
        <CiTwitter className="cursor-pointer" />
        <CiLinkedin className="cursor-pointer" />
      </div>
      <div className="box md:flex hidden mr-5">
        <section className="box-child">
          <div className="face-1">
            <img className="w-full" src={nodeJs} alt="nodeJs" />
          </div>
          <div className="face-2">
            <img className="w-full" src={mongodb} alt="mongodb" />
          </div>
          <div className="face-3">
            <img className="w-full" src={tailwind} alt="tailwind" />
          </div>
          <div className="face-4">
            <img className="w-full" src={reactLogo} alt="reactlogo" />
          </div>
          <div className="face-5">
            <img className="w-full" src={js} alt="js" />
          </div>
          <div className="face-6">
            <img className="w-full" src={htmlLogo} alt="htmlLogo" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
