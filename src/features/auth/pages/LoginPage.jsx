import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdLogin, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useAuth } from '../../../core/context/AuthContext.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
        padding: '2rem',
      }}
    >
      {/* Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: AppColors.surface,
          borderRadius: AppDimensions.radiusXL,
          padding: AppDimensions.paddingXXL,
          boxShadow: AppDimensions.elevationXL,
        }}
      >
        {/* Logo & Title */}
        <div style={{ textAlign: 'center', marginBottom: AppDimensions.marginXL }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <MdLogin size={40} />
          </div>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
            }}
          >
            Seller Admin Panel
          </h1>
          <p style={{ color: AppColors.textSecondary, fontSize: '1rem' }}>
            Sign in to manage your business
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={{ marginBottom: AppDimensions.marginL }}>
            <label
              style={{
                display: 'block',
                marginBottom: AppDimensions.marginS,
                fontSize: '0.875rem',
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
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  border: `2px solid ${AppColors.border}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '1rem',
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
          <div style={{ marginBottom: AppDimensions.marginL }}>
            <label
              style={{
                display: 'block',
                marginBottom: AppDimensions.marginS,
                fontSize: '0.875rem',
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
                  padding: '0.875rem 3rem 0.875rem 3rem',
                  border: `2px solid ${AppColors.border}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '1rem',
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
                padding: '0.875rem',
                marginBottom: AppDimensions.marginL,
                background: `${AppColors.error}15`,
                border: `1px solid ${AppColors.error}`,
                borderRadius: AppDimensions.radiusM,
                color: AppColors.error,
                fontSize: '0.875rem',
              }}
            >
              {error}
            </div>
          )}

          {/* Demo Credentials Info */}
          <div
            style={{
              padding: '0.875rem',
              marginBottom: AppDimensions.marginL,
              background: `${AppColors.info}15`,
              border: `1px solid ${AppColors.info}`,
              borderRadius: AppDimensions.radiusM,
              fontSize: '0.875rem',
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
              padding: '1rem',
              background: loading
                ? AppColors.grey400
                : `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
              color: 'white',
              border: 'none',
              borderRadius: AppDimensions.radiusM,
              fontSize: '1rem',
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
            marginTop: AppDimensions.marginXL,
            paddingTop: AppDimensions.paddingL,
            borderTop: `1px solid ${AppColors.divider}`,
            textAlign: 'center',
            fontSize: '0.875rem',
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
