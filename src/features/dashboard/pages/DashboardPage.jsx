import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdPerson,
  MdBusiness,
  MdAccountBalance,
  MdAddCircle,
  MdInventory,
  MdShoppingBag,
  MdCurrencyRupee,
  MdTrendingUp,
} from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { AppRoutes } from '../../../core/constants/routes.js';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickActions = [
    {
      icon: MdPerson,
      title: 'Profile',
      subtitle: 'View & Edit',
      color: AppColors.primary,
      route: AppRoutes.profile,
    },
    {
      icon: MdBusiness,
      title: 'Business',
      subtitle: 'Setup',
      color: AppColors.secondary,
      route: AppRoutes.businessProfile,
    },
    {
      icon: MdAccountBalance,
      title: 'Bank Details',
      subtitle: 'Manage',
      color: AppColors.success,
      route: AppRoutes.bankDetails,
    },
    {
      icon: MdAddCircle,
      title: 'Add Product',
      subtitle: 'New Item',
      color: AppColors.info,
      route: AppRoutes.addProduct,
    },
  ];

  const stats = [
    { icon: MdInventory, label: 'Products', value: '45', color: AppColors.primary },
    { icon: MdShoppingBag, label: 'Orders', value: '128', color: AppColors.secondary },
    { icon: MdCurrencyRupee, label: 'Earnings', value: '₹45.6K', color: AppColors.success },
    { icon: MdTrendingUp, label: 'Growth', value: '+12%', color: AppColors.warning },
  ];

  return (
    <div>
      {/* Welcome Card */}
      <div
        style={{
          width: '100%',
          padding: isMobile ? AppDimensions.paddingL : AppDimensions.paddingXL,
          background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
          borderRadius: AppDimensions.radiusL,
          boxShadow: `0 5px 15px ${AppColors.primary}40`,
          marginBottom: AppDimensions.marginXL,
        }}
      >
        <h2
          style={{
            color: 'white',
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 700,
            margin: '0 0 0.5rem 0',
          }}
        >
          👋 Welcome Back!
        </h2>
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: isMobile ? '0.875rem' : '1rem',
            margin: 0,
          }}
        >
          Manage your business with ease
        </p>
      </div>

      {/* Quick Actions Section */}
      <h3
        style={{
          fontSize: isMobile ? '1.25rem' : '1.5rem',
          fontWeight: 700,
          color: AppColors.textPrimary,
          marginBottom: AppDimensions.marginM,
        }}
      >
        Quick Actions
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginXXL,
        }}
      >
        {quickActions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <div
              key={index}
              onClick={() => navigate(action.route)}
              style={{
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                background: AppColors.surface,
                borderRadius: AppDimensions.radiusM,
                border: `1px solid ${action.color}40`,
                boxShadow: `0 2px 8px ${AppColors.grey300}80`,
                cursor: 'pointer',
                transition: 'all 200ms',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 4px 12px ${action.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 2px 8px ${AppColors.grey300}80`;
              }}
            >
              <div
                style={{
                  width: isMobile ? '40px' : '48px',
                  height: isMobile ? '40px' : '48px',
                  margin: '0 auto 0.5rem',
                  background: `${action.color}15`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconComponent size={isMobile ? 20 : 24} style={{ color: action.color }} />
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '0.813rem' : '0.938rem',
                  fontWeight: 700,
                  color: AppColors.textPrimary,
                  margin: '0 0 0.25rem 0',
                }}
              >
                {action.title}
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '0.688rem' : '0.75rem',
                  color: AppColors.textSecondary,
                  margin: 0,
                }}
              >
                {action.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Overview Section */}
      <h3
        style={{
          fontSize: isMobile ? '1.25rem' : '1.5rem',
          fontWeight: 700,
          color: AppColors.textPrimary,
          marginBottom: AppDimensions.marginM,
        }}
      >
        Overview
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: AppDimensions.marginM,
        }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              style={{
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                background: AppColors.surface,
                borderRadius: AppDimensions.radiusM,
                boxShadow: `0 2px 8px ${AppColors.grey300}80`,
                textAlign: 'center',
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 4px 12px ${AppColors.grey400}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 2px 8px ${AppColors.grey300}80`;
              }}
            >
              <IconComponent
                size={isMobile ? 24 : 28}
                style={{ color: stat.color, marginBottom: '0.5rem' }}
              />
              <h2
                style={{
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: 700,
                  color: stat.color,
                  margin: '0 0 0.25rem 0',
                }}
              >
                {stat.value}
              </h2>
              <p
                style={{
                  fontSize: isMobile ? '0.75rem' : '0.813rem',
                  color: AppColors.textSecondary,
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
