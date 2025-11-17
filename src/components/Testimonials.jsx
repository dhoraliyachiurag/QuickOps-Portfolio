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
    <section id="testimonials" className="py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Client <span className="text-quickBlue">Testimonials</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl bg-white dark:bg-[#071225] shadow-card border hover:shadow-2xl transition"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">“{r.text}”</p>
            <h4 className="font-semibold">{r.name}</h4>
            <span className="text-sm text-gray-500">{r.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
