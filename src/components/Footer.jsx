import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";

export default function Footer({ setCurrentView }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    "About",
    "Expertise",
    "Projects",
    "Experience",
    "Skills",
    "Education",
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-16 pb-8 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Column 1: Brand Info & Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4 tracking-wider">
            &lt;TRISHA MS /&gt;
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
            Full Stack Developer specializing in clean code, AI-driven
            automation, and premium user interfaces.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/TrishGowda"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-gray-800 hover:text-purple-400 transition-all duration-300 border border-white/10 text-gray-300 shadow-md hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/thrisa-ms-351967399/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-950 hover:text-blue-400 transition-all duration-300 border border-white/10 text-gray-300 shadow-md hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="md:ml-auto">
          <h4 className="text-sm font-bold tracking-[0.15em] mb-6">
            NAVIGATION
          </h4>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <span className="text-gray-400 text-sm hover:text-white transition cursor-pointer">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="md:ml-auto">
          <h4 className="text-sm font-bold tracking-[0.15em] mb-6">
            GET IN TOUCH
          </h4>
          <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
            <FaEnvelope size={16} />
            <span>trishatrisha4289@gmail.com</span>
          </div>
          <button
            onClick={() => {
              if (setCurrentView) {
                setCurrentView("new-contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-6 py-2.5 rounded-full border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wider cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} TRISHA MS. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition cursor-pointer"
        >
          <FaChevronUp size={10} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
