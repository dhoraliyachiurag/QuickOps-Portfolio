import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: '4+ Years', label: 'Experience' },
    { number: '80+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '10-15', label: 'Team Member' },
  ];
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          About <span className="text-quickBlue">Me</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          At QuickOps, we pride ourselves on our ability to deliver exceptional
          outcomes for our clients.
          <br />
          <br />
          With a diverse portfolio that showcases successful projects in custom{' '}
          <b>
            Software Develoment, Web Design, Cloud Computing & Cybersecurity
          </b>
          , our team has consistently empowered businesses to elevate their
          operationa and maintain a competitive edge in the fast-paced digital
          landscape.
        </p>
      </motion.div>
      <section className="py-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 ">
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
              hover:shadow-2xl transition-all duration-300 
            "
            >
              <motion.p
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-4xl font-extrabold text-quickBlue mb-2 "
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
    </section>
  );
}
