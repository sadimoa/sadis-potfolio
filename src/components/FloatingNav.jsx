import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile, CgCodeSlash } from "react-icons/cg";
import { CiMail } from "react-icons/ci";

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: <TiHomeOutline />, label: 'Home' },
    { id: 'about', icon: <CgProfile />, label: 'About' },
    { id: 'projects', icon: <CgCodeSlash />, label: 'Projects' },
    { id: 'contact', icon: <CiMail />, label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div className="glass px-4 py-3 rounded-full">
        <div className="flex items-center gap-2">
          {navItems.map(({ id, icon, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-3 rounded-full transition-all duration-300 relative ${
                activeSection === id
                  ? 'text-cyan-400 bg-cyan-400/20'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={label}
            >
              <div className="text-xl">
                {icon}
              </div>
              {activeSection === id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingNav;
