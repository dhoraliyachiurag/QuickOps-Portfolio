import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rohit Sharma',
      role: 'CEO – Premium Jewelers',
      text: 'Amazing Shopify work! The store was fast, beautiful and increased our sales.',
    },
    {
      name: 'Karan Patel',
      role: 'Founder – BizCorp',
      text: 'Delivered a clean WordPress website with great SEO. Highly recommended!',
    },
    {
      name: 'Jignesh Shah',
      role: 'Online Store Owner',
      text: 'The React website is super-fast and modern. Fantastic animations too!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Client <span className="text-quickBlue">Testimonials</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              p-7 rounded-2xl backdrop-blur-xl 
              bg-white/70 dark:bg-[#071225]/40 
              border border-gray-200 dark:border-gray-700 
              shadow-md dark:shadow-[0_0_18px_rgba(255,255,255,0.05)]
              hover:shadow-xl transition
            "
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic leading-7">
              “{r.text}”
            </p>
            <h4 className="font-semibold text-lg">{r.name}</h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {r.role}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
