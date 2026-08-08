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
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mb-3 uppercase">
          MY EXPERTISE
        </h2>
        <div className="w-16 h-1 bg-white mx-auto"></div>
      </div>

      {/* Expertise Card Container with Navigation Arrows */}
      <div className="relative z-10 flex items-center justify-center">
        
        {/* Left Arrow Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:-left-6 z-20 bg-black/60 border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          aria-label="Previous Expertise"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Card Box matching screenshot */}
        <div className="w-full max-w-3xl bg-[#0a0a0a]/80 border border-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl mx-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-4 uppercase">
            {currentItem.title}
          </h3>
          
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            {currentItem.description}
          </p>

          {/* Tags / Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {currentItem.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 md:-right-6 z-20 bg-black/60 border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
          aria-label="Next Expertise"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </section>
  );
}