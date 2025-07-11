'use client';

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if window is defined (for client-side only execution)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set initial width on mount
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return windowWidth;
};

export default useWindowWidth;