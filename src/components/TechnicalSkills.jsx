import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function TechnicalSkills() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const skillCategories = [
    {
      category: "PROGRAMMING LANGUAGES",
      skills: [
        { name: "Java", desc: "OOP & Fundamentals", icon: "☕" },
        { name: "JavaScript", desc: "Logic & Scripting", icon: "⚡" },
        { name: "Python", desc: "Scripting & Backend", icon: "🐍" },
      ],
    },
    {
      category: "FRONT-END TECHNOLOGIES",
      skills: [
        { name: "HTML5", desc: "Structure & Semantics", icon: "🌐" },
        { name: "CSS3", desc: "Styling & Layouts", icon: "🎨" },
        { name: "React.js", desc: "Interactive UI & Components", icon: "⚛️" },
        { name: "Tailwind CSS", desc: "Modern Styling", icon: "💨" },
        { name: "TypeScript", desc: "Type-safe Frontend", icon: "📘" },
        { name: "Vercel", desc: "Frontend Deployment", icon: "▲" },
      ],
    },
    {
      category: "BACK-END TECHNOLOGIES",
      skills: [
        { name: "Node.js", desc: "Server-side Runtime", icon: "🟢" },
        { name: "Express.js", desc: "Backend Framework", icon: "🚀" },
        { name: "REST APIs", desc: "API Architecture", icon: "🔄" },
        { name: "MongoDB", desc: "NoSQL Database", icon: "🍃" },
        { name: "Mongoose", desc: "ODM & Database Logic", icon: "📦" },
        { name: "Render", desc: "Backend Hosting", icon: "☁️" },
        { name: "SQL", desc: "Database Management", icon: "🗄️" },
      ],
    },
    {
      category: "AI SOFTWARE DEVELOPMENT",
      skills: [
        { name: "ChatGPT / OpenAI", desc: "AI Integration & APIs", icon: "🤖" },
        { name: "Claude & Gemini", desc: "LLM Utilization", icon: "✨" },
        { name: "Cursor & Copilot", desc: "AI-Powered Coding", icon: "💻" },
        { name: "Prompt Engineering", desc: "Model Optimization", icon: "🎯" },
        { name: "RAG & LLM", desc: "Advanced AI Concepts", icon: "🧠" },
      ],
    },
    {
      category: "UI/UX DESIGN",
      skills: [
        { name: "Figma", desc: "Design & Wireframing", icon: "🎨" },
        { name: "Prototyping", desc: "User Flows & Layouts", icon: "📱" },
        { name: "Design Systems", desc: "Consistency & UI Kits", icon: "📐" },
        {
          name: "Responsive Design",
          desc: "Mobile-first Approach",
          icon: "💻",
        },
      ],
    },
    {
      category: "TOOLS & TECHNOLOGIES",
      skills: [
        { name: "Git & GitHub", desc: "Version Control", icon: "🐙" },
        { name: "Postman", desc: "API Testing", icon: "📮" },
        { name: "VS Code", desc: "Code Editor", icon: "🛠️" },
        { name: "Docker", desc: "Containerization", icon: "🐳" },
        { name: "AWS", desc: "Cloud Services", icon: "☁️" },
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto text-white overflow-hidden">
      {/* Particle Background Animation spread cleanly behind skills */}
      <Particles
        id="technical-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 70 },
            color: { value: "#f97316" },
            links: {
              color: "#f97316",
              distance: 130,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            size: { value: 2.5 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 180, links: { opacity: 0.8 } },
              push: { quantity: 3 },
            },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-orange-400 text-xs tracking-widest font-bold uppercase">
            Expertise & Stack
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-500">
          TECHNICAL SKILLS
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-orange-500 to-transparent mt-4 rounded-full"></div>
      </div>

      {/* Skills Categories Container */}
      <div className="space-y-14 relative z-10">
        {skillCategories.map((cat, index) => (
          <div key={index} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              <h3 className="text-lg md:text-xl font-bold tracking-wider text-zinc-200">
                {cat.category}
              </h3>
            </div>

            {/* Skills Grid with completely transparent card background so dots flow naturally behind */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="group bg-transparent border border-white/10 p-4 rounded-2xl backdrop-blur-sm relative transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] cursor-pointer flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300 shadow-inner">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-zinc-400 text-xs mt-0.5 font-medium">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
