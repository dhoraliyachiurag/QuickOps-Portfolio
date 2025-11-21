/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        quickBlue: '#0B74FF',
      },
      boxShadow: {
        card: '0 6px 18px rgba(11,105,255,0.08)',
      },
    },
  },
  plugins: [],
};
