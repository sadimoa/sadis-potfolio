import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import myLogo from "../assets/myLogo.webp";
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile, CgCodeSlash } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { CiMail, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    closed: { width: '5rem' },
    open: { width: '12rem' },
  };

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
    <motion.div
      variants={sidebarVariants}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="glass fixed left-0 top-0 h-screen flex flex-col justify-center items-center min-h-screen text-white z-40 border-r border-cyan-400/20"
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Profile Section */}
      <motion.div 
        className="border-b border-gray-700/50 pb-6 mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          className="rounded-full border-2 border-cyan-400/30 glow"
          src={myLogo}
          alt="logo"
          animate={{
            width: isOpen ? '6rem' : '2.5rem',
            height: isOpen ? '6rem' : '2.5rem',
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            borderColor: '#00ffff',
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)',
          }}
        />
      </motion.div>

      {/* Name and Social Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-6"
          >
            <motion.span 
              className="text-xl font-semibold heading-primary block mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Sadia Mahamud
            </motion.span>
            
            <motion.div 
              className="flex items-center justify-center gap-3 text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="p-2 rounded-full glass cursor-pointer"
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: `${color}20`,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            {({ isActive }) => (
              <>
                {/* Active background animation */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                      boxShadow: `0 0 20px ${color}30`,
                    }}
                    layoutId="activeNav"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Icon with glow effect */}
                <motion.div
                  className="relative z-10 text-2xl"
                  whileHover={{ 
                    scale: 1.2,
                    color: color,
                    filter: `drop-shadow(0 0 8px ${color})`,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {icon}
                </motion.div>
                
                {/* Label */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      className="relative z-10 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Toggle Button */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-12 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center w-6 h-6 rounded-full border border-cyan-400/50 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaLessThan size={10} /> : <FaGreaterThan size={10} />}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full blur-sm" />
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
