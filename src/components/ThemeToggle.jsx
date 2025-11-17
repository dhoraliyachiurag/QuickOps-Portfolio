import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const obs = (e) =>
      setIsDark(document.documentElement.classList.contains('dark'));
    window.addEventListener('storage', obs);
    return () => window.removeEventListener('storage', obs);
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-[#052033]"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
