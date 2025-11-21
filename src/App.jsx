import { useEffect } from 'react';
import About from './components/About';
import BackgroundShapes from './components/BackgroundShapes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

export default function App() {
  useEffect(() => {
    // initialize theme to system preference
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#071023] text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden">
          <BackgroundShapes />
        </div>
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
