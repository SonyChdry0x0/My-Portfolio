import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/sonychaudharycv.pdf";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300
      ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              S
            </div>

            <h2 className="font-bold text-xl text-gray-900 dark:text-white">
              Sony <span className="text-orange-500">Chaudhary</span>
            </h2>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-orange-500 transition hover:-translate-y-0.5"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* RESUME */}
            <a
              href={resume}
              download
              className="hidden md:block px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:scale-105 transition shadow-md"
            >
              Resume
            </a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU (ANIMATED) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pb-4"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNav(link.href)}
                    className="text-left text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    {link.name}
                  </button>
                ))}

                <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:scale-105 transition shadow-md"
>
  Resume
</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}