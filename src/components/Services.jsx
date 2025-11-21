import { motion } from 'framer-motion';
import {
  FaBullhorn,
  FaCode,
  FaComments,
  FaPalette,
  FaRobot,
  FaRocket,
  FaServer,
  FaTools,
} from 'react-icons/fa';

export default function Services() {
  const items = [
    {
      icon: <FaRobot className="text-4xl text-quickBlue" />,
      title: 'AI & Automation',
      desc: 'Smart automation, chatbots, workflows, and AI tools to scale your business.',
    },
    {
      icon: <FaPalette className="text-4xl text-quickBlue" />,
      title: 'UI/UX Design',
      desc: 'Modern and premium user interface designs with clean user journeys.',
    },
    {
      icon: <FaCode className="text-4xl text-quickBlue" />,
      title: 'Web Development',
      desc: 'React, Shopify, WordPress, custom apps, dashboards, APIs and more.',
    },
    {
      icon: <FaServer className="text-4xl text-quickBlue" />,
      title: 'Cloud & DevOps',
      desc: 'Cloud deployment, CI/CD pipelines, Docker, performance monitoring.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-quickBlue" />,
      title: 'Digital Marketing',
      desc: 'SEO, ads, brand strategy and complete digital marketing growth.',
    },
    {
      icon: <FaComments className="text-4xl text-quickBlue" />,
      title: 'Consulting',
      desc: 'IT strategy planning, business growth solutions, tech guidance.',
    },
    {
      icon: <FaTools className="text-4xl text-quickBlue" />,
      title: 'Maintenance & Support',
      desc: 'Regular updates, fixes, speed optimization, uptime checks.',
    },
    {
      icon: <FaRocket className="text-4xl text-quickBlue" />,
      title: 'GoHighLevel',
      desc: 'CRM setup, funnels, automation, workflows & business integrations.',
    },
  ];

  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span className="text-quickBlue">Services</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.06, y: -6 }}
            className="
              p-7 rounded-2xl backdrop-blur-xl 
              bg-white/70 dark:bg-[#071225]/40
              border border-gray-200 dark:border-gray-700
              shadow-md dark:shadow-[0_0_18px_rgba(255,255,255,0.05)]
              hover:shadow-2xl transition cursor-pointer text-center
            "
          >
            <div className="mb-5 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
