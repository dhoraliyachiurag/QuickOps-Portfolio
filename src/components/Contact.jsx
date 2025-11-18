import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Get In <span className="text-quickBlue">Touch</span>
      </motion.h2>

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* LEFT CONTACT CARD */}
        <motion.div
          variants={item}
          className="p-8 rounded-2xl bg-white/70 dark:bg-[#071225]/40 backdrop-blur-xl 
          shadow-xl border border-white/20 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="flex items-center gap-4 mb-5">
            <FaEnvelope className="text-quickBlue text-xl" />
            <a href="mailto:you@example.com" className="hover:text-quickBlue">
              you@example.com
            </a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <FaPhone className="text-quickBlue text-xl" />
            <a href="tel:+910000000000" className="hover:text-quickBlue">
              +91 00000 00000
            </a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <FaWhatsapp className="text-green-500 text-xl" />
            <a
              href="https://wa.me/910000000000"
              className="hover:text-green-500"
              target="_blank"
            >
              WhatsApp Chat
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-orange-500 text-xl" />
            <a href="#" className="hover:text-orange-500">
              Ahmedabad, Gujarat
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          variants={item}
          action="#"
          method="POST"
          className="p-8 rounded-2xl bg-white/70 dark:bg-[#071225]/40 backdrop-blur-xl 
          shadow-xl border border-white/20 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <motion.div variants={staggerVariants} className="grid gap-6">
            {/* INPUT: NAME */}
            <motion.div variants={item}>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="Your full name"
              />
            </motion.div>

            {/* INPUT: EMAIL */}
            <motion.div variants={item}>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="you@example.com"
              />
            </motion.div>

            {/* INPUT: MESSAGE */}
            <motion.div variants={item}>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="Write your message..."
              ></textarea>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-quickBlue text-white rounded-xl shadow-lg 
              hover:shadow-2xl transition text-center"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
