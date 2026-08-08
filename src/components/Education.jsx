import React, { useState, useEffect } from "react";

export default function Education() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const educationList = [
    {
      institution: "KGiSL Institute of Technology",
      degree: "Computer Applications | CGPA: 8.0 / 10",
      duration: "2021 - 2024",
      status: "COMPLETED",
    },
    {
      institution: "National Matric Hr. Sec. School",
      degree: "HSC (12th Grade) | 85%",
      duration: "2020 - 2021",
      status: null,
    },
    {
      institution: "National Matric Hr. Sec. School",
      degree: "SSLC (10th Grade) | 70%",
      duration: "2018 - 2019",
      status: null,
    },
  ];

  // Click outside to zoom out / reset
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".edu-card")) {
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
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          EDUCATION
        </h2>
        <div className="w-20 h-1 bg-gray-500 mt-3"></div>
      </div>

      <div className="relative border-l border-gray-700 ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
        {educationList.map((edu, index) => {
          const isZoomed = zoomedIndex === index;
          return (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[35px] md:-left-[41px] top-6 w-3.5 h-3.5 rounded-full bg-[#121212] border-2 transition-colors ${isZoomed ? "border-gray-400 bg-gray-400" : "border-gray-600 group-hover:border-gray-400 group-hover:bg-gray-400"}`}
              ></div>

              {/* Education Box with Gray Theme and Zoom In/Out */}
              <div
                onClick={(e) => handleCardClick(index, e)}
                className={`edu-card bg-[#121212] border p-6 rounded-2xl backdrop-blur-xl relative cursor-pointer transition-all duration-500 ease-in-out ${
                  isZoomed
                    ? "scale-105 md:scale-110 border-gray-400 shadow-[0_0_30px_rgba(156,163,175,0.2)] z-20"
                    : "border-gray-800 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(156,163,175,0.1)]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3
                    className={`text-xl font-bold transition-colors ${isZoomed ? "text-gray-200" : "text-gray-100 group-hover:text-gray-300"}`}
                  >
                    {edu.institution}
                  </h3>
                  <span className="text-gray-400 text-sm font-medium">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                  <p className="text-gray-300 text-sm md:text-base font-medium">
                    {edu.degree}
                  </p>
                  {edu.status && (
                    <span className="text-xs bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full font-medium">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
