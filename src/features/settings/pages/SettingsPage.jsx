import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdManageAccounts, MdPrivacyTip, MdGavel, MdEmail, MdDeleteForever } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const settingsOptions = [
    { title: 'Account Settings', description: 'Manage your account preferences and security', icon: MdManageAccounts, color: AppColors.primary, path: '/settings/account' },
    { title: 'Privacy Policy', description: 'Read our privacy policy and data protection', icon: MdPrivacyTip, color: AppColors.success, path: '/settings/privacy' },
    { title: 'Terms & Conditions', description: 'Review our terms of service', icon: MdGavel, color: AppColors.info, path: '/settings/terms' },
    { title: 'Contact Us', description: 'Get in touch with our support team', icon: MdEmail, color: AppColors.warning, path: '/settings/contact' },
    { title: 'Delete Account', description: 'Permanently delete your account', icon: MdDeleteForever, color: AppColors.error, path: '/settings/delete-account' },
  ];

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, marginBottom: AppDimensions.marginL }}>Settings</h1>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: AppDimensions.marginL }}>
        {settingsOptions.map((option, idx) => {
          const Icon = option.icon;
          return (
            <div key={idx} onClick={() => navigate(option.path)} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'translateY(-4px)' } }}>
              <div style={{ width: '56px', height: '56px', borderRadius: AppDimensions.radiusL, backgroundColor: `${option.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={28} color={option.color} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>{option.title}</h3>
              <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>{option.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPage;

