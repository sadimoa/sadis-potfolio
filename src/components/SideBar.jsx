import { NavLink } from "react-router-dom";
import myLogo from "../assets/myLogo.webp";
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile, CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { CiMail, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#1d1d1d] fixed border-r border-gray-500 px-4 h-screen flex flex-col justify-center items-center min-h-screen text-white transition-all duration-300 ease-in-out ${
        isOpen ? "gap-5 w-[12rem]" : "w-[5rem] gap-2"
      }`}
    >
      <div className="border-b-gray-700 pb-3 border-b">
        <img
          className={`rounded-full transition-all duration-300 ${isOpen ? "w-24 h-24" : "w-10 h-10"}`}
          src={myLogo}
          alt="logo"
        />
      </div>
      <div className="text-center transition-opacity duration-300">
        <span className={`${isOpen ? "text-2xl block" : "hidden"}`}>Sadia Mahamud</span>
        <div className={`${isOpen ? "flex" : "hidden"} items-center justify-center pt-5 gap-4 text-2xl`}>
          <FaGithub className="cursor-pointer hover:text-gray-400 transition-colors duration-200" />
          <CiTwitter className="cursor-pointer hover:text-gray-400 transition-colors duration-200" />
          <CiLinkedin className="cursor-pointer hover:text-gray-400 transition-colors duration-200" />
        </div>
      </div>
      <div className={`flex flex-col gap-4 w-full ${isOpen ? "items-center" : "items-start"}`}>
        {/** NavLinks */}
        {[
          { to: "/", icon: <TiHomeOutline />, label: "Home" },
          { to: "/about", icon: <CgProfile />, label: "About" },
          { to: "/projects", icon: <CgCodeSlash />, label: "Projects" },
          { to: "/contact", icon: <CiMail />, label: "Contact" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded w-fit md:w-full px-3 py-2 font-normal text-2xl transition-all duration-200 ease-in-out ${
                isActive ? "bg-[#10b981] text-white" : "bg-[#181818] text-gray-300"
              } hover:bg-[#10b981]`
            }
          >
            {icon}
            <span className={`${isOpen ? "block" : "hidden"}`}>{label}</span>
          </NavLink>
        ))}
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-[#333] flex items-center justify-center w-6 h-6 rounded-full border border-[#4c4b4b] absolute right-[-6%] top-12 transition-transform duration-300"
      >
        {isOpen ? <FaLessThan size={7} /> : <FaGreaterThan size={7} />}
      </div>
    </div>
  );
};

export default SideBar;
