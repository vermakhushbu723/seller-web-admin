import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdPhone, MdLocationOn, MdEdit, MdBusiness, MdDescription } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    address: '123 Street, Bangalore, Karnataka - 560001',
    avatar: 'JD',
    joinDate: 'January 2024',
    totalSales: '₹1,24,500',
    totalOrders: 145,
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: AppDimensions.marginL }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>My Profile</h1>
        <button onClick={() => navigate('/profile/edit')} style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdEdit size={20} />Edit Profile</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 2fr', gap: AppDimensions.marginL }}>
        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: AppColors.primary, color: AppColors.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>{profile.avatar}</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>{profile.name}</h2>
            <p style={{ color: AppColors.textSecondary, margin: '0 0 1.5rem 0' }}>Joined {profile.joinDate}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Total Sales</p><p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.success, margin: 0 }}>{profile.totalSales}</p></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Orders</p><p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.primary, margin: 0 }}>{profile.totalOrders}</p></div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Personal Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MdPerson size={24} color={AppColors.primary} /></div><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Full Name</p><p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>{profile.name}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.info}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MdEmail size={24} color={AppColors.info} /></div><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Email Address</p><p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>{profile.email}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MdPhone size={24} color={AppColors.success} /></div><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Phone Number</p><p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>{profile.phone}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.error}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MdLocationOn size={24} color={AppColors.error} /></div><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Address</p><p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>{profile.address}</p></div></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: AppDimensions.marginL }}>
            <div onClick={() => navigate('/profile/business')} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: AppDimensions.radiusL, backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}><MdBusiness size={28} color={AppColors.primary} /></div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Business Profile</h4>
              <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>Manage your business information</p>
            </div>
            <div onClick={() => navigate('/profile/gst-pan')} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: AppDimensions.radiusL, backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}><MdDescription size={28} color={AppColors.success} /></div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>GST & PAN</h4>
              <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>Tax compliance documents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

