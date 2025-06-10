import { useState } from "react";
import { NavLink } from "react-router-dom";
import myLogo from "../assets/myLogo.webp";
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile, CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { CiMail, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const SideBarSimple = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", icon: <TiHomeOutline />, label: "Home", color: "#00ffff" },
    { to: "/about", icon: <CgProfile />, label: "About", color: "#ff6b6b" },
    { to: "/projects", icon: <CgCodeSlash />, label: "Projects", color: "#4ecdc4" },
    { to: "/contact", icon: <CiMail />, label: "Contact", color: "#95a5a6" },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "#", color: "#333" },
    { Icon: CiTwitter, href: "#", color: "#1DA1F2" },
    { Icon: CiLinkedin, href: "#", color: "#0077B5" },
  ];

  return (
    <div
      className={`glass fixed left-0 top-0 h-screen flex flex-col justify-center items-center min-h-screen text-white z-40 border-r border-cyan-400/20 transition-all duration-300 ${
        isOpen ? "w-48" : "w-20"
      }`}
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Profile Section */}
      <div className="border-b border-gray-700/50 pb-6 mb-6">
        <img
          className={`rounded-full border-2 border-cyan-400/30 glow transition-all duration-300 ${
            isOpen ? 'w-24 h-24' : 'w-10 h-10'
          }`}
          src={myLogo}
          alt="logo"
        />
      </div>

      {/* Name and Social Links */}
      {isOpen && (
        <div className="text-center mb-6">
          <span className="text-xl font-semibold heading-primary block mb-4">
            Sadia Mahamud
          </span>
          
          <div className="flex items-center justify-center gap-3 text-xl">
            {socialLinks.map(({ Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className="p-2 rounded-full glass cursor-pointer hover:scale-110 transition-transform"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <div className="flex flex-col gap-3 w-full px-4">
        {navItems.map(({ to, icon, label, color }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-3 py-3 font-medium text-lg transition-all duration-300 ease-in-out relative overflow-hidden ${
                isActive 
                  ? "glass text-white shadow-lg" 
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            <div className="relative z-10 text-2xl">
              {icon}
            </div>
            
            {isOpen && (
              <span className="relative z-10 font-medium">
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-12 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center w-6 h-6 rounded-full border border-cyan-400/50 shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? <FaLessThan size={10} /> : <FaGreaterThan size={10} />}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-70" />
      </div>
    </div>
  );
};

export default SideBarSimple;
