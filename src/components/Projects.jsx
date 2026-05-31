import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive portfolio built with React and Tailwind CSS featuring dark mode, animations, and smooth scrolling.",
    image: "src/assets/Portfolios.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "TrendMorph",
    description:
      "Developed an AI-powered content generation platform that analyzes real-time trends from YouTube, Reddit, Pinterest, and X (Twitter), leveraging SDXL, BLIP, T5, Whisper, and LangChain to automatically generate captions, hashtags, blogs, AI images, voice-overs, and trend-driven content recommendations.",
    image: "src/assets/trend.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python"],
    github: "",
    live: "https://trendmorphai.rajeshpandey10.com.np",
  },
  {
    title: "Smart Face Attendance System",
    description:
      "Developed a smart attendance management system using OpenCV and facial recognition technology to automatically identify and record student attendance in real time through webcam-based face detection. The system improves accuracy, reduces manual effort, and provides an efficient solution for attendance tracking and management.",
    image: "src/assets/facerecognition.png",
    tech: ["HTML", "JavaScript", "CSS", "Python"],
    github: "https://github.com/SonyChdry0x0/Smart-face-attendance-system",
    live: "",
  },
  {
    title: "Student Management System",
    description:
      "Developed a student management system that streamlines student record administration, attendance tracking, and report generation. The application enables efficient data management, course-wise attendance monitoring, and exportable reports, improving accuracy and reducing administrative workload.",
    image: "src/assets/sms.png",
    tech: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
    github: "https://github.com/SonyChdry0x0/student-management-system",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Projects
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-16">
          Featured Work
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-lg hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-orange-500 transition"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-orange-500 transition"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}