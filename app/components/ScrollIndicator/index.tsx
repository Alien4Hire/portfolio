'use client';

import React, { useState, useEffect } from 'react';

const ScrollIndicators: React.FC = () => {
  const [show, setShow] = useState(true);

  // Toggle scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Shared base styles
  const indicatorClasses = `fixed flex items-center gap-3 text-xs tracking-widest transition-opacity duration-300 z-50 [writing-mode:vertical-rl] ${
    show ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <>
      {/* Left Scroll Indicator */}
      <div className={`${indicatorClasses} bottom-10 left-[315px]`}>
        <span className="text-gray-500">scroll down</span>
        <span className="text-white">&rarr;</span>
      </div>

      {/* Right Scroll Indicator */}
      <div className={`${indicatorClasses} bottom-10 right-4`}>
        <span className="text-gray-500">scroll down</span>
        <span className="text-white">&rarr;</span>
      </div>
    </>
  );
};

export default ScrollIndicators;
