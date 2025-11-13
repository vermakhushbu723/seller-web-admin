import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';
import { useResponsive } from '../../core/utils/useResponsive.js';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isMobile, isTablet, padding } = useResponsive();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: AppColors.background }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          marginLeft: isMobile || isTablet ? 0 : AppDimensions.sidebarWidth,
          transition: 'margin-left 300ms ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0, // Prevents flex overflow
        }}
      >
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main
          style={{
            flex: 1,
            padding: padding,
            overflow: 'auto',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
