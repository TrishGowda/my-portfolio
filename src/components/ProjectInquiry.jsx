import React, { useState } from "react";

export default function ProjectInquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    businessIndustry: "",
    websiteType: "",
    budgetRange: "",
    designStylePreference: "",
    projectTimeline: "",
    requiredFeatures: [],
    detailedRequirements: "",
    referenceLinks: "",
    mobileNumber: "",
    preferredContactMethod: "Email",
  });

  const handleCheckboxChange = (feature) => {
    setFormData((prev) => {
      const exists = prev.requiredFeatures.includes(feature);
      if (exists) {
        return {
          ...prev,
          requiredFeatures: prev.requiredFeatures.filter((f) => f !== feature),
        };
      } else {
        return {
          ...prev,
          requiredFeatures: [...prev.requiredFeatures, feature],
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.websiteType ||
      !formData.budgetRange ||
      !formData.projectTimeline ||
      !formData.detailedRequirements ||
      !formData.referenceLinks
    ) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Website Request Submitted Successfully!");
  };

  return (
    <section className="py-2 px-0 max-w-4xl mx-auto relative text-white text-left">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#0a0a0a]/80 border border-white/15 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl"
      >
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Business Name & Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Business / Brand Name
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Acme Corp"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Business Industry
            </label>
            <input
              type="text"
              name="businessIndustry"
              placeholder="e.g. Real Estate, Tech, Retail"
              value={formData.businessIndustry}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Website Type & Budget Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Website Type *
            </label>
            <select
              name="websiteType"
              required
              value={formData.websiteType}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-white transition-colors"
            >
              <option value="">Select Website Type</option>
              <option value="Portfolio">Portfolio</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Business/Corporate">Business / Corporate</option>
              <option value="Landing Page">Landing Page</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Budget Range *
            </label>
            <select
              name="budgetRange"
              required
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-white transition-colors"
            >
              <option value="">Select Budget</option>
              <option value="<$500">&lt; $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000+">$1000+</option>
            </select>
            <p className="text-xs text-gray-500 mt-1.5">
              *Note: A separate monthly maintenance charge will be collected
              post-launch.
            </p>
          </div>
        </div>

        {/* Row 4: Design Style Preference & Project Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Design Style Preference
            </label>
            <select
              name="designStylePreference"
              value={formData.designStylePreference}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-white transition-colors"
            >
              <option value="">Select Preference</option>
              <option value="Minimal & Modern">Minimal & Modern</option>
              <option value="Dark & Sleek">Dark & Sleek</option>
              <option value="Bold & Creative">Bold & Creative</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Project Timeline *
            </label>
            <select
              name="projectTimeline"
              required
              value={formData.projectTimeline}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-white transition-colors"
            >
              <option value="">Select Timeline</option>
              <option value="1-2 Weeks">1 - 2 Weeks</option>
              <option value="2-4 Weeks">2 - 4 Weeks</option>
              <option value="1+ Month">1+ Month</option>
            </select>
          </div>
        </div>

        {/* Checkboxes: Required Features */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-300">
            Required Features (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Content Management System (CMS)",
              "E-Commerce / Payments",
              "User Login / Portal",
              "Appointment / Booking",
              "Custom Animations",
              "SEO Optimization",
            ].map((feature) => (
              <label
                key={feature}
                className="flex items-center space-x-3 text-sm text-gray-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.requiredFeatures.includes(feature)}
                  onChange={() => handleCheckboxChange(feature)}
                  className="w-4 h-4 rounded bg-[#121212] border-white/20 text-white focus:ring-0"
                />
                <span>{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Detailed Requirements Textarea */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Detailed Website Requirements *
          </label>
          <textarea
            name="detailedRequirements"
            rows="4"
            required
            placeholder="Describe your project, features you need, your target audience, and any specific goals you have..."
            value={formData.detailedRequirements}
            onChange={handleChange}
            className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
          ></textarea>
        </div>

        {/* Reference Website Links */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Reference Website Links *
          </label>
          <textarea
            name="referenceLinks"
            rows="2"
            required
            placeholder="Share links to websites you like and what you like about them..."
            value={formData.referenceLinks}
            onChange={handleChange}
            className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
          ></textarea>
        </div>

        {/* Row 5: Mobile Number & Preferred Contact Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="+1 234 567 8900"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Preferred Contact Method
            </label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg uppercase tracking-wider text-sm"
          >
            SUBMIT WEBSITE REQUEST
          </button>
        </div>
      </form>
    </section>
  );
}
