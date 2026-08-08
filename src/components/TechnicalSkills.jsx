import React from "react";

export default function TechnicalSkills() {
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
        { name: "Sql", desc: "Database", icon: "🐍" },
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
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          TECHNICAL SKILLS
        </h2>
        <div className="w-20 h-1 bg-white mt-3"></div>
      </div>

      <div className="space-y-12">
        {skillCategories.map((cat, index) => (
          <div key={index}>
            {/* Category Header with Cyan Vertical Line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-cyan-400 rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-bold tracking-wider text-gray-200">
                {cat.category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="group bg-[#0a0a0a]/80 border border-white/15 p-4 rounded-xl backdrop-blur-xl relative transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] cursor-pointer flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-cyan-500/10 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5">{skill.desc}</p>
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
