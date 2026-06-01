import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/SonyChdry0x0",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope size={18} />,
    href: "mailto:chaudharysony336@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-12 border-b border-gray-100 dark:border-gray-800">

         
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold mb-3">
              Available for work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Sony{" "}
              <span className="text-blue-500">Chaudhary</span>
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              Frontend Developer 
            </p>
          </div>

          
          <motion.a
            href="mailto:chaudharysony336@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-2
              bg-blue-500 hover:bg-blue-600
              text-white text-sm font-semibold
              px-6 py-3 rounded-xl
              transition-colors duration-200
              shrink-0
            "
          >
            <FaEnvelope size={14} />
            Let's work together
          </motion.a>
        </div>

      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 py-10 border-b border-gray-100 dark:border-gray-800">

        
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

         
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="
                  w-10 h-10 rounded-xl
                  flex items-center justify-center
                  border border-gray-200 dark:border-gray-700
                  text-gray-500 dark:text-gray-400
                  hover:text-blue-500 hover:border-blue-300
                  dark:hover:text-blue-400 dark:hover:border-blue-500/40
                  transition-colors duration-200
                "
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

      
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-xs text-gray-400 dark:text-gray-600">
          <span>
            © {new Date().getFullYear()} Sony Kumari Chaudhary. All rights reserved.
          </span>
          <span>Built with React &amp; Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
