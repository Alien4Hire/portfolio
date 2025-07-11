'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import ScrollNavigator from '../components/ScrollNavigator';

// Main ContactPage component
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., by sending the data to a backend API.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-6 flex items-center justify-center md:p-12">
      <ScrollNavigator />
      <div className="max-w-5xl mx-auto w-full">
        <div className="hidden md:block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center md:mb-4">Get In Touch</h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6 text-center md:mb-12">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Main content card: Reduced padding on mobile (`p-5`), `p-8` for desktop */}
        <div className="bg-[#2a2a2a] p-5 rounded-xl shadow-lg hover:shadow-teal-400/20 transition-shadow duration-300 md:p-8">
          {/* Grid layout: `gap-6` for mobile, `md:gap-12` for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 md:mb-4">Let&apos;s Connect</h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6">
                I&apos;m currently seeking new opportunities and am open to collaboration. Feel free to reach out via email or connect with me on social media.
              </p>
              {/* Spacing for contact links: `space-y-2` for mobile, `md:space-y-4` for desktop */}
              <div className="space-y-2 md:space-y-4">
                {/* Text and icon sizes for mobile links remain as previously adjusted */}
                <a href="mailto:jaymaynard84@gmail.com" className="flex items-center gap-2 text-base text-gray-300 hover:text-teal-400 transition-colors sm:text-lg">
                  <Mail size={20} className="text-teal-400" />
                  <span>jaymaynard84@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/jason-maynard-54b538ba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-gray-300 hover:text-teal-400 transition-colors sm:text-lg">
                  <Linkedin size={20} className="text-teal-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Alien4Hire" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-gray-300 hover:text-teal-400 transition-colors sm:text-lg">
                  <Github size={20} className="text-teal-400" />
                  <span>GitHub Projects</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 p-6 rounded-lg md:p-8">
                  {/* Font sizes for mobile remain as previously adjusted */}
                  <h3 className="text-xl sm:text-2xl font-bold text-teal-400 mb-2">Thank You!</h3>
                  <p className="text-center text-sm sm:text-base text-gray-300">Your message has been sent. I&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                  <div>
                    {/* Label margin reduced for mobile */}
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition text-sm sm:text-base"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-base"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;