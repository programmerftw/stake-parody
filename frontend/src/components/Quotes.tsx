import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Quotes = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#16a34a",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex mx-auto max-w-4xl px-6 flex-col justify-center py-16 space-y-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-5xl md:text-6xl font-bold text-white-200 leading-tight"
      >
        Play Sasta Stake,{" "}
        <span className="text-yellow-500">Become Kanglaaa</span>
      </motion.h1>

      <motion.h3 
        variants={itemVariants}
        className="text-lg md:text-xl text-yellow-300 leading-relaxed"
      >
        Plinko lets players drop a ball from the top of our triangular pin
        pyramid to find the winning route down to a corresponding multiplier.
        Inspired by the Japanese mechanical game known as Pachinko, Plinko
        provides players with the ability to customise your risk factor and
        multipliers ensuring this Stake Original game is suited for everyone at
        our online casino!{" "}
        <span className="font-semibold italic text-yellow-600">
          Inshort, Gareebi mein aata geela
        </span>
      </motion.h3>

      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => navigate("/game")}
        className="flex items-center justify-center space-x-2 bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
      >
        <span>Play Plinko</span>
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};