import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/self2.png";
import resume from "../assets/sonychaudharycv.pdf";

const words = ["Frontend Developer", "Freelancer"];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "Student", label: "Actively Learning" },
  { value: "100%", label: "Responsive Design" },
];

const skills = ["React", "JavaScript", "Tailwind", "Next.js", "Git", "GitHub"];

const floatPositions = [
  { top: "4%", left: "-18%" },
  { top: "22%", left: "-22%" },
  { top: "42%", left: "-18%" },
  { top: "60%", left: "-22%" },
  { top: "78%", left: "-16%" },
  { top: "92%", left: "-20%" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) setTimeout(() => setIsDeleting(true), 1200);
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white dark:bg-gray-950 gap-12"
    >
      <motion.div
        className="flex-1 flex flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 self-start mb-6 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
            Available for new opportunities
          </span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-orange-500" />
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            {text}
            <span className="animate-pulse ml-0.5">|</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-5">
          Turning ideas into{" "}
          <span className="relative inline-block">
            <span className="text-orange-500">modern</span>
          </span>
          <br />
          web experiences
        </h1>

        <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed text-sm md:text-base mb-8">
          I build fast, responsive, and scalable web apps using React,
          JavaScript, and Tailwind CSS — with a sharp eye for clean UI and great
          UX.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            View Projects
            <FaArrowRight size={12} />
          </button>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-300 hover:text-orange-500 dark:hover:border-orange-500/40 dark:hover:text-orange-400 text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <FaDownload size={12} />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-3 mb-12">
          {[
            {
              icon: <FaGithub size={16} />,
              href: "https://github.com/SonyChdry0x0",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin size={16} />,
              href: "https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/",
              label: "LinkedIn",
            },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:border-orange-300 dark:hover:text-orange-400 dark:hover:border-orange-500/40 transition-colors duration-200"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="flex flex-col px-5 py-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
            >
              <span className="text-2xl font-bold text-orange-500 leading-none">
                {item.value}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-orange-300 dark:border-orange-800 animate-spin-slow" />

          <div className="absolute inset-4 rounded-full bg-orange-400/10 blur-2xl" />

          <img
            src={profile}
            alt="Sony Chaudhary"
            className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl ring-2 ring-orange-400/40 cursor-pointer transition-transform duration-300 ease-out active:scale-110 hover:scale-110"
          />

          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="hidden md:flex absolute items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
              style={floatPositions[i]}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              {skill}
            </motion.div>
          ))}

          <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 w-72">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
