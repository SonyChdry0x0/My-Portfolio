import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive portfolio built with React and Tailwind CSS featuring dark mode, animations, and smooth scrolling.",
    image: "src/assets/Portfolios.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "#",
    live: "#",
    tag: "Design",
    number: "01",
  },
  {
    title: "TrendMorph",
    description:
      "AI-powered content generation platform that analyzes real-time trends from YouTube, Reddit, Pinterest, and X to generate captions, hashtags, blogs, AI images, and voice-overs using SDXL, BLIP, T5, Whisper, and LangChain.",
    image: "src/assets/trend.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python"],
    github: "",
    live: "https://trendmorphai.rajeshpandey10.com.np",
    tag: "AI · Full Stack",
    number: "02",
  },
  {
    title: "Smart Face Attendance",
    description:
      "Deep learning system that automatically detects students and records attendance in real time via webcam-based face recognition — improving accuracy and eliminating manual overhead.",
    image: "src/assets/facerecognition.png",
    tech: ["HTML", "JavaScript", "CSS", "Python"],
    github: "https://github.com/SonyChdry0x0/Smart-face-attendance-system",
    live: "",
    tag: "ML · Computer Vision",
    number: "03",
  },
  {
    title: "Student Management System",
    description:
      "Streamlines student records, attendance tracking, and report generation with course-wise monitoring and exportable reports — reducing administrative workload significantly.",
    image: "src/assets/sms.png",
    tech: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    github: "https://github.com/SonyChdry0x0/student-management-system",
    live: "",
    tag: "Web App",
    number: "04",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-xs font-semibold">
          Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
          Featured work
        </h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-20 max-w-md">
          A selection of things I've built — spanning AI, full stack, and
          machine learning.
        </p>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-16`}
              >
                <div className="w-full md:w-1/2 group">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <span className="absolute top-4 left-4 z-10 text-xs font-bold tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {project.number}
                    </span>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-5">
                  {/* Tag */}
                  <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                    {project.tag}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-orange-400 rounded-full" />

                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                      >
                        <FaGithub size={16} />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
                      >
                        Live Demo
                        <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
