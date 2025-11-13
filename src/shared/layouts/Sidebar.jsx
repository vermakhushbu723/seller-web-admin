import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdAnalytics, 
  MdInventory, 
  MdShoppingCart, 
  MdBook, 
  MdAccountBalanceWallet, 
  MdPerson, 
  MdNotifications, 
  MdSupport, 
  MdSettings,
  MdMenu,
  MdMenuOpen,
  MdClose
} from 'react-icons/md';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';
import { AppRoutes } from '../../core/constants/routes.js';
import { useResponsive } from '../../core/utils/useResponsive.js';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  // Close sidebar on route change for mobile/tablet
  useEffect(() => {
    if ((isMobile || isTablet) && isOpen) {
      onClose();
    }
  }, [location.pathname]);

  const menuItems = [
    { path: AppRoutes.dashboard, label: 'Dashboard', icon: MdDashboard },
    { path: AppRoutes.analytics, label: 'Analytics', icon: MdAnalytics },
    { path: AppRoutes.products, label: 'Products', icon: MdInventory },
    { path: AppRoutes.orders, label: 'Orders', icon: MdShoppingCart },
    { path: AppRoutes.catalog, label: 'Catalog', icon: MdBook },
    { path: AppRoutes.wallet, label: 'Wallet', icon: MdAccountBalanceWallet },
    { path: AppRoutes.profile, label: 'Profile', icon: MdPerson },
    { path: AppRoutes.notifications, label: 'Notifications', icon: MdNotifications },
    { path: AppRoutes.support, label: 'Support', icon: MdSupport },
    { path: AppRoutes.settings, label: 'Settings', icon: MdSettings },
  ];

  const isActive = (path) => location.pathname === path;

  const handleMenuItemClick = () => {
    if (isMobile || isTablet) {
      onClose();
    }
  };

  // Determine sidebar width
  const getSidebarWidth = () => {
    if (isMobile || isTablet) return '280px';
    if (collapsed) return AppDimensions.sidebarCollapsedWidth;
    return AppDimensions.sidebarWidth;
  };

  // Determine sidebar left position
  const getSidebarLeft = () => {
    if (isMobile || isTablet) {
      return isOpen ? 0 : '-280px';
    }
    return 0;
  };

  return (
    <>
      {/* Mobile/Tablet Overlay */}
      {(isMobile || isTablet) && isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99,
            transition: 'opacity 300ms',
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          width: getSidebarWidth(),
          height: '100vh',
          background: AppColors.surface,
          borderRight: `1px solid ${AppColors.divider}`,
          position: 'fixed',
          left: getSidebarLeft(),
          top: 0,
          transition: 'all 300ms ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
          boxShadow: (isMobile || isTablet) && isOpen ? '4px 0 8px rgba(0, 0, 0, 0.1)' : 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            padding: AppDimensions.paddingL,
            borderBottom: `1px solid ${AppColors.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: AppDimensions.headerHeight,
            flexShrink: 0,
          }}
        >
          {(!collapsed || isMobile || isTablet) && (
            <h1
              style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 700,
                background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Seller Admin
            </h1>
          )}
          {(isMobile || isTablet) ? (
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: AppColors.textPrimary,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MdClose size={24} />
            </button>
          ) : (
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: AppColors.textPrimary,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {collapsed ? <MdMenu size={24} /> : <MdMenuOpen size={24} />}
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: AppDimensions.paddingS }}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuItemClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: AppDimensions.spacingM,
                  padding: AppDimensions.paddingM,
                  margin: `${AppDimensions.marginS} 0`,
                  borderRadius: AppDimensions.radiusM,
                  textDecoration: 'none',
                  color: isActive(item.path) ? AppColors.primary : AppColors.textSecondary,
                  background: isActive(item.path) ? `${AppColors.primary}15` : 'transparent',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  transition: 'all 200ms ease-in-out',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = AppColors.surfaceVariant;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <IconComponent size={isMobile ? 20 : 24} />
                {(!collapsed || isMobile || isTablet) && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
