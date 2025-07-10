'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

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
    <section className="min-h-screen bg-[#1a1a1a] text-white p-4 sm:p-8 md:p-12 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        
        <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg hover:shadow-teal-400/20 transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-gray-300 mb-6">
                I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out via email or connect with me on social media.
              </p>
              <div className="space-y-4">
                <a href="mailto:jaymaynard84@gmail.com" className="flex items-center gap-3 text-lg text-gray-300 hover:text-teal-400 transition-colors">
                  <Mail size={22} className="text-teal-400" />
                  <span>jaymaynard84@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/jason-maynard-54b538ba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-300 hover:text-teal-400 transition-colors">
                  <Linkedin size={22} className="text-teal-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Alien4Hire" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-300 hover:text-teal-400 transition-colors">
                  <Github size={22} className="text-teal-400" />
                  <span>GitHub Projects</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-teal-400 mb-2">Thank You!</h3>
                  <p className="text-center text-gray-300">Your message has been sent. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send size={20} />
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
