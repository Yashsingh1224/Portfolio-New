import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

// Import Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Testimonials from './components/Testimonals';
import FreelanceWork from './components/FreelanceWork';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative">

      {/* Navbar: Changed 'fixed' to 'absolute' */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200/50 dark:border-dark-border/50">
        <div className="text-xl font-bold font-mono tracking-tighter">
          <span className="text-primary">&lt;</span>
          Yash
          <span className="text-primary">/&gt;</span>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <main>
        <Hero />
        <About />

        <Experience />
        <TechStack />
        <Services />
        <Projects />
        <FreelanceWork />
        <Testimonials />
        <Certificates />
        <Contact />
      </main>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm dark:border-t dark:border-dark-border">
        <p>© 2025 • Designed & Built by Yash</p>
      </footer>
    </div>
  );
}

export default App;