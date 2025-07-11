'use client';

import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import ScrollIndicators from '../ScrollIndicator';
import HamburgerButton from '../HamburgerButton';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        />
      )}

      {/* Hamburger */}
      <HamburgerButton isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main className="ml-0 lg:ml-64 flex-1 min-h-screen bg-[#0a0a0a]">
        {children}
      </main>

      <ScrollIndicators />
    </div>
  );
};

export default ClientLayout;
