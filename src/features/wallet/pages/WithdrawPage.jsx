import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdAccountBalance, MdAttachMoney } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const WithdrawPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [amount, setAmount] = useState('');
  const [bankAccount, setBankAccount] = useState('****1234');

  const availableBalance = 45000;
  const minWithdrawal = 1000;

  const handleSubmit = (e) => { e.preventDefault(); if (parseFloat(amount) < minWithdrawal) { alert(`Minimum withdrawal amount is ₹${minWithdrawal}`); return; } if (parseFloat(amount) > availableBalance) { alert('Insufficient balance'); return; } alert('Withdrawal request submitted!'); navigate('/wallet'); };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/wallet')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Withdraw Funds</h1>
      </div>

      <div style={{ maxWidth: '600px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MdAttachMoney size={32} color={AppColors.success} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Available Balance</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: AppColors.success, margin: 0 }}>₹{availableBalance.toLocaleString()}</p>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Minimum withdrawal: ₹{minWithdrawal.toLocaleString()}</p>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Withdrawal Amount</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: AppColors.textSecondary, fontSize: '1.25rem' }}>₹</span>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" min={minWithdrawal} max={availableBalance} required style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1.125rem', fontWeight: '600' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {[1000, 5000, 10000, 25000].map(preset => (
                  <button key={preset} type="button" onClick={() => setAmount(preset.toString())} style={{ padding: '0.5rem 1rem', backgroundColor: AppColors.backgroundDark, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem' }}>₹{preset.toLocaleString()}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Bank Account</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
                <MdAccountBalance size={24} color={AppColors.primary} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: '600', margin: 0 }}>HDFC Bank</p>
                  <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>Account ending in {bankAccount}</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.5rem 0' }}>Processing Time</p>
              <p style={{ fontWeight: '600', margin: 0 }}>3-5 business days</p>
            </div>

            <button type="submit" style={{ width: '100%', backgroundColor: AppColors.primary, color: AppColors.surface, padding: '1rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Request Withdrawal</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;

