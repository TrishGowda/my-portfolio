import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* =========================================================
   PARTICLE BACKGROUND
   ========================================================= */
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    /* Resize */
    const handleResize = () => {
      if (!canvas.parentElement) return;

      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    /* More dots */
    const particleCount = window.innerWidth < 768 ? 80 : 160;

    const particles = [];

    let clickMultiplier = 1;

    /* =====================================================
       PARTICLE
       ===================================================== */
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;

        this.radius = Math.random() * 1.8 + 0.7;
      }

      update() {
        this.x += this.vx * clickMultiplier;
        this.y += this.vy * clickMultiplier;

        /* Left / Right */
        if (this.x < 0) {
          this.x = width;
        }

        if (this.x > width) {
          this.x = 0;
        }

        /* Top / Bottom */
        if (this.y < 0) {
          this.y = height;
        }

        if (this.y > height) {
          this.y = 0;
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = "#d97706";

        ctx.fill();
      }
    }

    /* Create particles */
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    /* =====================================================
       CLICK EFFECT
       ===================================================== */
    const handleClick = () => {
      clickMultiplier = 0.15;

      setTimeout(() => {
        clickMultiplier = 2.5;

        setTimeout(() => {
          clickMultiplier = 1;
        }, 500);
      }, 300);
    };

    canvas.addEventListener("click", handleClick);

    /* =====================================================
       ANIMATION
       ===================================================== */
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        /* Connect nearby dots */
        for (let j = index + 1; j < particles.length; j++) {
          const particle2 = particles[j];

          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();

            ctx.moveTo(particle.x, particle.y);

            ctx.lineTo(particle2.x, particle2.y);

            ctx.strokeStyle = `rgba(217, 119, 6, ${1 - distance / 120})`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    /* Cleanup */
    return () => {
      window.removeEventListener("resize", handleResize);

      canvas.removeEventListener("click", handleClick);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 0,
      }}
    />
  );
};

/* =========================================================
   HERO
   ========================================================= */
export default function Hero({ onContactClick }) {
  /* Roles */
  const roles = [
    "I AM A FULL STACK DEVELOPER",
    "I AM A WEB DEVELOPER",
    "I AM A FRONTEND DEVELOPER",
    "I AM A BACKEND DEVELOPER",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  /* Change role every 2.8 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(
        (previousIndex) => (previousIndex + 1) % roles.length,
      );
    }, 2800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-between px-6 py-6"
    >
      {/* =================================================
          PARTICLE BACKGROUND
          ================================================= */}
      <ParticleBackground />

      {/* =================================================
          TOP RIGHT BUTTONS
          ================================================= */}
      <div className="relative z-10 w-full max-w-7xl flex justify-end items-center">
        <div className="flex gap-4">
          {/* CONTACT */}
          <button
            onClick={onContactClick}
            className="px-6 py-2 rounded-full border border-white/20 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wider text-white cursor-pointer"
          >
            CONTACT
          </button>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm font-medium tracking-wider"
          >
            RESUME
          </a>
        </div>
      </div>

      {/* =================================================
          CENTER CONTENT
          ================================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        {/* ROLE */}
        <div className="mb-5 h-8 flex items-center justify-center">
          <p className="text-gray-300 tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase font-semibold transition-all duration-500">
            {roles[currentRoleIndex]}
          </p>
        </div>

        {/* =================================================
            ONLY ONE NAME
            ================================================= */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-widest mb-8 text-white">
          TRISHA MS
        </h1>

        {/* =================================================
            SOCIAL LINKS
            ================================================= */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/TrishGowda"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 glass-card hover:bg-gray-800 hover:text-purple-400 rounded-full transition-all duration-300 text-white flex items-center justify-center"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/thrisa-ms-351967399/"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 glass-card hover:bg-blue-900 hover:text-blue-400 rounded-full transition-all duration-300 text-white flex items-center justify-center"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/trish_gowda/"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 glass-card hover:bg-[#1a1a1a] hover:text-[#FFA116] rounded-full transition-all duration-300 text-white flex items-center justify-center"
            title="LeetCode"
          >
            <SiLeetcode size={18} />
          </a>
        </div>
      </div>

      {/* =================================================
          SCROLL
          ================================================= */}
      <div className="relative z-10 flex flex-col items-center pb-2 text-gray-400 text-xs tracking-[0.2em]">
        <span className="mb-1">SCROLL</span>

        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
}
