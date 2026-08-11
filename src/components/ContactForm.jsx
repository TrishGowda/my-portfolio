import React from "react";

export default function Projects() {
  const projects = [
    {
      category: "FULL-STACK CHAT",
      title: "WhatsApp Clone",
      description:
        "A full-stack real-time messaging application inspired by WhatsApp, developed using the MERN Stack. The application includes user registration and login, user profiles, real-time chat functionality, online/offline status, and automated replies for predefined users.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "bcrypt",
      ],
      link: "https://nex-chat-a-modern-real-time-messagi.vercel.app/",
    },
    {
      category: "E-COMMERCE",
      title: "E-Commerce Website",
      description:
        "A modern and responsive e-commerce web application designed to provide a smooth online shopping experience. Includes product browsing, cart, wishlist, and responsive navigation across all devices.",
      tags: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "Vercel",
      ],
      link: "https://responsive-ecommerce-pearl.vercel.app/",
    },
    {
      category: "BOOKING PLATFORM",
      title: "Hotel Booking Platform",
      description:
        "A modern and responsive hotel booking web application designed with a clean and intuitive user interface to explore hotels, view room details, and provide a seamless booking experience.",
      tags: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "Vercel"],
      link: "https://v0-hotel-web-bn1pu5l5d-trishas-projects-389e1730.vercel.app/",
    },
    {
      category: "LIBRARY MANAGEMENT",
      title: "Library Management System",
      description:
        "A full-stack library management application developed using the MERN Stack to manage library operations efficiently, including user authentication, book management, issue/return tracking, and dashboards.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      link: "https://library-management-system-ruddy-five.vercel.app/",
    },
  ];

  return (
    <section
      id="projects-section"
      className="py-24 px-6 max-w-7xl mx-auto text-white scroll-mt-10"
    >
      {/* Section Header */}
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
          SELECTED PROJECTS
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-white mt-3 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#0a0a0a]/90 border border-white/15 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Background subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div>
              {/* Category & Live Link */}
              <div className="flex justify-between items-center mb-5 relative z-10">
                <span className="text-[11px] uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full font-semibold">
                  {project.category}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-gray-300 hover:text-black hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 shadow-md"
                  title="View Live Project"
                >
                  <span className="text-base group-hover:scale-110 transition-transform">
                    🌐
                  </span>
                </a>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 tracking-wide text-white group-hover:text-orange-300 transition-colors relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed relative z-10">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 relative z-10">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs font-medium bg-white/5 text-gray-300 border border-white/10 px-3.5 py-1.5 rounded-lg group-hover:border-orange-500/30 group-hover:text-orange-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
