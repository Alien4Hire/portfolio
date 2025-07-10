'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import usePrefetchRoutes from '../../hooks/usePrefetchRoutes';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'My Skills', path: '/skills' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

const Sidebar: React.FC = () => {
  usePrefetchRoutes();

  return (
    <>
      <aside className="fixed top-0 left-0 w-[300px] min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-between py-8 px-6 z-50 shadow-lg font-sans">
        {/* Top: Logo and Title */}
        <Link href="/" className="flex flex-col items-center gap-3 cursor-pointer">
          <Image
            src="/images/j1.png"
            alt="Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <h1 className="text-xl font-bold">Jason</h1>
          <p className="text-[12px] text-gray-400 font-light tracking-wide">Web Developer</p>
        </Link>

        {/* Navigation */}
        <nav className="mt-10 w-full">
          <ul className="flex flex-col w-full text-[14px] text-gray-300 font-medium">
            {navItems.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className={`block text-center border-t border-gray-700 py-3 w-full hover:bg-gray-800 hover:text-cyan-400 transition-all ${
                    label === 'Blog' ? 'text-emerald-400' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <div className="border-t border-gray-700" />
            </li>
          </ul>
        </nav>

        {/* Bottom: Socials */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex gap-4 text-[18px] text-gray-400">
            <a href="https://www.linkedin.com/in/jason-maynard-54b538ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-400 opacity-70 hover:opacity-100">
              <FaLinkedin />
            </a>
            <a href="http://www.github.com/alien4hire" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-400 opacity-70 hover:opacity-100">
              <FaGithub />
            </a>
            <a href="mailto:jaymaynard84@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-teal-400 opacity-70 hover:opacity-100">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
