'use client';

import React from 'react';
import AnimatedHero from '../TypingHero';

const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] text-white pl-12 sm:pl-20 md:pl-32 lg:pl-48 flex items-center overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 text-white/10 text-lg sm:text-xl font-mono leading-none pointer-events-none select-none z-0">
        <div className="absolute top-[15%] left-[5%]">&lt;h1&gt;</div>
        <div className="absolute top-[25%] left-[2%]">&lt;body&gt;</div>
        <div className="absolute top-[35%] left-[8%]">&lt;p&gt;</div>
        <div className="absolute bottom-[35%] right-[8%]">&lt;/p&gt;</div>
        <div className="absolute bottom-[25%] right-[2%]">&lt;/body&gt;</div>
        <div className="absolute bottom-[15%] right-[5%]">&lt;/h1&gt;</div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <AnimatedHero />
      </div>
    </section>
  );
};

export default HomeHero;