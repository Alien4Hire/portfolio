'use client';

import React from 'react';
import AnimatedHero from '../TypingHero';

const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] text-white flex flex-col justify-center items-center overflow-hidden px-4 py-10 md:px-0 md:py-0 md:pl-32 lg:pl-48 md:block">
      <div className="absolute inset-0 text-white/5 text-base sm:text-lg md:text-xl font-mono leading-none pointer-events-none select-none z-0">
        <div className="absolute top-[10%] left-[2%] md:top-[15%] md:left-[5%]">&lt;h1&gt;</div>
        <div className="absolute top-[20%] left-[0%] md:top-[25%] md:left-[2%]">&lt;body&gt;</div>
        <div className="absolute top-[30%] left-[5%] md:top-[35%] md:left-[8%]">&lt;p&gt;</div>
        <div className="absolute bottom-[30%] right-[5%] md:bottom-[35%] md:right-[8%]">&lt;/p&gt;</div>
        <div className="absolute bottom-[20%] right-[0%] md:bottom-[25%] md:right-[2%]">&lt;/body&gt;</div>
        <div className="absolute bottom-[10%] right-[2%] md:bottom-[15%] md:right-[5%]">&lt;/h1&gt;</div>
      </div>
      <div className="relative z-10 w-full max-w-full md:max-w-none md:w-auto mx-auto md:mx-0">
        <AnimatedHero />
      </div>
    </section>
  );
};

export default HomeHero;