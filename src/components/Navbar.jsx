import React from 'react';

export default function Navbar({ setCurrentView }) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <div 
          onClick={() => {
            setCurrentView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white font-bold text-lg tracking-wider cursor-pointer"
        >
          THRISA MS 
        </div>

        {/* Right Corner Buttons: Contact & Resume */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              setCurrentView("new-contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-2 rounded-full border border-white/20 bg-black hover:bg-white hover:text-black transition text-sm font-medium tracking-wider text-white cursor-pointer"
          >
            CONTACT
          </button>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition text-sm font-medium tracking-wider"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}