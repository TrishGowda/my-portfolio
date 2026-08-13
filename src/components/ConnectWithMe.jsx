import React, { useState } from "react";

export default function ConnectWithMe({ onBack }) {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.email || !messageForm.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailSubject = encodeURIComponent(
      messageForm.subject ||
        `New Message from ${messageForm.name} via Portfolio`,
    );
    const mailBody = encodeURIComponent(
      `Name: ${messageForm.name}\nEmail: ${messageForm.email}\n\nMessage:\n${messageForm.message}`,
    );
    window.location.href = `mailto:trishatrisha4289@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="w-full text-left text-white space-y-10 pb-16">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-xs font-semibold tracking-wider flex items-center gap-2 w-fit cursor-pointer backdrop-blur-md shadow-lg"
        >
          ← Back to Portfolio
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Get in Touch & Info */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Opportunities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let’s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Something Amazing
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Got a project idea, an internship opportunity, or just want to say
              hi? I'd love to hear from you. Let's create something great
              together.
            </p>
          </div>

          {/* Contact Cards Stack */}
          <div className="space-y-3.5">
            {/* Email */}
            <a
              href="mailto:trishatrisha4289@gmail.com"
              className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-base shadow-inner group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    trishatrisha4289@gmail.com
                  </p>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all pr-2 text-sm font-bold">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TrishGowda"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-base shadow-inner group-hover:scale-105 transition-transform">
                  💻
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    github.com/TrishGowda
                  </p>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all pr-2 text-sm font-bold">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thrisa-ms-351967399/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-base shadow-inner group-hover:scale-105 transition-transform">
                  💼
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    thrisa-ms-351967399
                  </p>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all pr-2 text-sm font-bold">
                ↗
              </span>
            </a>

            {/* Resume - Downloads directly */}
            <a
              href="/resume.pdf"
              download="Trisha_MS_Resume.pdf"
              className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-base shadow-inner group-hover:scale-105 transition-transform">
                  📄
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                    Resume
                  </p>
                  <p className="text-sm font-semibold text-white tracking-wide">
                    Download My Resume
                  </p>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all pr-2 text-sm font-bold">
                ↓
              </span>
            </a>
          </div>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 transition">
              <p className="text-sm mb-1">💼</p>
              <p className="text-[11px] text-gray-300 font-medium">
                Internships
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 transition">
              <p className="text-sm mb-1">&lt;/&gt;</p>
              <p className="text-[11px] text-gray-300 font-medium">Freelance</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 transition">
              <p className="text-sm mb-1">👥</p>
              <p className="text-[11px] text-gray-300 font-medium">
                Collaborate
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center hover:border-white/20 transition">
              <p className="text-sm mb-1">⏱️</p>
              <p className="text-[11px] text-gray-300 font-medium">
                Quick Reply
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#0d0d0d] to-[#070707] border border-white/15 p-7 sm:p-9 rounded-3xl shadow-2xl relative backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-white/10 text-sm">✉️</span>
              <span>Send Me a Message</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleMessageSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={messageForm.name}
                  onChange={handleMessageChange}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition shadow-inner"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={messageForm.email}
                  onChange={handleMessageChange}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition shadow-inner"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry / Collaboration"
                value={messageForm.subject}
                onChange={handleMessageChange}
                className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Your Message *
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                value={messageForm.message}
                onChange={handleMessageChange}
                className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition resize-none shadow-inner"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-xl uppercase tracking-wider text-xs cursor-pointer mt-1 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>🚀</span> Send Message
            </button>

            <p className="text-center text-[11px] text-gray-500 pt-1 flex items-center justify-center gap-1.5">
              <span>🔒</span> Your information is safe with me. I respect your
              privacy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
