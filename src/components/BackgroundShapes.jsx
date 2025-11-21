import { motion } from 'framer-motion';

export default function BackgroundShapes() {
  const float = {
    animate: {
      y: [0, -18, 0],
      x: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 6.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-quickBlue/20 blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-purple-500/18 blur-3xl"
      />
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-quickBlue/10 blur-2xl"
      />
    </>
  );
}
