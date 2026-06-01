import { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef([]);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Measure pill position whenever activeIdx changes
  useEffect(() => {
    const el = linkRefs.current[activeIdx];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeIdx]);

  // Initial pill position after mount
  useEffect(() => {
    const el = linkRefs.current[0];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleNav = (href, idx) => {
    setActiveIdx(idx);
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      } px-6 md:px-10`}
    >
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex items-center justify-between
          bg-white dark:bg-slate-950
          border border-gray-200 dark:border-slate-700
          rounded-full px-6 py-4 shadow-md"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <h2 className="font-semibold text-base text-gray-900 dark:text-white  sm:block">
            Sony <span className="text-blue-600">Chaudhary</span>
          </h2>
        </div>

        {/* Desktop links with sliding pill */}
        <div className="hidden md:flex items-center relative">
          <motion.div
            className="absolute h-8 bg-blue-600 rounded-full z-0"
            animate={{ left: pillStyle.left, width: pillStyle.width }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
          {links.map((link, idx) => (
            <button
              key={link.name}
              ref={(el) => (linkRefs.current[idx] = el)}
              onClick={() => handleNav(link.href, idx)}
              className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeIdx === idx
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700
              bg-gray-50 dark:bg-slate-800
              flex items-center justify-center text-gray-500 dark:text-gray-400
              hover:scale-110 transition"
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <a href="/sonychaudharycv.pdf" target="_blank" rel="noopener noreferrer"
            download
            className="hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:opacity-90 transition shadow-sm"
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-gray-700 dark:bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-gray-700 dark:bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-gray-700 dark:bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — drops below the island */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2
              bg-white dark:bg-slate-900
              border border-gray-200 dark:border-slate-700
              rounded-2xl px-5 py-4 shadow-lg flex flex-col gap-2"
          >
            {links.map((link, idx) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href, idx)}
                className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition ${
                  activeIdx === idx
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-gray-100 dark:border-slate-700 pt-3 mt-1">
              <a
                href={resume}
                download
                className="block text-center px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
