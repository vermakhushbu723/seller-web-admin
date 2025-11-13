import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: AppColors.background }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          marginLeft: isMobile ? 0 : AppDimensions.sidebarWidth,
          transition: 'margin-left 300ms ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main
          style={{
            flex: 1,
            padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingXL,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
