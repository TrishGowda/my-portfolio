import React from 'react';

export default function About() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white mb-3 uppercase">
          About Me
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-10 relative z-10">
        
        {/* Profile Image Column - With Zoom Effect */}
        <div className="w-full md:w-1/3 relative flex">
           {/* Added overflow-hidden to contain the zoom effect */}
           <div className="w-full relative rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)] group cursor-pointer">
            
            {/* Image with Zoom effect */}
            <img
              src="/profile.jpg"
              alt="Thrisa MS"
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            
            {/* Badges remain unaffected by image zoom */}
            <div className="absolute top-4 left-4 bg-yellow-500/90 backdrop-blur-md px-4 py-1.5 rounded-lg text-xs font-bold text-black flex items-center gap-2">
               <span>⚡</span> Problem Solver
            </div>

            <div className="absolute bottom-16 left-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-lg border border-yellow-500/50 text-xs font-medium text-white flex items-center gap-2">
               <span>💡</span> Fast Learner
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-black px-4 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 animate-pulse">
               <div className="w-2 h-2 rounded-full bg-black"></div> Available for work
            </div>
           </div>
        </div>

        {/* Text Content Area */}
        <div className="w-full md:w-2/3 flex flex-col justify-center pl-0 md:pl-8">
          <p className="text-lg leading-relaxed text-gray-300 mb-6 border-l-4 border-yellow-500 pl-6">
            I am a results-driven <strong>Full Stack Developer</strong> with hands-on real-time industry experience in building robust, scalable, and high-performance web applications. During my tenure at <strong>Zaalima Development Pvt. Ltd.</strong>, I played a key role in developing enterprise-grade solutions, including scalable real-time chat applications and comprehensive Library Management Systems.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-300 border-l-4 border-yellow-500/30 pl-6">
            I care about writing clean, maintainable code and transforming complex business requirements into seamless, user-centric digital products. Whether it's optimizing database queries, building responsive front-end interfaces, or integrating secure back-end APIs, I approach every challenge with a problem-solving mindset and a passion for modern engineering standards.
          </p>
        </div>

      </div>
    </section>
  );
}