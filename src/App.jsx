import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ProjectInquiry from "./components/ProjectInquiry";
import ConnectWithMe from "./components/ConnectWithMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="app">
      <div className="space-bg"></div>

      <Navbar setCurrentView={setCurrentView} />

      <main>
        {currentView === "home" && (
          <>
            <Hero />
            <About />
            <Expertise />

            <section className="py-24 px-6 max-w-5xl mx-auto relative text-center z-10">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wider uppercase mb-3 text-white">
                  LET’S BUILD YOUR WEBSITE
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                  Looking for a modern website for your business? Share your
                  ideas, and let’s turn them into a powerful digital experience.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("projects-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-8 py-3.5 rounded-full border border-white/30 bg-transparent text-white font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  SEE MY PROJECTS
                </button>

                <button
                  onClick={() => {
                    setCurrentView("inquiry");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  BUILD YOUR PROJECT
                </button>
              </div>
            </section>

            <div id="projects-section">
              <ContactForm />
            </div>

            <Experience />
            <TechnicalSkills />
            <Education />
            <Certifications />
            <Footer setCurrentView={setCurrentView} targetView="new-contact" />
          </>
        )}

        {currentView === "inquiry" && (
          <div className="min-h-screen py-24 px-6 max-w-6xl mx-auto relative z-10 text-white">
            <button
              onClick={() => {
                setCurrentView("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mb-8 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition text-sm font-medium tracking-wider flex items-center gap-2 w-fit cursor-pointer"
            >
              ← Back to Portfolio
            </button>
            <ProjectInquiry />
          </div>
        )}

        {currentView === "new-contact" && (
          <div className="min-h-screen py-24 px-6 max-w-6xl mx-auto relative z-10 text-white">
            <button
              onClick={() => {
                setCurrentView("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mb-8 px-6 py-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black transition text-sm font-medium tracking-wider flex items-center gap-2 w-fit cursor-pointer"
            >
              ← Back to Portfolio
            </button>
            <ConnectWithMe />
          </div>
        )}
      </main>
    </div>
  );
}
