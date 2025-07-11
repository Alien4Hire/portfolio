'use client';

import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import AboutSectionMobile from './AboutMobile'; 
import AboutSectionDesktop from './AboutDesktop';

const AboutSection = () => {
  // ✅ Use the custom hook to get the current window width
  const windowWidth = useWindowWidth();
  // Define a breakpoint for responsive design
  const breakpoint = 768; 

  // Important for SSR: Don't render until windowWidth is determined on the client-side.
  // When running on the server, windowWidth will initially be 0.
  if (windowWidth === 0) {
    return null; // Render nothing or a simple loading state until hydration on the client
  }

  // ✅ Conditionally render based on the window width
  return (
    <>
      {windowWidth < breakpoint ? (
        <AboutSectionMobile />
      ) : (
        <AboutSectionDesktop />
      )}
    </>
  );
};

export default AboutSection;