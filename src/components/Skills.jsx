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
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.map((box) => (
          <div
            key={box.title}
            className="p-6 border rounded-xl bg-white dark:bg-[#07102a] shadow-card hover:shadow-2xl transition"
          >
            <h3 className="font-semibold text-xl mb-3">{box.title}</h3>
            <div className="flex flex-wrap gap-2">
              {box.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-[#042032] rounded-md"
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
