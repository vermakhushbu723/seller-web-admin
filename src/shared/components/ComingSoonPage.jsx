import React from 'react';
import { AppColors } from '../../core/constants/colors.js';

const ComingSoonPage = ({ title, description, IconComponent }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '2rem',
        background: AppColors.background,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        {IconComponent && (
          <div
            style={{
              marginBottom: '2rem',
              color: AppColors.primary,
            }}
          >
            <IconComponent size={80} />
          </div>
        )}
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: AppColors.textSecondary,
            marginBottom: '2rem',
          }}
        >
          {description || 'This feature is under development and will be available soon.'}
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
            color: 'white',
            borderRadius: '12px',
            fontSize: '1.125rem',
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
