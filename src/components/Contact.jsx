import React, { useState } from 'react';

export default function Contact({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden text-white">
      {/* Back to Portfolio Button */}
      <button
        onClick={onBack}
        className="mb-8 px-4 py-2 rounded-full border border-white/20 bg-black/50 text-white text-sm hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        ← Back to Portfolio
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Info Column */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Let's Build <br />Something Amazing
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Got a project idea, an opportunity, or just want to say hi? I'd love to hear from you. Let's create something great together.
          </p>

          {/* Links / Info Cards */}
          <div className="space-y-4 mb-8">
            <a href="mailto:trishatrisha4289@gmail.com" className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-white/30 transition-all">
              <div>
                <p className="text-xs text-gray-400 uppercase">Email</p>
                <p className="text-sm font-medium">trishatrisha4289@gmail.com</p>
              </div>
              <span className="text-gray-400">↗</span>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-white/30 transition-all">
              <div>
                <p className="text-xs text-gray-400 uppercase">GitHub</p>
                <p className="text-sm font-medium">github.com/TrishaMS</p>
              </div>
              <span className="text-gray-400">↗</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-black/50 border border-white/10 hover:border-white/30 transition-all">
              <div>
                <p className="text-xs text-gray-400 uppercase">LinkedIn</p>
                <p className="text-sm font-medium">linkedin.com/in/trishams</p>
              </div>
              <span className="text-gray-400">↗</span>
            </a>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs text-gray-400">
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">💼 Open to Internships</div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">💻 Open to Freelance</div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">🤝 Open to Collaborations</div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5">⏱️ Response Within 24h</div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl">
          <h3 className="text-xl font-bold mb-1">Send Me a Message</h3>
          <p className="text-xs text-gray-400 mb-6">Fill out the form below and I'll get back to you soon.</p>

          {submitted ? (
            <div className="p-6 text-center bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry, collaboration, etc."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Your Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-white focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                ✈️ Send Message
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                🔒 Your information is safe with me. I respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}