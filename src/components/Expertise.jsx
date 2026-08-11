import React, { useState } from 'react';

const expertiseData = [
  {
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive and interactive web interfaces with modern frontend technologies, focusing on clean UI, reusable components, performance, and seamless user experiences.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Vercel"]
  },
  {
    title: "BACKEND DEVELOPMENT",
    description: "Developing scalable and reliable backend applications with server-side logic, RESTful APIs, database integration, authentication, and efficient application architecture.",
    tags: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Render"]
  },
  {
    title: "PROGRAMMING LANGUAGES",
    description: "Applying programming fundamentals, object-oriented programming, data structures, and problem-solving skills to build efficient and maintainable software solutions.",
    tags: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    title: "AI SOFTWARE DEVELOPMENT",
    description: "Building AI-powered applications by integrating modern AI models and developer tools to create intelligent features, automate tasks, and enhance software capabilities.",
    tags: ["ChatGPT", "Claude", "Gemini", "Cursor", "GitHub Copilot", "Perplexity", "OpenAI API", "Prompt Engineering", "LLM Integration", "RAG"]
  },
  {
    title: "UI/UX DESIGN",
    description: "Designing intuitive, responsive, and user-centered digital experiences with a focus on usability, visual hierarchy, consistency, and modern interface design.",
    tags: ["Figma", "Wireframing", "Prototyping", "User Flows", "Design Systems", "Responsive Design", "UI Design", "UX Design"]
  },
  {
    title: "TOOLS & TECHNOLOGIES",
    description: "Using modern development and deployment tools for version control, API testing, containerization, cloud services, and application deployment.",
    tags: ["Git", "GitHub", "Postman", "Visual Studio Code", "Docker", "AWS"]
  }
];

export default function Expertise() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? expertiseData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === expertiseData.length - 1 ? 0 : prev + 1));
  };

  const currentItem = expertiseData[currentIndex];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden text-center">
      {/* Section Heading */}
      <div className="mb-14 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white mb-3 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          MY EXPERTISE
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-white mx-auto rounded-full"></div>
      </div>

      {/* Expertise Card Container with Navigation Arrows */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* Left Arrow Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:-left-6 z-20 bg-black/80 border border-white/20 text-white p-3.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Previous Expertise"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Card Box matching screenshot */}
        <div className="w-full max-w-3xl bg-[#0a0a0a]/90 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.9)] mx-12 transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 mb-4 uppercase">
            {currentItem.title}
          </h3>
          
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-sans transition-opacity duration-300">
            {currentItem.description}
          </p>

          {/* Tags / Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {currentItem.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 text-sm font-semibold text-gray-200 bg-white/5 border border-white/15 rounded-full hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {expertiseData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 md:-right-6 z-20 bg-black/80 border border-white/20 text-white p-3.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Next Expertise"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </section>
  );
}