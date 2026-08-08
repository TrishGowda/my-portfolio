import React from "react";

export default function ContactForm() {
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
      link: "#",
    },
  ];

  return (
    <section
      id="projects-section"
      className="py-20 px-4 max-w-7xl mx-auto text-white scroll-mt-10"
    >
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          SELECTED PROJECTS
        </h2>
        <div className="w-20 h-1 bg-white mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0a0a0a]/80 border border-white/15 p-6 rounded-2xl backdrop-blur-xl flex flex-col justify-between hover:border-white/50 hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all shadow-md group"
                  title="View Live Project"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform">
                    🌐
                  </span>
                </a>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-md"
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
