import React from "react";

export default function Footer({ setCurrentView }) {
  return (
    <footer className="w-full bg-black text-gray-400 py-16 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left: Brand / Logo info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-wider">
            &lt;TRISHA MS /&gt;
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Full Stack Developer specializing in clean code, AI-driven
            automation, and premium user interfaces.
          </p>
          <div className="flex space-x-3 pt-2">
            <a
              href="https://github.com/TrishGowda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              💻
            </a>
            <a
              href="https://www.linkedin.com/in/thrisa-ms-351967399/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              💼
            </a>
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#expertise" className="hover:text-white transition">
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#projects-section"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-white transition">
                Education
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Get in Touch & LET'S TALK Button */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
            Get in Touch
          </h4>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <span>✉️</span> trishatrisha4289@gmail.com
          </p>

          {/* இங்கே தான் LET'S TALK பட்டன் கொடுக்கப்பட்டுள்ளது */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (setCurrentView) {
                  setCurrentView("new-contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 TRISHA MS. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-white transition mt-4 sm:mt-0 cursor-pointer"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
