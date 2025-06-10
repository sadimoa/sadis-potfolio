import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 left-40 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl"
        animate={{
          y: [0, 15, 0],
          transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="container gap-8 pl-10 justify-center mx-auto flex flex-col h-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading with typing effect */}
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="font-bold md:text-8xl text-4xl heading-primary"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi 
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I am <span className="text-gradient">Sadia</span>
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="relative"
            >
              Web Developer
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with terminal effect */}
        <motion.div variants={itemVariants} className="relative">
          <div className="glass p-4 rounded-xl max-w-fit">
            <p className="text-gray-300 md:tracking-[0.3rem] font-medium md:uppercase terminal text-sm md:text-base">
              Full Stack Web Application Developer
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div variants={itemVariants}>
          <motion.button
            className="btn-modern magnetic-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 1.8, duration: 0.6 }
            }}
          >
            Hire Me
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Social Links with glassmorphism */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-4 mt-8"
        >
          {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
            <motion.div
              key={platform}
              className="glass p-3 rounded-full cursor-pointer glow"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 2 + index * 0.1 }
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 right-10 text-8xl opacity-10 select-none"
        animate={{ 
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
      >
        ⚡
      </motion.div>
    </div>
  );
};

export default Hero;
