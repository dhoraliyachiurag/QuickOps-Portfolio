import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', link: '#hero' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'About', link: '#about' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <>
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-[#021227]/60 border-b border-gray-200 dark:border-[#0b2540] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* FIXED LOGO (NO CHANGE) */}
          <a
            href="http://localhost:5173/"
            className="font-extrabold text-quickBlue text-2xl tracking-wide"
          >
            QuickOpsPortfolio
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="
                  text-white-800 hover:text-quickBlue 
                  transition-all duration-200 
                  hover:text-quickBlue
                  hover:-translate-y-1
                  transform
                "
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl hover:text-quickBlue transition"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white dark:bg-[#071225] shadow-2xl p-6 transition-all duration-300 ${
            open ? 'translate-x-0' : '-translate-x-80'
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-quickBlue">Menu</h2>
            <button
              className="text-2xl hover:text-quickBlue transition"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="
                    block text-gray-800 dark:text-gray-200 
                    transition-all duration-200 
                    hover:text-quickBlue
                    hover:-translate-y-1
                    transform
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="mt-10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
