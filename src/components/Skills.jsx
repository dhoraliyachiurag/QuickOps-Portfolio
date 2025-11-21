export default function Skills() {
  const data = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Vite',
        'Tailwind',
        'Framer Motion',
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      title: 'E-Commerce',
      skills: ['Shopify', 'Liquid', 'Theme Custom', 'Speed Optimization'],
    },
    {
      title: 'CMS',
      skills: ['WordPress', 'Elementor', 'WooCommerce'],
    },
  ];

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span className="text-quickBlue">Skills</span>
      </h2>

      {/* Skill Boxes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((box) => (
          <div
            key={box.title}
            className="
              p-8 rounded-2xl
              bg-white/70 dark:bg-[#071225]/40
              backdrop-blur-xl
              border border-gray-200 dark:border-[#0f1a2b]
              shadow-sm 
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="font-semibold text-xl mb-5 text-gray-900 dark:text-white">
              {box.title}
            </h3>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3">
              {box.skills.map((s) => (
                <span
                  key={s}
                  className="
                    px-3 py-1.5 rounded-md text-xs font-medium
                    bg-gray-100 dark:bg-[#0e1f33]
                    text-gray-700 dark:text-gray-300
                    border border-gray-200 dark:border-[#1d3357]
                    transition-all duration-300
                    hover:bg-quickBlue hover:text-white
                    dark:hover:bg-[#1a4d9e] dark:hover:text-white
                    cursor-pointer
                  "
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
