import { motion } from 'framer-motion';

export default function Hero() {
  const magnetic = {
    onMouseMove: (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translate(0px, 0px)';
    },
  };

  return (
    <section id="hero" className="py-24 md:py-32 text-center relative">
      <div
        onMouseMove={(e) => {
          const layer = document.getElementById('hero-bg');
          const x = (window.innerWidth - e.pageX) / 90;
          const y = (window.innerHeight - e.pageY) / 90;
          layer.style.transform = `translate(${x}px, ${y}px)`;
        }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          id="hero-bg"
          className="w-[120%] h-[120%] bg-gradient-to-br from-quickBlue/10 to-purple-500/10 blur-3xl rounded-full mx-auto"
        ></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Building Projects, Fast & Excellence{' '}
        <span className="text-quickBlue">Web Experiences</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-5 max-w-2xl mx-auto"
      >
        Explore our diverse range of projects across different platforms and
        industries. Each project showcases our commitment to excellence and
        innocation.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex justify-center gap-5 flex-wrap"
      >
        <motion.a
          href="#projects"
          className="magnetic px-7 py-3 rounded-xl bg-quickBlue text-white font-medium shadow-lg hover:shadow-2xl transition-all hover:brightness-110"
          whileHover={{ scale: 1.05 }}
          {...magnetic}
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          className="magnetic px-7 py-3 rounded-xl border-2 border-quickBlue text-quickBlue dark:text-white font-medium hover:bg-quickBlue hover:text-white transition-all shadow-sm"
          whileHover={{ scale: 1.05 }}
          {...magnetic}
        >
          Contact
        </motion.a>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: 'reverse' }}
        className="absolute top-10 right-20 w-6 h-6 bg-quickBlue/40 rounded-full blur-sm"
      ></motion.div>

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        className="absolute bottom-20 left-10 w-8 h-8 bg-purple-500/40 rounded-full blur-sm"
      ></motion.div>
    </section>
  );
}
