import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdWarning, MdDeleteForever } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const DeleteAccountPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [confirmation, setConfirmation] = useState('');
  const [password, setPassword] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    if (confirmation !== 'DELETE') {
      alert('Please type DELETE to confirm');
      return;
    }
    if (window.confirm('Are you absolutely sure? This action cannot be undone!')) {
      alert('Account deletion requested. You will be logged out.');
      navigate('/login');
    }
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/settings')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.error, margin: 0 }}>Delete Account</h1>
      </div>

      <div style={{ maxWidth: '700px' }}>
        <div style={{ backgroundColor: `${AppColors.error}20`, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, marginBottom: AppDimensions.marginL, border: `2px solid ${AppColors.error}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <MdWarning size={32} color={AppColors.error} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: AppColors.error, margin: 0 }}>Warning: This Action is Permanent</h2>
          </div>
          <p style={{ lineHeight: 1.6, margin: 0 }}>Deleting your account will permanently remove all your data from our systems. This action cannot be undone.</p>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>What will be deleted:</h3>
          <ul style={{ lineHeight: 1.8, paddingLeft: '1.5rem', margin: 0, color: AppColors.textPrimary }}>
            <li>Your seller profile and account information</li>
            <li>All product listings and inventory data</li>
            <li>Order history and transaction records</li>
            <li>Payment and bank account details</li>
            <li>Business documents and verification details</li>
            <li>All analytics and sales data</li>
          </ul>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: AppColors.info }}>Before you delete:</h3>
          <ul style={{ lineHeight: 1.8, paddingLeft: '1.5rem', margin: 0, color: AppColors.textPrimary }}>
            <li>Complete all pending orders</li>
            <li>Withdraw any remaining balance from your wallet</li>
            <li>Download any important data or reports you need</li>
            <li>Cancel any active subscriptions or services</li>
          </ul>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Confirm Account Deletion</h3>
          <form onSubmit={handleDelete}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Type DELETE to confirm *</label>
              <input type="text" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} placeholder="Type DELETE in capital letters" required style={{ width: '100%', padding: '0.75rem', border: `2px solid ${AppColors.error}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', fontFamily: 'monospace' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Enter your password *</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm with your password" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" onClick={() => navigate('/settings')} style={{ flex: 1, backgroundColor: AppColors.backgroundDark, color: AppColors.textPrimary, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.divider}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
              <button type="submit" style={{ flex: 1, backgroundColor: AppColors.error, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdDeleteForever size={20} />Delete Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;

