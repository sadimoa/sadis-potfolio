import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import js from "../assets/JS.svg";
import reactLogo from "../assets/react.png";
import nodeJs from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import htmlLogo from "../assets/html.png";
import { FaGithub, FaDownload } from "react-icons/fa6";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        damping: 12,
      },
    },
  };

  const skillsData = [
    { name: 'JavaScript', level: 90, icon: js, color: '#F7DF1E' },
    { name: 'React', level: 95, icon: reactLogo, color: '#61DAFB' },
    { name: 'Node.js', level: 85, icon: nodeJs, color: '#339933' },
    { name: 'Tailwind', level: 92, icon: tailwind, color: '#06B6D4' },
    { name: 'MongoDB', level: 80, icon: mongodb, color: '#47A248' },
    { name: 'HTML/CSS', level: 98, icon: htmlLogo, color: '#E34F26' },
  ];

  const socialLinks = [
    { Icon: FaGithub, href: '#', color: '#333' },
    { Icon: CiTwitter, href: '#', color: '#1DA1F2' },
    { Icon: CiLinkedin, href: '#', color: '#0077B5' },
  ];

  return (
    <div className="min-h-screen ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-extrabold heading-primary mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Hi, I'm <span className="text-gradient font-semibold">Sadia</span>, a self-taught web developer passionate about building
              intuitive and user-friendly web applications. With{" "}
              <span className="text-cyan-400 font-semibold">4 years</span> of
              programming experience, I specialize in modern web technologies,
              creating responsive and performant digital solutions.
            </p>
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl border border-cyan-400/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <p className="text-cyan-300 text-sm">
                💡 "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.button
              className="btn-modern flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-4 h-4" />
              Download CV
            </motion.button>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="glass p-3 rounded-full glow cursor-pointer text-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    backgroundColor: `${color}20`,
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.8 + index * 0.1 }
                  } : { opacity: 0, y: 20 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Skills */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gradient mb-6">Technical Skills</h3>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass p-6 rounded-xl card-hover"
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 20px 40px ${skill.color}40`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-6 h-6"
                    />
                  </motion.div>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Proficiency</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced 3D Cube - Hidden on mobile, visible on desktop */}
          <motion.div 
            className="hidden md:block relative h-64"
            variants={itemVariants}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ 
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-20 h-20 glass flex items-center justify-center rounded-xl"
                    style={{
                      transform: `rotateY(${index * 60}deg) translateZ(60px)`,
                      boxShadow: `0 0 20px ${skill.color}40`,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
