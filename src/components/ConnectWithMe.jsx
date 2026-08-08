import React, { useState } from "react";

export default function ConnectWithMe({ onBack }) {
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.email || !messageForm.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `New Message from ${messageForm.name} via Portfolio`,
    );
    const body = encodeURIComponent(
      `Name: ${messageForm.name}\nEmail: ${messageForm.email}\n\nMessage:\n${messageForm.message}`,
    );
    window.location.href = `mailto:trishatrisha4289@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white px-4 sm:px-8 py-8 text-left selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-all cursor-pointer bg-white/5 border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-full backdrop-blur-md"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </button>
        )}

        {/* Header Section with subtle gradient feel */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-300 border border-white/20 bg-white/5 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Get in Touch ✦ Available for Work</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
              Extraordinary.
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Have a project in mind, an internship opportunity, or just want to
            connect? Reach out directly through social channels or drop a direct
            message below.
          </p>
        </div>

        {/* Main Grid: Left (Socials & Badges) | Right (Send a Message Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Left Column: Direct Links & Status Badges */}
          <div className="lg:col-span-6 space-y-6">
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:trishatrisha4289@gmail.com"
                className="group relative flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/40 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shadow-inner">
                    ✉️
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">
                      Email Me Directly
                    </p>
                    <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                      trishatrisha4289@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 text-lg">
                  ↗
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/TrishGowda"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/40 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shadow-inner">
                    💻
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">
                      Explore Code
                    </p>
                    <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                      github.com/TrishGowda
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 text-lg">
                  ↗
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/thrisa-ms-351967399/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/40 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shadow-inner">
                    💼
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">
                      Professional Network
                    </p>
                    <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                      thrisa-ms-351967399
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform relative z-10 text-lg">
                  ↗
                </span>
              </a>
            </div>

            {/* Availability Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center">
                <p className="text-lg mb-1">💼</p>
                <p className="text-xs text-gray-200 font-medium">
                  Open to Internships
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center">
                <p className="text-lg mb-1">&lt;/&gt;</p>
                <p className="text-xs text-gray-200 font-medium">
                  Open to Freelance
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center">
                <p className="text-lg mb-1">👥</p>
                <p className="text-xs text-gray-200 font-medium">
                  Open to Collaborations
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center">
                <p className="text-lg mb-1">⏱️</p>
                <p className="text-xs text-gray-200 font-medium">
                  Response Within 24h
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Box */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#0d0d0d] to-[#080808] border border-white/15 p-8 sm:p-10 rounded-3xl backdrop-blur-2xl shadow-2xl relative">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center space-x-3">
                <span className="p-2 rounded-xl bg-white/10 text-base">💬</span>
                <span>Send a Direct Message</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">
                Fill out the form below to quickly route a direct message
                straight to my email inbox.
              </p>
            </div>

            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={messageForm.name}
                  onChange={handleMessageChange}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={messageForm.email}
                  onChange={handleMessageChange}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Type your project details or message here..."
                  value={messageForm.message}
                  onChange={handleMessageChange}
                  className="w-full bg-[#141414] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none shadow-inner"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-xl uppercase tracking-wider text-xs cursor-pointer mt-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
