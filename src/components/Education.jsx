import React from "react";

export default function Education() {
  const educationData = [
    {
      institution: "KGISL INSTITUTE OF TECHNOLOGY",
      degree: "Computer Applications | CGPA: 8.0 / 10",
      duration: "2021 - 2024",
      status: "COMPLETED",
    },
    {
      institution: "National Matric Hr. Sec. School",
      degree: "HSC (12th Grade) | 85%",
      duration: "2020 - 2021",
      status: "COMPLETED",
    },
    {
      institution: "National Matric Hr. Sec. School",
      degree: "SSLC (10th Grade) | 70%",
      duration: "2018 - 2019",
      status: "COMPLETED",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden text-white">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
          EDUCATION
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-white mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-white/20 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-black border-2 border-orange-500 group-hover:bg-orange-500 transition-all duration-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>

            {/* Education Card */}
            <div className="bg-[#0a0a0a]/90 border border-white/15 p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:border-orange-500/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-semibold bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mt-3 group-hover:text-orange-300 transition-colors">
                    {edu.institution}
                  </h3>
                </div>

                <span className="text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-gray-300 group-hover:border-orange-500/30 group-hover:text-orange-200 transition-all">
                  {edu.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm md:text-base font-medium">
                {edu.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
