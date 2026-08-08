import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Development Intern",
      company: "Zarima Development Private Limited",
      location: "Bangalore",
      status: "COMPLETED",
      projects: [
        {
          name: "1. Real-Time WhatsApp Clone",
          description:
            "Developed a full-real-time messaging web application inspired by WhatsApp. Built features from scratch to deliver an interactive and seamless chatting experience.",
          keyPoints: [
            "User Authentication & Profiles: Implemented secure user registration, login, and profile management using JWT and bcrypt.",
            "Real-Time Messaging: Enabled instant, bi-directional messaging using Socket.IO for real-time data flow without page refreshes.",
            "Online/Offline Status: Built live status tracking to show when users are active or offline.",
            "Automated Responses: Integrated automated reply mechanisms for predefined users to simulate active interactions.",
          ],
          tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.IO",
            "JWT",
            "bcrypt",
          ],
        },
        {
          name: "2. Library Management System",
          description:
            "Built a full-stack library management application designed to digitalize and streamline library operations efficiently.",
          keyPoints: [
            "User Authentication: Secure login systems categorized for administrators and members.",
            "Book Management: Complete CRUD operations to add, update, view, and delete books from the library database.",
            "Issue & Return Tracking: Managed book borrowing, return cycles, and availability status tracking.",
            "Admin Dashboards: Provided a structured dashboard interface to monitor overall library statistics and activities smoothly.",
          ],
          tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-20 h-1 bg-white mt-3"></div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center">
            {/* Left Side Floating Briefcase Icon Box matching screenshot */}
            <div className="hidden md:flex absolute -left-16 w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/20 items-center justify-center text-white shadow-xl backdrop-blur-xl z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.878 1.98-1.975 1.98H5.725c-1.097 0-1.975-.886-1.975-1.98v-4.25m16.5 0v-4.25c0-1.094-.878-1.98-1.975-1.98H5.725c-1.097 0-1.975.886-1.975 1.98v4.25m16.5 0H3.75m16.5 0V9.5A2.25 2.25 0 0 0 18 7.25h-3.375a2.25 2.25 0 0 1-2.25-2.25v-.75a2.25 2.25 0 0 0-2.25-2.25H9A2.25 2.25 0 0 0 6.75 4.25v.75a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 0 1.5 9.5v4.65m18.75 0h-18.75"
                />
              </svg>
            </div>

            {/* Main Experience Box */}
            <div className="w-full bg-[#0a0a0a]/80 border border-white/15 p-6 md:p-8 rounded-2xl backdrop-blur-xl relative hover:border-white/40 transition-all shadow-xl ml-0 md:ml-6">
              {/* Company & Location Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                  <p className="text-gray-300 text-base font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    📍 {exp.location}
                  </span>
                  <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full font-medium">
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Projects Breakdown */}
              <div className="space-y-8">
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-white/5 border border-white/15 p-5 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer group"
                  >
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mb-4">
                      {project.keyPoints.map((point, ptIndex) => (
                        <li key={ptIndex}>
                          <span className="text-gray-200">
                            {point.split(":")[0]}:
                          </span>{" "}
                          {point.split(":")[1]}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-md group-hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
