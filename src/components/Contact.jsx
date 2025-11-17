import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Get In <span className="text-quickBlue">Touch</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 "
      >
        {/* LEFT CONTACT INFO */}
        <div className="p-8 rounded-2xl bg-white/70 dark:bg-[#071225]/40 backdrop-blur-xl shadow-xl border border-white/20 dark:border-gray-700 hover:shadow-2xl transition">
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
            <p>Ahmedabad, Gujarat</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          action="#"
          method="POST"
          className="p-8 rounded-2xl bg-white/70 dark:bg-[#071225]/40 backdrop-blur-xl shadow-xl border border-white/20 dark:border-gray-700 hover:shadow-2xl transition"
        >
          <div className="grid gap-6">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 mt-2 border rounded-lg bg-transparent"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-quickBlue text-white rounded-xl shadow-lg hover:shadow-xl transition text-center"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
