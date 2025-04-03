import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const FoundIssue = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-24 lg:mb-32 mt-16 lg:mt-0 bg-gradient-to-br from-gray-900 to-gray-800 w-[96%] max-w-screen-lg mx-auto px-6 md:px-14 py-14 rounded-[36px] shadow-xl"
    >
      <div className="lg:grid grid-cols-[45%,1fr] gap-16 md:gap-28 items-center">
        <motion.div 
          variants={imageVariants}
          className="rounded-xl flex justify-center items-center"
        >
          <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713657312/undraw_questions_re_1fy7_kqjpu3.svg"
            alt="Questions illustration"
            className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <div className="mt-12 lg:mt-0">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
          >
            Found an Issue?
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed"
          >
            Please create an issue in our GitHub repository below. Your contributions 
            are valuable and help make our platform better for everyone.
          </motion.p>

          <motion.a
            href="https://github.com/programmerftw/stake-parody/issues"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-10 group flex items-center justify-center gap-4 bg-transparent border border-gray-600 text-white rounded-2xl px-8 py-6 transition-all duration-300 hover:border-gray-400"
          >
            <Github className="w-8 h-8 text-white transition-transform group-hover:rotate-12" />
            <span className="text-2xl md:text-3xl font-medium">Open Issue on GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
