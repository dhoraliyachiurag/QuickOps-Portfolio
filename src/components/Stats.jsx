import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Shopify Stores' },
    { number: '40+', label: 'Happy Clients' },
    { number: '3+ Years', label: 'Experience' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="
              text-center p-6 rounded-xl border 
              bg-transparent
              shadow-[0_4px_15px_rgba(0,0,0,0.08)]
              dark:shadow-[0_0_18px_rgba(255,255,255,0.12)]
              hover:-translate-y-2 
              transition-all duration-300
            "
          >
            <motion.p
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-4xl font-extrabold text-quickBlue mb-2"
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
