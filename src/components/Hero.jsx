import { motion } from 'framer-motion';

export default function Hero() {
  const magnetic = {
    onMouseMove: (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      target.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    },
    onMouseLeave: (event) => {
      event.currentTarget.style.transform = '';
    },
  };

  return (
    <section
      id="hero"
      className="
        relative 
        flex 
        items-center 
        justify-center 
        text-center 
        min-h-[85vh]   /* perfect height */
        px-6
      "
    >
      <div className="max-w-3xl mx-auto">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to <span className="text-quickBlue">QuickOps India</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          We help brands grow with powerful software solutions, clean UI/UX,
          cloud services, cybersecurity, and custom development.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex justify-center gap-5 flex-wrap"
        >
          {/* PRIMARY BTN */}
          <motion.a
            href="#projects"
            {...magnetic}
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="
              relative px-8 py-3 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-quickBlue to-blue-600 
              shadow-[0_10px_30px_rgba(11,116,255,0.4)]
              hover:shadow-[0_15px_45px_rgba(11,116,255,0.55)]
              transition-all duration-300
              overflow-hidden
            "
          >
            <span className="relative z-10">View Projects</span>
            <span
              className="
                absolute inset-0 bg-gradient-to-r
                from-white/20 to-transparent opacity-0
                hover:opacity-100 translate-x-[-100%]
                hover:translate-x-[100%] transition-all duration-700
              "
            ></span>
          </motion.a>

          {/* SECONDARY BTN */}
          <motion.a
            href="#contact"
            {...magnetic}
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="
              px-8 py-3 rounded-2xl font-semibold
              backdrop-blur-xl bg-white/10 dark:bg-white/5
              border border-quickBlue/50
              text-quickBlue dark:text-white
              hover:bg-quickBlue hover:text-white
              shadow-[0_6px_18px_rgba(11,116,255,0.25)]
              hover:shadow-[0_12px_30px_rgba(11,116,255,0.45)]
              transition-all duration-300
            "
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
