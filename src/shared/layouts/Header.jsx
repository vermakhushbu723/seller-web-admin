import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdNotifications, MdPerson, MdLogout, MdMenu } from 'react-icons/md';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';
import { useAuth } from '../../core/context/AuthContext.jsx';

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header
      style={{
        height: AppDimensions.headerHeight,
        background: AppColors.surface,
        borderBottom: `1px solid ${AppColors.divider}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? `0 ${AppDimensions.paddingM}` : `0 ${AppDimensions.paddingXL}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: AppDimensions.spacingL }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={onMenuClick}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              color: AppColors.textPrimary,
            }}
          >
            <MdMenu size={24} />
          </button>
        )}
        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: 600,
            color: AppColors.textPrimary,
          }}
        >
          Welcome Back! 👋
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? AppDimensions.spacingS : AppDimensions.spacingL }}>
        {/* Notifications Icon */}
        <button
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            color: AppColors.textSecondary,
          }}
        >
          <MdNotifications size={isMobile ? 20 : 24} />
          <span
            style={{
              position: 'absolute',
              top: '0.25rem',
              right: '0.25rem',
              width: '8px',
              height: '8px',
              background: AppColors.error,
              borderRadius: '50%',
            }}
          />
        </button>

        {/* Profile - Hide text on mobile */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: AppDimensions.spacingM,
              padding: `${AppDimensions.paddingS} ${AppDimensions.paddingM}`,
              background: AppColors.surfaceVariant,
              borderRadius: AppDimensions.radiusFull,
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <MdPerson size={24} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: AppColors.textPrimary }}>
                {user?.name || 'Admin User'}
              </span>
              <span style={{ fontSize: '0.75rem', color: AppColors.textSecondary }}>
                {user?.email || 'admin@seller.com'}
              </span>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            background: `linear-gradient(135deg, ${AppColors.error} 0%, ${AppColors.errorDark} 100%)`,
            color: 'white',
            border: 'none',
            borderRadius: AppDimensions.radiusM,
            padding: isMobile ? `${AppDimensions.paddingS}` : `${AppDimensions.paddingS} ${AppDimensions.paddingM}`,
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 0 : AppDimensions.spacingS,
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'all 200ms',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <MdLogout size={18} />
          {!isMobile && 'Logout'}
        </button>
      </div>
    </header>
  );
};

export default Header;
