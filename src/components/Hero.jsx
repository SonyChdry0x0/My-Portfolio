import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/self2.png";
import resume from "../assets/sonychaudharycv.pdf";

export default function Hero() {
  const words = ["Frontend Developer", "React Developer", "Freelancer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = ["React", "JavaScript", "Tailwind", "Git"];

  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "Student", label: "Actively Learning" },
    { value: "100%", label: "Responsive Design" },
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white dark:bg-gray-950"
    >
      {/* LEFT SIDE */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Availability */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Available for Internship Opportunities
          </span>
        </div>

        {/* Typewriter */}
        <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-lg mb-4">
          <span className="w-8 h-[2px] bg-orange-600"></span>
          {text}
          <span className="animate-pulse">|</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
          Turning Ideas Into
          <br />
          <span className="text-orange-600">Modern Web Apps</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg leading-7">
          I build fast, responsive, and scalable web applications using React,
          JavaScript, and Tailwind CSS with a focus on clean UI and great UX.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-gray-400 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/SonyChdry0x0"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white transition hover:-translate-y-1"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white transition hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>

          <a
            href={resume}
            download
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white transition hover:-translate-y-1"
          >
            <FaDownload />
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-12">
          {stats.map((item) => (
            <div
              key={item.label}
              className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold text-orange-500">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full animate-spin-slow border-[5px] border-orange-500 border-t-transparent"></div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-500 blur-3xl opacity-20"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-orange-500 shadow-2xl"
          />

          {/* Floating Skills */}
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="absolute bg-white dark:bg-gray-900 shadow-md rounded-full px-4 py-2 text-sm font-medium hover:scale-110 transition"
              style={{
                top: `${30 + index * 60}px`,
                right: index % 2 === 0 ? "-70px" : "-110px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}