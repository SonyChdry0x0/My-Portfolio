import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

emailjs.send(
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
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "chaudharysony336@gmail.com",
      href: "mailto:chaudharysony336@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sony-kumari-chaudhary-000b35314/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/SonyChdry0x0",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
          Let's Work Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-7 mb-10">
              I'm currently open to internships, freelance projects, and
              frontend development opportunities. Feel free to reach out if
              you'd like to collaborate or discuss a project.
            </p>

            <div className="space-y-5">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-900 hover:translate-x-2 transition-all duration-300"
                >
                  <div className="text-orange-500 text-xl">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Sony Chaudhary"
                  value={form.name}
                  onChange={update("name")}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@gmail.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={update("message")}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none resize-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}