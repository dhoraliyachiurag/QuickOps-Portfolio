import { motion } from 'framer-motion';

export default function BackgroundShapes() {
  const float = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      {/* Blob 1 */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-quickBlue-500/20 blur-3xl"
      ></motion.div>

      {/* Blob 2 */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
      ></motion.div>

      {/* Blob 3 */}
      <motion.div
        variants={float}
        animate="animate"
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"
      ></motion.div>
    </>
  );
}
