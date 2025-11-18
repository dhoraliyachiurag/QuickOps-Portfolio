import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'theme') {
        if (e.newValue === 'dark')
          document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    window.addEventListener('storage', onStorage);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', onStorage);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const willDark = !html.classList.contains('dark');
    if (willDark) {
      html.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    } else {
      html.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    }
    setIsDark(willDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-[#052033] transition-all"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
}
