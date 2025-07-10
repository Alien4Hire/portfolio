'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react'; // Import the Download icon
import ScrollNavigator from '../components/ScrollNavigator';

const AboutSection = () => {
  return (
    // Main container to center content vertically and horizontally
    <main className="min-h-screen flex items-center justify-center p-4">
      <ScrollNavigator />
      <div className="max-w-4xl w-full text-gray-300">

        {/* Top Section: Profile Image + About Me Paragraph */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <Image
              src="/images/profile.jpg" // Make sure this path is correct
              alt="Jason Maynard Profile"
              width={160}
              height={160}
              className="rounded-full border-4 border-teal-400 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-teal-400 mb-3">About Me</h2>
            <p className="leading-relaxed text-lg">
              I'm a Full Stack Engineer who builds scalable applications and solves complex problems. I've architected enterprise platforms for major companies like Optum and Macmillan Learning and have also launched my own direct-to-consumer brand, giving me a unique blend of corporate and entrepreneurial experience.
            </p>
          </div>
        </div>

        {/* Why Hire Me Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">Why Hire Me?</h2>
          <ul className="space-y-4 text-lg">
            <li><span className="font-semibold text-teal-400">Leadership:</span> Proven experience leading development teams and mentoring junior engineers.</li>
            <li><span className="font-semibold text-teal-400">Full-Stack Expertise:</span> Comprehensive skills in React, Node.js, and AWS microservices architecture.</li>
            <li><span className="font-semibold text-teal-400">Innovative Problem-Solving:</span> A history of tackling unique challenges, from building custom IoT systems to integrating Elasticsearch.</li>
            <li><span className="font-semibold text-teal-400">Business Acumen:</span> A founder's perspective on product design, marketing, and aligning technical solutions with business goals.</li>
          </ul>
        </div>

        {/* Connect Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Connect with me</h3>
          <div className="flex items-center justify-center flex-wrap gap-6">
            <a href="https://www.linkedin.com/in/jason-maynard-54b538ba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-lg">
              <FaLinkedin size="1.5em" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Alien4Hire" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-lg">
              <FaGithub size="1.5em" />
              <span>GitHub</span>
            </a>
            <a 
              href="/jason-maynard-resume.pdf" 
              download="JasonMaynard_Resume.pdf"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-lg"
            >
              <Download size="1.5em" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
