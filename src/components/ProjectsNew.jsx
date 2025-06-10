import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectList from "../components/ProjectList";
import { FaArrowRight, FaCode, FaRocket } from 'react-icons/fa';

const ProjectsNew = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-40 left-20 w-48 h-48 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-12 relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="text-2xl" />
            </motion.div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          
          <h3 className="text-4xl md:text-6xl font-extrabold heading-primary">
            Recent <span className="text-gradient">Work</span>
          </h3>
          
          <motion.div 
            className="glass p-6 rounded-2xl max-w-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I have curated a small selection of recent projects that showcase the
              diverse range of work I have been a part of. Each project represents
              a unique challenge and creative solution, demonstrating my expertise
              in modern web development.
            </p>
            
            <motion.div
              className="mt-4 flex items-center gap-2 text-cyan-400"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaRocket className="text-sm" />
              <span className="text-sm font-medium">Swipe to explore →</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants}>
          <ProjectList />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-6 justify-between glass p-8 rounded-2xl"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">Want to see more?</h4>
            <p className="text-gray-400">
              Explore my complete portfolio and discover all projects I've worked on.
            </p>
          </div>
          
          <motion.button
            className="btn-modern flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <FaArrowRight />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '20+', label: 'Projects Completed', color: '#00ffff' },
            { number: '15+', label: 'Technologies Used', color: '#ff6b6b' },
            { number: '5+', label: 'Happy Clients', color: '#4ecdc4' },
            { number: '4', label: 'Years Experience', color: '#f39c12' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-6 rounded-xl text-center"
              whileHover={{ 
                y: -5,
                boxShadow: `0 20px 40px ${stat.color}30`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8 + index * 0.1 }
              } : { opacity: 0, y: 20 }}
            >
              <motion.div
                className="text-3xl font-bold mb-2"
                style={{ color: stat.color }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  delay: 1 + index * 0.1, 
                  type: 'spring',
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsNew;
