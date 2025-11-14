import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdArrowBack } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => navigate('/login'), 3000); };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL, backgroundColor: AppColors.background }}>
      <div style={{ width: '100%', maxWidth: '450px', backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusXL, padding: isMobile ? AppDimensions.paddingL : '3rem', boxShadow: `0 8px 24px ${AppColors.shadow}` }}>
        {!sent ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <MdEmail size={32} color={AppColors.primary} />
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: '0 0 0.5rem 0' }}>Forgot Password?</h1>
              <p style={{ color: AppColors.textSecondary, margin: 0 }}>No worries! Enter your email and we'll send you reset instructions.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <MdEmail size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
              </div>

              <button type="submit" style={{ width: '100%', backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.875rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '1rem' }}>Send Reset Link</button>

              <button type="button" onClick={() => navigate('/login')} style={{ width: '100%', backgroundColor: 'transparent', color: AppColors.primary, padding: '0.875rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.primary}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdArrowBack size={20} />Back to Login</button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '3rem' }}>✓</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: AppColors.success, margin: '0 0 1rem 0' }}>Check Your Email</h2>
            <p style={{ color: AppColors.textSecondary, lineHeight: 1.6, marginBottom: '2rem' }}>We've sent password reset instructions to <strong>{email}</strong>. Please check your inbox and follow the link.</p>
            <button onClick={() => navigate('/login')} style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.875rem 2rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Back to Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

