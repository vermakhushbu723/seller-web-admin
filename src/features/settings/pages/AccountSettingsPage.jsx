import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdNotifications, MdEmail, MdLock } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const AccountSettingsPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    marketingEmails: false,
    twoFactorAuth: false,
  });

  const handleToggle = (field) => setSettings({...settings, [field]: !settings[field]});
  const handleSubmit = (e) => { e.preventDefault(); alert('Settings saved!'); };

  const ToggleSwitch = ({ checked, onChange }) => (
    <div onClick={onChange} style={{ width: '48px', height: '24px', backgroundColor: checked ? AppColors.primary : AppColors.divider, borderRadius: '12px', position: 'relative', cursor: 'pointer', transition: 'background-color 0.3s' }}>
      <div style={{ width: '20px', height: '20px', backgroundColor: AppColors.surface, borderRadius: '50%', position: 'absolute', top: '2px', left: checked ? '26px' : '2px', transition: 'left 0.3s' }} />
    </div>
  );

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/settings')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Account Settings</h1>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdNotifications size={24} />Notification Preferences</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
              <div>
                <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>Email Notifications</p>
                <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Receive updates via email</p>
              </div>
              <ToggleSwitch checked={settings.emailNotifications} onChange={() => handleToggle('emailNotifications')} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
              <div>
                <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>SMS Notifications</p>
                <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Receive updates via SMS</p>
              </div>
              <ToggleSwitch checked={settings.smsNotifications} onChange={() => handleToggle('smsNotifications')} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
              <div>
                <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>Order Updates</p>
                <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Get notified about order status</p>
              </div>
              <ToggleSwitch checked={settings.orderUpdates} onChange={() => handleToggle('orderUpdates')} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
              <div>
                <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>Marketing Emails</p>
                <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Receive promotional content</p>
              </div>
              <ToggleSwitch checked={settings.marketingEmails} onChange={() => handleToggle('marketingEmails')} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdLock size={24} />Security</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, marginBottom: '1rem' }}>
            <div>
              <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>Two-Factor Authentication</p>
              <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Add an extra layer of security</p>
            </div>
            <ToggleSwitch checked={settings.twoFactorAuth} onChange={() => handleToggle('twoFactorAuth')} />
          </div>
          <button onClick={() => alert('Change password')} style={{ width: '100%', padding: '0.75rem', backgroundColor: AppColors.backgroundDark, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}>Change Password</button>
        </div>

        <button onClick={handleSubmit} style={{ width: '100%', backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdSave size={20} />Save Settings</button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;

