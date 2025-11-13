import React from 'react';
import { AppColors } from '../../core/constants/colors.js';
import { useResponsive } from '../../core/utils/useResponsive.js';

const ComingSoonPage = ({ title, description, IconComponent }) => {
  const { isMobile, isTablet, padding } = useResponsive();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: isMobile ? '60vh' : '80vh',
        padding: padding,
        background: AppColors.background,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: isMobile ? '100%' : '600px',
          width: '100%',
        }}
      >
        {IconComponent && (
          <div
            style={{
              marginBottom: isMobile ? '1.5rem' : '2rem',
              color: AppColors.primary,
            }}
          >
            <IconComponent size={isMobile ? 60 : isTablet ? 70 : 80} />
          </div>
        )}
        <h1
          style={{
            fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
            fontWeight: 700,
            background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: isMobile ? '0.75rem' : '1rem',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: isMobile ? '0.938rem' : isTablet ? '1.125rem' : '1.25rem',
            color: AppColors.textSecondary,
            marginBottom: isMobile ? '1.5rem' : '2rem',
            lineHeight: 1.6,
          }}
        >
          {description || 'This feature is under development and will be available soon.'}
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: isMobile ? '0.75rem 1.5rem' : isTablet ? '0.875rem 1.75rem' : '1rem 2rem',
            background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
            color: 'white',
            borderRadius: '12px',
            fontSize: isMobile ? '0.938rem' : isTablet ? '1rem' : '1.125rem',
            fontWeight: 600,
            boxShadow: '0 10px 15px -3px rgba(107, 70, 193, 0.3)',
          }}
        >
          Coming Soon 🚀
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
