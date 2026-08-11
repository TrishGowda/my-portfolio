import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const roles = [
    "I am a Full Stack Developer",
    "I am a Frontend Developer",
    "I am a Backend Developer",
    "I am a Web Developer",
    "I am a Problem Solver",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative w-full h-screen bg-black flex flex-col justify-between items-center overflow-hidden px-6 py-8">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 100 },
            color: { value: "#f97316" },
            links: {
              color: "#f97316",
              distance: 130,
              enable: true,
              opacity: 0.5,
              width: 1.2,
            },
            move: { enable: true, speed: 2 },
            size: { value: 3 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 1 } },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      {/* Top Navbar */}
      <div className="w-full max-w-7xl flex justify-between items-center z-10">
        <h1 className="text-white font-extrabold tracking-wider text-xl">
          TRISHA MS
        </h1>
        <div className="flex items-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="border border-orange-500/50 text-white px-5 py-2 rounded-full text-sm tracking-widest hover:bg-orange-500 hover:text-black transition-all duration-300"
          >
            CONTACT
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-orange-400 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
          >
            RESUME
          </a>
        </div>
      </div>

      {/* Center Grand Content */}
      <div className="text-center z-10 flex flex-col items-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-6 py-2.5 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
          <span className="text-orange-400 text-sm md:text-base tracking-[0.1em] font-bold min-h-[24px]">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-500 uppercase mb-6 drop-shadow-[0_0_40px_rgba(249,115,22,0.4)]">
          TRISHA MS
        </h1>

        <p className="text-zinc-400 text-sm md:text-base tracking-wide max-w-xl mb-6">
          Building powerful end-to-end applications, real-time architectures,
          and exceptional digital user experiences with modern tech stacks.
        </p>

        <div className="flex items-center justify-center mb-6">
          <a
            href="mailto:your-email@example.com"
            className="bg-orange-500 text-black font-extrabold px-10 py-4 rounded-full text-sm tracking-wider hover:bg-orange-400 transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-105"
          >
            LET'S TALK 💬
          </a>
        </div>

        {/* Social Icons with Name Label on Hover / Below */}
        <div className="flex gap-8 justify-center items-center mt-2">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/thrisa-ms-351967399"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-md group-hover:scale-110">
              <FaLinkedin size={26} />
            </div>
            <span className="text-xs text-zinc-400 mt-1 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300 font-medium">
              LinkedIn
            </span>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/TrishGowda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-white group-hover:border-white transition-all duration-300 shadow-md group-hover:scale-110">
              <FaGithub size={26} />
            </div>
            <span className="text-xs text-zinc-400 mt-1 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 font-medium">
              GitHub
            </span>
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/u/trish_gowda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500 transition-all duration-300 shadow-md group-hover:scale-110">
              <SiLeetcode size={26} />
            </div>
            <span className="text-xs text-zinc-400 mt-1 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all duration-300 font-medium">
              LeetCode
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] tracking-[0.2em] text-zinc-400">
          SCROLL
        </span>
        <span className="text-orange-500 text-sm animate-bounce">↓</span>
      </div>
    </section>
  );
}
