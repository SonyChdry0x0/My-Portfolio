import { FaReact, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    tag: "UI framework",
    level: 92,
    color: "#22D3EE",
    accent: "#06B6D4",
    badge: "expert",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    tag: "Type safety",
    level: 85,
    color: "#3B82F6",
    accent: "#2563EB",
    badge: "advanced",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    tag: "Utility-first CSS",
    level: 95,
    color: "#38BDF8",
    accent: "#0EA5E9",
    badge: "expert",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    tag: "React framework",
    level: 78,
    color: "#8B5CF6",
    accent: "#7C3AED",
    badge: "proficient",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    tag: "Core language",
    level: 90,
    color: "#FBBF24",
    accent: "#F59E0B",
    badge: "expert",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    tag: "Version control",
    level: 85,
    color: "#F97316",
    accent: "#EA580C",
    badge: "advanced",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    tag: "Collaboration",
    level: 88,
    color: "#A78BFA",
    accent: "#8B5CF6",
    badge: "advanced",
  },
];

const badgeConfig = {
  expert: {
    label: "Expert",
    className:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  advanced: {
    label: "Advanced",
    className:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  },
  proficient: {
    label: "Proficient",
    className:
      "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  },
};

const avgProficiency = Math.round(
  skills.reduce((sum, s) => sum + s.level, 0) / skills.length,
);
const expertCount = skills.filter((s) => s.badge === "expert").length;

const summaryStats = [
  { num: `${avgProficiency}%`, label: "Avg. proficiency" },
  { num: skills.length.toString(), label: "Technologies" },
  { num: expertCount.toString(), label: "Expert level" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const summaryVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-xl font-semibold">
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-gray-900 dark:text-white">
          Technologies I work with
        </h2>

        <motion.div
          variants={summaryVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex flex-wrap items-center gap-6
            bg-gray-50 dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-2xl
            px-6 py-5
            mb-8
          "
        >
          {summaryStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              {i !== 0 && (
                <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700" />
              )}
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900 dark:text-white leading-none">
                  {stat.num}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900
                p-5
              "
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: skill.accent }}
              />

              <div className="flex items-center gap-3 mt-2 mb-4">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    bg-gray-100 dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    flex items-center justify-center
                    text-xl flex-shrink-0
                  "
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white leading-tight">
                    {skill.name}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {skill.tag}
                  </p>
                </div>
              </div>

              <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: skill.accent }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white leading-none">
                  {skill.level}
                  <span className="text-xs font-normal text-gray-400 ml-0.5">
                    %
                  </span>
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                    badgeConfig[skill.badge].className
                  }`}
                >
                  {badgeConfig[skill.badge].label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
