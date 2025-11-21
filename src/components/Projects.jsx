import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [active, setActive] = useState('all Projects');

  const filtered = useMemo(() => {
    if (active === 'all Projects') return projects;
    return projects.filter(
      (p) => Array.isArray(p.category) && p.category.includes(active)
    );
  }, [active]);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Our <span className="text-quickBlue">Past Works</span>
      </motion.h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {filterOptions.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
    relative px-5 py-2 rounded-xl text-sm font-semibold transition-all overflow-hidden

    ${
      isActive
        ? 'text-white bg-quickBlue shadow-[0_4px_18px_rgba(0,112,255,0.3)] scale-[1.03]'
        : 'text-gray-700 dark:text-gray-200 bg-white dark:bg-[#07102a] border border-gray-300 dark:border-gray-600'
    }

    hover:scale-[1.05] hover:shadow-lg
    duration-300
  `}
            >
              {isActive && (
                <span
                  className="
        absolute inset-0 w-full h-full 
        bg-gradient-to-r from-white/30 to-transparent
        translate-x-[-100%]
        animate-[shine_1.4s_ease-in-out_infinite]
      "
                ></span>
              )}
              {cat.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 gap-10">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="
              group rounded-2xl overflow-hidden border 
              bg-white dark:bg-[#07102a]
              shadow-md dark:shadow-[0_0_18px_rgba(255,255,255,0.06)]
              hover:shadow-xl transition-all duration-300
            "
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden bg-gray-50 dark:bg-[#061122]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transform transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="relative h-8 mb-3 overflow-hidden">
                <h3 className="text-lg md:text-xl font-semibold transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
                  {p.title}
                </h3>

                <span className="absolute left-0 top-0 text-lg font-semibold text-quickBlue opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {String(p.type || '').toUpperCase()}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-[#042032] text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="
    group inline-flex items-center gap-2 
    px-3 py-2 rounded-lg text-sm font-semibold
    border backdrop-blur-xl shadow-sm
    transition-all duration-300

    /* NORMAL STATE */
    text-quickBlue dark:text-white
    bg-white/70 dark:bg-[#0d1b32]/50
    border-gray-300 dark:border-[#1d3357]

    /* HOVER STATE */
    hover:bg-quickBlue hover:text-white
    dark:hover:bg-[#1a4d9e] dark:hover:text-white
    hover:shadow-[0_6px_18px_rgba(0,112,255,0.35)]
  "
              >
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  View Project
                </span>

                <FaExternalLinkAlt
                  className="
      text-sm transition-all duration-300 
      opacity-80 group-hover:opacity-100 
      group-hover:translate-x-1
    "
                />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
