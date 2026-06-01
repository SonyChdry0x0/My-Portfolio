import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: <FaEnvelope size={16} />,
    label: "chaudharysony336@gmail.com",
    sublabel: "Email me directly",
    href: "mailto:chaudharysony336@gmail.com",
  },
  {
    icon: <FaLinkedin size={16} />,
    label: "LinkedIn",
    sublabel: "Let's connect professionally",
    href: "https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/",
  },
  {
    icon: <FaGithub size={16} />,
    label: "GitHub",
    sublabel: "Check out my code",
    href: "https://github.com/SonyChdry0x0",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <span className="text-orange-500 uppercase tracking-widest text-xs font-semibold">
          Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
          Let's work together
        </h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm mb-14 max-w-md">
          Open to internships, freelance projects, and frontend opportunities.
          Drop a message and I'll get back to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

         
          <div className="flex flex-col gap-6">

            
            <div className="flex flex-col gap-3">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex items-center gap-4 p-4
                    rounded-xl
                    border border-gray-100 dark:border-gray-800
                    bg-gray-50 dark:bg-gray-900
                    hover:border-orange-200 dark:hover:border-orange-500/30
                    hover:bg-orange-50/50 dark:hover:bg-orange-500/5
                    transition-colors duration-200
                    group
                  "
                >
                  <div className="
                    w-10 h-10 rounded-xl flex-shrink-0
                    flex items-center justify-center
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    text-gray-500 dark:text-gray-400
                    group-hover:text-orange-500 group-hover:border-orange-200
                    dark:group-hover:text-orange-400 dark:group-hover:border-orange-500/40
                    transition-colors duration-200
                  ">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      {item.sublabel}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            
            <div className="flex items-center gap-2.5 mt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Available for new opportunities
              </span>
            </div>
          </div>

         
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="
              bg-gray-50 dark:bg-gray-900
              border border-gray-100 dark:border-gray-800
              rounded-2xl p-8
            "
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sony Chaudhary"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className="
                      px-4 py-2.5 rounded-xl text-sm
                      border border-gray-200 dark:border-gray-700
                      bg-white dark:bg-gray-800
                      text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-600
                      outline-none
                      focus:ring-2 focus:ring-orange-400 focus:border-transparent
                      transition duration-200
                    "
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className="
                      px-4 py-2.5 rounded-xl text-sm
                      border border-gray-200 dark:border-gray-700
                      bg-white dark:bg-gray-800
                      text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-600
                      outline-none
                      focus:ring-2 focus:ring-orange-400 focus:border-transparent
                      transition duration-200
                    "
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={update("message")}
                  required
                  className="
                    px-4 py-2.5 rounded-xl text-sm
                    border border-gray-200 dark:border-gray-700
                    bg-white dark:bg-gray-800
                    text-gray-900 dark:text-white
                    placeholder-gray-400 dark:placeholder-gray-600
                    outline-none resize-none
                    focus:ring-2 focus:ring-orange-400 focus:border-transparent
                    transition duration-200
                  "
                />
              </div>

             
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className={`
                  w-full py-3 rounded-xl text-sm font-semibold
                  transition-colors duration-200
                  ${
                    status === "success"
                      ? "bg-emerald-500 text-white"
                      : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-orange-500 hover:bg-orange-600 text-white"
                  }
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "✓ Message sent!"
                  : status === "error"
                  ? "Failed — try again"
                  : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
