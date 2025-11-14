import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock, MdBusiness } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '', businessName: '', agreeToTerms: false });

  const handleSubmit = (e) => { e.preventDefault(); if (formData.password !== formData.confirmPassword) { alert('Passwords do not match'); return; } if (!formData.agreeToTerms) { alert('Please agree to terms and conditions'); return; } alert('Account created! Please verify your email.'); navigate('/login'); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL, backgroundColor: AppColors.background }}>
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusXL, padding: isMobile ? AppDimensions.paddingL : '3rem', boxShadow: `0 8px 24px ${AppColors.shadow}` }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: AppColors.primary, margin: '0 0 0.5rem 0' }}>Create Account</h1>
          <p style={{ color: AppColors.textSecondary, margin: 0 }}>Start selling with us today</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Full Name *</label>
            <div style={{ position: 'relative' }}>
              <MdPerson size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Doe" required style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Business Name *</label>
            <div style={{ position: 'relative' }}>
              <MdBusiness size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" value={formData.businessName} onChange={(e) => handleChange('businessName', e.target.value)} placeholder="Your Business" required style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Email *</label>
            <div style={{ position: 'relative' }}>
              <MdEmail size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="you@example.com" required style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Password *</label>
            <div style={{ position: 'relative' }}>
              <MdLock size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" value={formData.password} onChange={(e) => handleChange('password', e.target.value)} placeholder="••••••••" required minLength="8" style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>Confirm Password *</label>
            <div style={{ position: 'relative' }}>
              <MdLock size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" value={formData.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} placeholder="••••••••" required minLength="8" style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={formData.agreeToTerms} onChange={(e) => handleChange('agreeToTerms', e.target.checked)} required style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <span style={{ fontSize: '0.875rem' }}>I agree to the <a href="/settings/terms" style={{ color: AppColors.primary, textDecoration: 'none' }}>Terms & Conditions</a></span>
            </label>
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.875rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '1rem' }}>Create Account</button>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Already have an account? <a href="/login" style={{ color: AppColors.primary, textDecoration: 'none', fontWeight: '600' }}>Sign in</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

