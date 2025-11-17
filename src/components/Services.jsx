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
      icon: <FaRobot className="text-4xl text-purple-500" />,
      title: 'AI & Automation',
      desc: 'Workflow automation, chatbot development, smart business tools, and AI solutions.',
    },
    {
      icon: <FaPalette className="text-4xl text-pink-500" />,
      title: 'UI/UX Design',
      desc: 'Modern, clean, and user-focused design with strong emphasis on usability.',
    },
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: 'Development',
      desc: 'React, Shopify, WordPress, custom apps, dashboards, APIs & full-stack solutions.',
    },
    {
      icon: <FaServer className="text-4xl text-green-500" />,
      title: 'DevOps & Automation',
      desc: 'CI/CD pipelines, cloud deployment, Docker, performance monitoring & automation.',
    },
    {
      icon: <FaBullhorn className="text-4xl text-red-500" />,
      title: 'Digital Marketing',
      desc: 'SEO, social media optimization, ads management & digital brand growth.',
    },
    {
      icon: <FaComments className="text-4xl text-cyan-500" />,
      title: 'Consulting',
      desc: 'Strategy planning, tech guidance, and business process improvement.',
    },
    {
      icon: <FaTools className="text-4xl text-yellow-500" />,
      title: 'Support & Maintenance',
      desc: 'Regular updates, fixes, monitoring, uptime checks & long-term support.',
    },
    {
      icon: <FaRocket className="text-4xl text-indigo-500" />,
      title: 'Go-High-Level',
      desc: 'CRM setup, automation, funnels, workflows & complete business integration.',
    },
  ];

  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-quickBlue">Services</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ scale: 1.05, y: -6 }}
            className="
              p-7 rounded-2xl bg-white dark:bg-[#071225]
              shadow-[0_4px_24px_rgba(0,0,0,0.1)]
              dark:shadow-[0_0_18px_rgba(255,255,255,0.05)]
              border hover:shadow-2xl transition cursor-pointer text-center
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
