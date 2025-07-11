'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react';
import ScrollNavigator from '../components/ScrollNavigator';

const AboutSectionMobile = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-4">
      <ScrollNavigator />

      <div className="max-w-md w-full text-gray-300 flex-grow flex flex-col justify-center">
        {/* Top Section: Image + About Me */}
        <div className="flex flex-col items-center gap-4 mb-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Jason Maynard Profile"
              width={100}
              height={100}
              className="rounded-full border-2 border-teal-400 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* About Text */}
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-teal-400 mb-2 tracking-wide md:tracking-normal drop-shadow-md">About Me</h2>
            <p className="leading-snug text-sm font-light subpixel-antialiased">
              I&apos;m a **Full Stack Engineer** who builds scalable applications and solves complex problems. I&apos;ve architected enterprise platforms for major companies like Optum and Macmillan Learning and have also launched my own direct-to-consumer brand, giving me a unique blend of corporate and entrepreneurial experience.
            </p>
          </div>
        </div>

        {/* Why Hire Me */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-teal-400 mb-3 tracking-wide md:tracking-normal drop-shadow-md">Why Hire Me?</h2>
          <ul className="space-y-2 text-sm text-left font-light subpixel-antialiased">
            <li>
              <span className="font-semibold text-teal-300">Leadership:</span> Proven experience leading development teams and mentoring junior engineers.
            </li>
            <li>
              <span className="font-semibold text-teal-300">Full-Stack Expertise:</span> Comprehensive skills in React, Node.js, and AWS microservices architecture.
            </li>
            <li>
              <span className="font-semibold text-teal-300">Innovative Problem-Solving:</span> A history of tackling unique challenges, from building custom IoT systems to integrating Elasticsearch.
            </li>
            <li>
              <span className="font-semibold text-teal-300">Business Acumen:</span> A founder&apos;s perspective on product design, marketing, and aligning technical solutions with business goals.
            </li>
          </ul>
        </div>
      </div>

      {/* Connect Section */}
      <div className="text-center py-4 w-full">
        <h3 className="text-xl font-bold text-gray-200 mb-3 drop-shadow-sm">Connect with me</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/jason-maynard-54b538ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-all duration-200 text-sm hover:scale-105"
          >
            <FaLinkedin size="1.2em" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Alien4Hire"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-all duration-200 text-sm hover:scale-105"
          >
            <FaGithub size="1.2em" />
            <span>GitHub</span>
          </a>
          <a
            href="/jason-maynard-resume.pdf"
            download="JasonMaynard_Resume.pdf"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-all duration-200 text-sm hover:scale-105"
          >
            <Download size="1.2em" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutSectionMobile;