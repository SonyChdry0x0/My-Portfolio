import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import profile from "../assets/self2.png";


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
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) setTimeout(() => setIsDeleting(true), 1000);
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white dark:bg-slate-950 gap-8 overflow-hidden"
      id="hero"
>
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* LEFT SIDE */}
      <motion.div
        className="flex-1 flex flex-col relative z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* STATUS */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 ">
          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[15px] text-emerald-500 dark:text-emerald-400">
            Available for opportunities
          </span>
        </div>

        {/* TYPING TEXT */}
        <div className="text-blue-600 text-xl font-semibold mb-3 tracking-widest">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
          Turning ideas into <span className="text-blue-600">modern</span>
          <br />
          web experiences
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
          I build fast, responsive, and scalable web apps using React,
          JavaScript, and Tailwind CSS with strong focus on UI/UX.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-8">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20"
          >
            View Projects <FaArrowRight size={12} />
          </motion.button>
<a
          href="/sonychaudharycv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-400"
>
  <FaDownload size={12} />
  Download CV
</a>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-3 mb-10">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/SonyChdry0x0",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/",
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center border rounded-xl hover:text-blue-500 hover:border-blue-400 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-2xl font-bold text-blue-500">
                {s.value}
              </div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="flex-1 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 group">

          {/* GLOW */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
            }}
          />

          {/* IMAGE */}
          <img
            src={profile}
            alt="profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl ring-2 ring-blue-500/40 transition duration-500 group-hover:scale-105"
          />

          {/* FLOATING SKILLS */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="hidden md:flex absolute bg-white dark:bg-gray-900 border px-3 py-1 rounded-full text-xs"
              style={floatPositions[i]}
              animate={{
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1" />
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}