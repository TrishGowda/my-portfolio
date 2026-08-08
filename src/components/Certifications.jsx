import React, { useState, useEffect } from "react";

export default function Certifications() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const certList = [
    {
      title: "Full Stack Development",
      issuer: "Zaliama Development Pvt Ltd",
      date: "2026",
      status: "COMPLETED",
      badgeColor:
        "bg-emerald-950/80 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Certified Java Developer",
      issuer: "Professional Certification | 2025",
      date: "License: JDAC@230045CKD007921DC.kzP5531",
      status: "LIFETIME VALIDITY",
      badgeColor:
        "bg-blue-950/80 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    },
    {
      title: "Prompt Engineering",
      issuer: "AI & Development Course",
      date: "2025 - 2026",
      status: "VALUE ADDED",
      badgeColor:
        "bg-purple-950/80 border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    },
    {
      title: "Certified SQL",
      issuer: "Database Management",
      date: "2026",
      status: "COMPLETED",
      badgeColor:
        "bg-amber-950/80 border-amber-500/50 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    },
    {
      title: "Trained AWS",
      issuer: "Amazon Web Services",
      date: "2026",
      status: "TRAINED",
      badgeColor:
        "bg-orange-950/80 border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]",
    },
    {
      title: "GitHub Certification",
      issuer: "Version Control & Collaboration",
      date: "2026",
      status: "VERIFIED CERTIFIED",
      badgeColor:
        "bg-cyan-950/80 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]",
    },
  ];

  // Click outside to zoom out / reset
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".cert-card")) {
        setZoomedIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCardClick = (index, e) => {
    e.stopPropagation();
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          CERTIFICATIONS
        </h2>
        <div className="w-20 h-1 bg-gray-500 mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certList.map((cert, index) => {
          const isZoomed = zoomedIndex === index;
          return (
            <div
              key={index}
              onClick={(e) => handleCardClick(index, e)}
              className={`cert-card bg-[#121212] border p-6 rounded-2xl backdrop-blur-xl relative cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-between ${
                isZoomed
                  ? "scale-105 border-gray-400 shadow-[0_0_30px_rgba(156,163,175,0.2)] z-20"
                  : "border-gray-800 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(156,163,175,0.1)]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400 text-lg">✦</span>
                  <h3
                    className={`text-xl font-bold transition-colors ${isZoomed ? "text-gray-200" : "text-gray-100"}`}
                  >
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 font-mono mb-4 break-all">
                  {cert.date}
                </p>
              </div>

              <div>
                <span
                  className={`text-xs border px-3 py-1 rounded-full font-semibold inline-block ${cert.badgeColor}`}
                >
                  {cert.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
