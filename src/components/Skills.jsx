import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    level: 92,
    color: "text-cyan-500",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    level: 85,
    color: "text-blue-500",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: 95,
    color: "text-sky-500",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    level: 78,
    color: "text-black dark:text-white",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 90,
    color: "text-yellow-400",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: 85,
    color: "text-orange-500",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    level: 88,
    color: "text-gray-800 dark:text-white",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12 text-gray-900 dark:text-white">
          Technologies I Work With
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-900
                p-6
                shadow-md
                hover:shadow-xl
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-blue-500/5
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`text-4xl ${skill.color}`}
                  >
                    {skill.icon}
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {skill.level}%
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-orange-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}