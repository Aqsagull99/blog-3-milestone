"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your message has been sent successfully!");
  };

  return (
    <section className="relative py-20 text-white ">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-2xl sm:text-4xl  mb-4 text-white font-extralight">
          Get in Touch <span className="text-purple-600">With Us</span>
        </h2>
        <p className="text-sm leading-relaxed mb-10 text-white font-extralight">
          Have questions or feedback? Reach out to us—we'd love to hear from you! Fill out the form below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6 bg-white/20 backdrop-blur-md shadow-lg text-white p-8 rounded-lg border border-gray-300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2  focus:ring-purple-600 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2  focus:ring-purple-600 text-white placeholder-gray-400"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>

      
       {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 opacity-30"></div>
        */}
    </section>
  );
};

export default ContactSection;
