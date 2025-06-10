import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Add success notification here
    }, 2000);
  };

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'sadia@example.com',
      color: '#ff6b6b'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+880 123 456 789',
      color: '#4ecdc4'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      color: '#f39c12'
    }
  ];

  const socialLinks = [
    { Icon: FaGithub, href: '#', color: '#333', label: 'GitHub' },
    { Icon: FaLinkedin, href: '#', color: '#0077B5', label: 'LinkedIn' },
    { Icon: FaTwitter, href: '#', color: '#1DA1F2', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-3xl"
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
        className="container mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaEnvelope className="text-2xl" />
            </motion.div>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          
          <h4 className="text-4xl md:text-6xl font-extrabold heading-primary mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h4>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm interested in freelance work, particularly ambitious or
            large-scale projects. Let's discuss your next big idea!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div className="glass p-8 rounded-2xl">
              <h5 className="text-2xl font-bold mb-6 text-gradient">Send Message</h5>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full p-4 glass rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full p-4 glass rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full p-4 glass rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-4 glass rounded-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-modern flex items-center justify-center gap-3 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass p-6 rounded-2xl">
              <h6 className="text-lg font-semibold mb-4">Connect With Me</h6>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, color, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="p-3 glass rounded-full text-xl"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: `${color}20`,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.3 }}
                    title={label}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Info & Map */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass p-6 rounded-xl"
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 20px 40px ${info.color}30`,
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.5 + index * 0.1 }
                  } : { opacity: 0, x: 50 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${info.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="text-xl" style={{ color: info.color }} />
                    </motion.div>
                    <div>
                      <h6 className="font-semibold text-lg">{info.title}</h6>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div 
              className="glass p-2 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58214.431752914515!2d90.34440619791667!3d23.78077775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bc46a2b6d3%3A0x68b54b0d98e56fd7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1644013663453!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
