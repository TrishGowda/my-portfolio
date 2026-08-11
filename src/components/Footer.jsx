import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Subtle orange accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white tracking-tight">
            &lt;TRISHA MS /&gt;
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            Full Stack Developer specializing in clean code, AI-driven
            automation, and premium user interfaces.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Navigation
          </h4>
          <ul className="space-y-4">
            {[
              "About",
              "Expertise",
              "Projects",
              "Experience",
              "Skills",
              "Education",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-zinc-400 hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">
            Get in Touch
          </h4>
          <p className="text-zinc-400 text-sm mb-6 flex items-center gap-2">
            <span className="text-orange-500">✉</span>{" "}
            trishatrisha4289@gmail.com
          </p>
          <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
            LET'S TALK
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-xs">
          © 2026 TRISHA MS. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-zinc-500 text-xs hover:text-white transition-colors flex items-center gap-1"
        >
          Back to Top <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
