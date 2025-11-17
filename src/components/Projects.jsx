import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const filterOptions = [
  'all Projects',
  'jewellery',
  'shopify',
  'wordpress',
  'e-commerce',
  'Restaurant',
  'furniture',
  'real estate',
  'custom coded',
];

const titleVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -12 },
};

const typeVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 12 },
};

export default function Projects() {
  const [active, setActive] = useState('all Projects');
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === 'all Projects'
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-20 px-6">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        My <span className="text-quickBlue">Projects</span>
      </motion.h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {filterOptions.map((cat) => {
          const isActive = active === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm border font-medium transition 
                ${
                  isActive
                    ? 'bg-quickBlue text-white shadow-[0_6px_20px_rgba(0,112,255,.35)]'
                    : 'bg-white dark:bg-[#07102a] text-gray-700 dark:text-gray-200 hover:text-quickBlue hover:border-quickBlue border-gray-300 dark:border-gray-600'
                }
              `}
            >
              {cat.toUpperCase()}
            </motion.button>
          );
        })}
      </div>

      {/* PROJECTS GRID */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            onHoverStart={() => setHovered(p.id)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{
              scale: 1.03,
              rotateX: 4,
              rotateY: -4,
              boxShadow: '0px 10px 30px rgba(0,0,0,0.18)',
            }}
            transition={{ duration: 0.3 }}
            className="
              rounded-2xl overflow-hidden border bg-white dark:bg-[#07102a]
              shadow-[0_6px_18px_rgba(0,0,0,0.08)]
              dark:shadow-[0_0_20px_rgba(255,255,255,0.10)]
              transition-all duration-300 cursor-pointer
            "
          >
            <a href={p.link} target="_blank" rel="noreferrer">
              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* TITLE ↔ TYPE */}
                <div className="relative h-10 overflow-hidden mb-2">
                  <motion.h3
                    variants={titleVariants}
                    animate={hovered === p.id ? 'hidden' : 'visible'}
                    transition={{ duration: 0.25 }}
                    className="text-lg md:text-xl font-semibold"
                  >
                    {p.title}
                  </motion.h3>

                  <motion.span
                    variants={typeVariants}
                    animate={hovered === p.id ? 'visible' : 'hidden'}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-0 text-lg font-semibold text-quickBlue"
                  >
                    {p.type.toUpperCase()}
                  </motion.span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {p.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-[#042032] text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-quickBlue font-medium text-sm"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>View Project</span>
                </motion.div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
