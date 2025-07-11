'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react';
import ScrollNavigator from '../components/ScrollNavigator';

const AboutSectionDesktop = () => {
  return (
    // Wrapper for full height and padding
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <ScrollNavigator />

      <div className="max-w-4xl w-full text-gray-300">
        {/* Top Section: Image + About Me */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Jason Maynard Profile"
              width={140}
              height={140}
              className="rounded-full border-4 border-teal-400 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* About Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-3">About Me</h2>
            <p className="leading-relaxed text-base sm:text-lg">
              I&apos;m a Full Stack Engineer who builds scalable applications and solves complex problems. I&apos;ve architected enterprise platforms for major companies like Optum and Macmillan Learning and have also launched my own direct-to-consumer brand, giving me a unique blend of corporate and entrepreneurial experience.
            </p>
          </div>
        </div>

        {/* Why Hire Me */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">Why Hire Me?</h2>
          <ul className="space-y-4 text-base sm:text-lg">
            <li>
              <span className="font-semibold text-teal-400">Leadership:</span> Proven experience leading development teams and mentoring junior engineers.
            </li>
            <li>
              <span className="font-semibold text-teal-400">Full-Stack Expertise:</span> Comprehensive skills in React, Node.js, and AWS microservices architecture.
            </li>
            <li>
              <span className="font-semibold text-teal-400">Innovative Problem-Solving:</span> A history of tackling unique challenges, from building custom IoT systems to integrating Elasticsearch.
            </li>
            <li>
              <span className="font-semibold text-teal-400">Business Acumen:</span> A founder&apos;s perspective on product design, marketing, and aligning technical solutions with business goals.
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-200 mb-4">Connect with me</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/jason-maynard-54b538ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-base sm:text-lg"
            >
              <FaLinkedin size="1.3em" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Alien4Hire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-base sm:text-lg"
            >
              <FaGithub size="1.3em" />
              <span>GitHub</span>
            </a>
            <a
              href="/jason-maynard-resume.pdf"
              download="JasonMaynard_Resume.pdf"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors text-base sm:text-lg"
            >
              <Download size="1.3em" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSectionDesktop;