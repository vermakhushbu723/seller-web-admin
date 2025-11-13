import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdNotifications, MdPerson, MdLogout, MdMenu } from 'react-icons/md';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';
import { useAuth } from '../../core/context/AuthContext.jsx';
import { useResponsive } from '../../core/utils/useResponsive.js';

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isMobile, isTablet, padding } = useResponsive();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const showFullProfile = !isMobile && !isTablet;

  return (
    <header
      style={{
        height: AppDimensions.headerHeight,
        background: AppColors.surface,
        borderBottom: `1px solid ${AppColors.divider}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${padding}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? AppDimensions.spacingM : AppDimensions.spacingL }}>
        {/* Mobile/Tablet Menu Button */}
        {(isMobile || isTablet) && (
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
            fontSize: isMobile ? '0.875rem' : isTablet ? '1rem' : '1.25rem',
            fontWeight: 600,
            color: AppColors.textPrimary,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {isMobile ? 'Dashboard' : 'Welcome Back! 👋'}
        </h2>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: isMobile ? AppDimensions.spacingS : AppDimensions.spacingM,
      }}>
        {/* Notifications Icon */}
        <button
          onClick={() => navigate('/notifications')}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            color: AppColors.textSecondary,
            borderRadius: '50%',
            transition: 'background 200ms',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = AppColors.surfaceVariant;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
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

        {/* Profile - Show full on desktop, icon only on mobile/tablet */}
        {showFullProfile ? (
          <div
            onClick={() => navigate('/profile')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: AppDimensions.spacingM,
              padding: `${AppDimensions.paddingS} ${AppDimensions.paddingM}`,
              background: AppColors.surfaceVariant,
              borderRadius: AppDimensions.radiusFull,
              cursor: 'pointer',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = AppColors.grey200;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = AppColors.surfaceVariant;
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
        ) : (
          <button
            onClick={() => navigate('/profile')}
            style={{
              background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              transition: 'transform 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <MdPerson size={20} />
          </button>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            background: `linear-gradient(135deg, ${AppColors.error} 0%, ${AppColors.errorDark} 100%)`,
            color: 'white',
            border: 'none',
            borderRadius: isMobile ? '50%' : AppDimensions.radiusM,
            padding: isMobile ? '0.625rem' : `${AppDimensions.paddingS} ${AppDimensions.paddingM}`,
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 0 : AppDimensions.spacingS,
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'all 200ms',
            whiteSpace: 'nowrap',
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
