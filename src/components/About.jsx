import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: '4+ Years', label: 'Experience' },
    { number: '80+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '10-15', label: 'Team Members' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          About <span className="text-quickBlue">Us</span>
        </h2>

        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          At <b>QuickOps India</b>, we build high-performance digital products —
          websites, e-commerce platforms, cloud solutions, and automation
          systems that help businesses scale faster.
          <br />
          <br />
          Our expertise spans{' '}
          <b>
            Software Development, UI/UX Design, Cloud Engineering & Security
          </b>
          . We focus on performance, clean UI, and real business ROI.
        </p>
      </motion.div>

      {/* STATS */}
      <div className="py-14 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="
              text-center p-8 rounded-2xl 
              bg-white/70 dark:bg-[#071225]/40 
              backdrop-blur-xl
              border border-gray-200 dark:border-[#0e1a2c]
              shadow-sm dark:shadow-[0_0_22px_rgba(255,255,255,0.05)]
              hover:shadow-md hover:-translate-y-1
              transition-all duration-300 cursor-pointer
            "
          >
            <motion.p
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-3xl md:text-4xl font-extrabold text-quickBlue mb-2"
            >
              {s.number}
            </motion.p>

            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
