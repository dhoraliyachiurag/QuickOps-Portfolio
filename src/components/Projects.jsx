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
    <section id="projects" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        My <span className="text-quickBlue">Projects</span>
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
                px-4 py-2 rounded-xl text-sm font-medium transition
                ${
                  isActive
                    ? 'bg-quickBlue text-white shadow-[0_6px_20px_rgba(0,112,255,.25)] border-transparent'
                    : 'bg-white dark:bg-[#07102a] text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:text-quickBlue hover:border-quickBlue'
                }
              `}
            >
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
            className="group rounded-2xl overflow-hidden border bg-white dark:bg-[#07102a] shadow-[0_6px_18px_rgba(0,0,0,0.06)] dark:shadow-[0_0_18px_rgba(255,255,255,0.06)] transition-all duration-300"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              {/* IMAGE (top 50%) */}
              <div className="h-56 overflow-hidden bg-gray-50 dark:bg-[#061122]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* CONTENT (bottom 50%) */}
              <div className="p-5 flex flex-col justify-between h-[220px]">
                <div className="relative h-8 overflow-hidden mb-2">
                  <h3 className="text-lg md:text-xl font-semibold transform transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
                    {p.title}
                  </h3>

                  <span className="absolute left-0 top-0 text-lg font-semibold text-quickBlue opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {String(p.type || '').toUpperCase()}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(p.tech) &&
                    p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-[#042032] text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-quickBlue font-medium text-sm flex items-center gap-2">
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
