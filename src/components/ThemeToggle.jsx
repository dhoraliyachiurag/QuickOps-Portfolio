import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');

    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefers) document.documentElement.classList.add('dark');
      setIsDark(prefers);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const willDark = !html.classList.contains('dark');

    html.classList.add('theme-transition');

    if (willDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }

    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, 400);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 rounded-md border
        hover:bg-gray-100 dark:hover:bg-[#0d2239]
        transition-all duration-300
        relative overflow-hidden
      "
    >
      {/* Shine effect */}
      <span
        className="
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          opacity-0 group-hover:opacity-100 transition-all
          animate-shine pointer-events-none
        "
      ></span>

      {/* Rotating Icon */}
      <span
        className="inline-block transition-transform duration-500"
        style={{ transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)' }}
      >
        {isDark ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </span>
    </button>
  );
}
