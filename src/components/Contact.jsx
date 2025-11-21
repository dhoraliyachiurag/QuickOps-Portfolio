import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' });

  // SAFE fallback logic (no errors)
  const FORMSPREE =
    (typeof import.meta !== 'undefined' &&
      import.meta.env &&
      import.meta.env.VITE_FORMSPREE_ENDPOINT) ||
    (typeof process !== 'undefined' &&
      process.env &&
      process.env.REACT_APP_FORMSPREE_ENDPOINT) ||
    'https://formspree.io/f/xkgykkok'; // <-- REPLACE WITH YOUR REAL FORMSPREE URL

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: '' });

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      const json = await res.json();
      if (res.ok) {
        setStatus({
          loading: false,
          ok: true,
          msg: 'Message sent successfully!',
        });
        form.reset();
      } else {
        setStatus({
          loading: false,
          ok: false,
          msg: json?.error || 'Something went wrong',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        msg: 'Network error. Try again later.',
      });
    }
  }

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4">
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

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT INFO CARD */}
        <div
          className="p-8 rounded-2xl bg-white/80 dark:bg-[#071225]/50 backdrop-blur-xl 
          shadow-xl border border-white/10 hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-quickBlue text-xl" />
            <a href="mailto:your@email.com">your@email.com</a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-quickBlue text-xl" />
            <a href="tel:+910000000000">+91 00000 00000</a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaWhatsapp className="text-green-500 text-xl" />
            <a href="https://wa.me/910000000000" target="_blank">
              WhatsApp Chat
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-orange-500 text-xl" />
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-white/90 dark:bg-[#071225]/50 backdrop-blur-xl 
          shadow-xl border border-white/10 hover:shadow-2xl transition"
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
                placeholder="you@example.com"
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
              disabled={status.loading}
              type="submit"
              className="px-6 py-3 bg-quickBlue text-white rounded-xl shadow-lg 
              hover:shadow-2xl transition"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* MESSAGE FEEDBACK */}
            {status.ok === true && (
              <p className="text-green-600 font-medium mt-2">{status.msg}</p>
            )}
            {status.ok === false && (
              <p className="text-red-600 font-medium mt-2">{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
