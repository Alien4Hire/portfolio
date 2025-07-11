'use client';

import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <button
      onClick={toggleSidebar}
      className="lg:hidden fixed top-4 left-4 z-[60] flex flex-col justify-between w-7 h-6 p-1 group"
      aria-label="Toggle Sidebar"
    >
      {/* Top bar */}
      <span
        className={`h-0.5 w-full bg-white transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      {/* Middle bar */}
      <span
        className={`h-0.5 w-full bg-white transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Bottom bar */}
      <span
        className={`h-0.5 w-full bg-white transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
