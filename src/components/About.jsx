import React from 'react';


export default function About() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Centered Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white mb-3 uppercase">
          About Me
        </h2>
        <div className="w-16 h-1 bg-white mx-auto"></div>
      </div>

      {/* Main Content Layout - items-stretch aligns image top & bottom directly with text box */}
      <div className="flex flex-col md:flex-row items-stretch gap-8 relative z-10 about-content">
        
        {/* Profile Image - Exactly matches text box height from start to finish */}
        <div className="w-full md:w-1/3 flex">
          <div className="p-2 rounded-2xl shadow-2xl bg-black/50 border border-white/10 backdrop-blur-md w-full flex overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Jaswanth MG"
              className="rounded-xl w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* Text Content Area */}
        <div className="w-full md:w-2/3 flex flex-col justify-between relative pl-4 md:pl-6 border-l-2 border-black bg-gradient-to-r from-black/80 via-black/30 to-transparent p-5 md:p-6 rounded-r-2xl">
          
          {/* First Paragraph */}
          <p>
            I'm a web developer who enjoys building fast, scalable, and user-friendly applications using modern technologies and AI-assisted tools. I've worked on real-world projects, including a consulting platform for Zaalima Development pvt.ltd, where I focused on creating clean interfaces and implementing features that make the product more intuitive and efficient.
          </p>
          
          {/* Second Paragraph */}
          <p className="mb-0">
            I care about writing clean, maintainable code and paying attention to the details that improve performance and user experience. I approach problems with a practical mindset and enjoy turning ideas into reliable, well-crafted products. I'm always learning and exploring new tools and frameworks to keep improving and building better solutions, with a strong passion for leveraging AI, modern development practices, and creative problem-solving to deliver real value.
          </p>
        </div>

      </div>
    </section>
  );
}