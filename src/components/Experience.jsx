import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Development Intern",
      company: "Zarima Development Private Limited",
      location: "Bangalore",
      status: "COMPLETED",
      duration: "Internship Program",
      projects: [
        {
          name: "01. Real-Time WhatsApp Clone",
          description:
            "Engineered a full-scale real-time messaging web application mirroring WhatsApp, delivering a seamless, responsive, and highly interactive user communication flow.",
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
          name: "02. Library Management System",
          description:
            "Architected and developed a full-stack library management application designed to completely digitalize and streamline core administrative operations efficiently.",
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
    <section className="relative py-24 px-6 max-w-5xl mx-auto text-white bg-black overflow-hidden">
      {/* Background ambient orange glow for modern touch */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-orange-400 text-xs tracking-widest font-bold uppercase">
            Professional Journey
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-500">
          EXPERIENCE
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-orange-500 to-transparent mt-4 rounded-full"></div>
      </div>

      {/* Experience Timeline Container */}
      <div className="space-y-8 relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center">
            {/* Floating Briefcase Icon Box */}
            <div className="hidden md:flex absolute -left-16 w-14 h-14 rounded-2xl bg-zinc-900 border border-orange-500/30 items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-xl z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
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

            {/* Main Experience Card */}
            <div className="w-full bg-zinc-950/80 border border-white/10 p-6 md:p-10 rounded-3xl backdrop-blur-xl relative hover:border-orange-500/40 transition-all duration-500 shadow-2xl ml-0 md:ml-6 group/card">
              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover/card:text-orange-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-orange-400/90 text-lg font-semibold mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-zinc-400 text-sm bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    📍 {exp.location}
                  </span>
                  <span className="text-xs bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full font-bold tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.15)]">
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Projects Breakdown */}
              <div className="space-y-6">
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-zinc-900 hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] group/project"
                  >
                    <h4 className="text-xl font-bold text-white mb-2 group-hover/project:text-orange-300 transition-colors flex items-center gap-2">
                      {project.name}
                    </h4>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <ul className="space-y-2 text-zinc-300 text-sm mb-6 bg-black/30 p-4 rounded-xl border border-white/5">
                      {project.keyPoints.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">▸</span>
                          <span>
                            <strong className="text-white font-semibold">
                              {point.split(":")[0]}:
                            </strong>
                            {point.split(":")[1]}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs bg-orange-500/10 border border-orange-500/20 text-orange-300 px-3.5 py-1 rounded-md font-medium group-hover/project:bg-orange-500/20 transition-colors"
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
