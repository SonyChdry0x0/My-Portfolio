import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">
              Sony <span className="text-orange-500">Chaudhary</span>
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Frontend Developer • React Enthusiast
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/SonyChdry0x0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:chaudharysony336@gmail.com"
              className="hover:text-orange-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
            Built with React & Tailwind CSS
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Sony Kumari Chaudhary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}