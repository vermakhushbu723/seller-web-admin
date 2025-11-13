import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdLogin, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useAuth } from '../../../core/context/AuthContext.jsx';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isMobile, isTablet, padding } = useResponsive();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Demo credentials
    if (email === 'admin@seller.com' && password === 'admin123') {
      setTimeout(() => {
        login({ email, name: 'Admin User' });
        navigate('/');
      }, 1000);
    } else {
      setLoading(false);
      setError('Invalid email or password. Use: admin@seller.com / admin123');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 50%, ${AppColors.secondary} 100%)`,
        padding: isMobile ? '1rem' : '1.5rem',
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: AppColors.surface,
          borderRadius: isMobile ? AppDimensions.radiusL : AppDimensions.radiusXL,
          padding: isMobile ? '1rem' : isTablet ? '1.5rem' : '1.75rem',
          boxShadow: AppDimensions.elevationXL,
        }}
      >
        {/* Logo & Title */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '0.75rem' : '1rem' }}>
          <div
            style={{
              width: isMobile ? '48px' : '56px',
              height: isMobile ? '48px' : '56px',
              margin: isMobile ? '0 auto 0.5rem' : '0 auto 0.75rem',
              background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <MdLogin size={isMobile ? 24 : 28} />
          </div>
          <h1
            style={{
              fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
              fontWeight: 700,
              background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.25rem',
            }}
          >
            Seller Admin Panel
          </h1>
          <p style={{ color: AppColors.textSecondary, fontSize: isMobile ? '0.75rem' : '0.813rem' }}>
            Sign in to manage your business
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ marginBottom: isMobile ? '0.75rem' : '0.875rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.25rem',
                fontSize: '0.813rem',
                fontWeight: 600,
                color: AppColors.textPrimary,
              }}
            >
              Email Address
            </label>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MdEmail
                size={20}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  color: AppColors.textSecondary,
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@seller.com"
                required
                style={{
                  width: '100%',
                  padding: isMobile ? '0.625rem 0.75rem 0.625rem 2.5rem' : '0.688rem 0.875rem 0.688rem 2.75rem',
                  border: `2px solid ${AppColors.border}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: isMobile ? '0.875rem' : '0.938rem',
                  outline: 'none',
                  transition: 'all 200ms',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = AppColors.primary;
                  e.target.style.boxShadow = `0 0 0 3px ${AppColors.primary}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = AppColors.border;
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: isMobile ? '0.75rem' : '0.875rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.25rem',
                fontSize: '0.813rem',
                fontWeight: 600,
                color: AppColors.textPrimary,
              }}
            >
              Password
            </label>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MdLock
                size={20}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  color: AppColors.textSecondary,
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: isMobile ? '0.625rem 2.5rem' : '0.688rem 2.75rem',
                  border: `2px solid ${AppColors.border}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: isMobile ? '0.875rem' : '0.938rem',
                  outline: 'none',
                  transition: 'all 200ms',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = AppColors.primary;
                  e.target.style.boxShadow = `0 0 0 3px ${AppColors.primary}15`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = AppColors.border;
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  color: AppColors.textSecondary,
                }}
              >
                {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                padding: isMobile ? '0.625rem' : '0.688rem',
                marginBottom: isMobile ? '0.75rem' : '0.875rem',
                background: `${AppColors.error}15`,
                border: `1px solid ${AppColors.error}`,
                borderRadius: AppDimensions.radiusM,
                color: AppColors.error,
                fontSize: '0.813rem',
              }}
            >
              {error}
            </div>
          )}

          {/* Demo Credentials Info */}
          <div
            style={{
              padding: isMobile ? '0.625rem' : '0.688rem',
              marginBottom: isMobile ? '0.75rem' : '0.875rem',
              background: `${AppColors.info}15`,
              border: `1px solid ${AppColors.info}`,
              borderRadius: AppDimensions.radiusM,
              fontSize: '0.813rem',
            }}
          >
            <strong style={{ color: AppColors.info }}>Demo Credentials:</strong>
            <div style={{ color: AppColors.textSecondary, marginTop: '0.25rem' }}>
              Email: <strong>admin@seller.com</strong>
              <br />
              Password: <strong>admin123</strong>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: isMobile ? '0.688rem' : '0.75rem',
              background: loading
                ? AppColors.grey400
                : `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              color: 'white',
              border: 'none',
              borderRadius: AppDimensions.radiusM,
              fontSize: isMobile ? '0.875rem' : '0.938rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 200ms',
              boxShadow: loading ? 'none' : '0 4px 12px rgba(107, 70, 193, 0.4)',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(107, 70, 193, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(107, 70, 193, 0.4)';
              }
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div
          style={{
            marginTop: isMobile ? '1rem' : '1.25rem',
            paddingTop: isMobile ? '0.75rem' : '0.875rem',
            borderTop: `1px solid ${AppColors.divider}`,
            textAlign: 'center',
            fontSize: '0.75rem',
            color: AppColors.textSecondary,
          }}
        >
          © 2025 Seller Admin Panel. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
