import { motion } from 'framer-motion';

export default function BackgroundShapes() {
  const float = {
    animate: {
      y: [0, -25, 0],
      x: [0, 20, 0],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={float}
        animate="animate"
        className="
          absolute top-10 left-10 w-48 h-48 
          bg-quickBlue/25 dark:bg-quickBlue/15 
          blur-xl rounded-full
        "
      />

      <motion.div
        variants={float}
        animate="animate"
        className="
          absolute bottom-10 right-16 w-56 h-56 
          bg-purple-500/25 dark:bg-purple-500/15 
          blur-xl rounded-full
        "
        transition={{ delay: 1 }}
      />

      <motion.div
        variants={float}
        animate="animate"
        className="
          absolute top-32 right-1/3 w-32 h-32 
          bg-yellow-400/20 dark:bg-yellow-300/10
          blur-2xl rounded-full
        "
        transition={{ delay: 1.5 }}
      />

      <motion.div
        variants={float}
        animate="animate"
        className="
          absolute bottom-24 left-1/4 w-36 h-36 
          bg-green-400/20 dark:bg-green-300/10
          blur-xl rounded-full
        "
        transition={{ delay: 0.7 }}
      />
    </div>
  );
}
