import React from "react";

export default function Certifications() {
  const certificationsData = [
    {
      title: "Full Stack Development",
      issuer: "Zallama Development Pvt Ltd",
      year: "2026",
      status: "COMPLETED",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Certified Java Developer",
      issuer: "Professional Certification | 2025",
      license: "License: JDAC@230045CKD007921DC.kzP5531",
      status: "LIFETIME VALIDITY",
      statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    },
    {
      title: "Prompt Engineering",
      issuer: "AI & Development Course",
      year: "2025 - 2026",
      status: "VALUE ADDED",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "Certified SQL",
      issuer: "Database Management",
      year: "2026",
      status: "COMPLETED",
      statusColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    },
    {
      title: "Trained AWS",
      issuer: "Amazon Web Services",
      year: "2026",
      status: "TRAINED",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "GitHub Certification",
      issuer: "Version Control & Collaboration",
      year: "2026",
      status: "VERIFIED CERTIFIED",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden text-white">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
          CERTIFICATIONS
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-white mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="group bg-[#0a0a0a]/90 border border-white/15 p-7 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-orange-500/60 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div>
              {/* Title with Star Icon */}
              <div className="flex items-start gap-2.5 mb-3">
                <span className="text-orange-400 text-sm mt-1">✦</span>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-orange-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer / Description */}
              <p className="text-gray-300 text-sm mb-2 font-medium">
                {cert.issuer}
              </p>

              {/* License if available */}
              {cert.license && (
                <p className="text-gray-500 text-[11px] mb-4 break-all font-mono">
                  {cert.license}
                </p>
              )}

              {/* Year if available */}
              {cert.year && !cert.license && (
                <p className="text-gray-400 text-xs mb-6">{cert.year}</p>
              )}
            </div>

            {/* Status Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
              <span
                className={`text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border ${cert.statusColor} shadow-sm`}
              >
                {cert.status}
              </span>
              {cert.year && cert.license && (
                <span className="text-xs text-gray-400 font-medium">2025</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
