import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdBusiness } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const BusinessProfilePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    businessName: 'Tech Store',
    businessType: 'retailer',
    registrationNumber: 'REG123456789',
    businessAddress: '456 Business Park',
    businessCity: 'Bangalore',
    businessState: 'Karnataka',
    businessPincode: '560001',
    businessEmail: 'business@techstore.com',
    businessPhone: '+91 98765 00000',
  });

  const handleSubmit = (e) => { e.preventDefault(); alert('Business profile updated!'); navigate('/profile'); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/profile')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Business Profile</h1>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdBusiness size={24} />Business Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Business Name *</label>
                  <input type="text" value={formData.businessName} onChange={(e) => handleChange('businessName', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Business Type *</label>
                  <select value={formData.businessType} onChange={(e) => handleChange('businessType', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }}>
                    <option value="retailer">Retailer</option>
                    <option value="wholesaler">Wholesaler</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="distributor">Distributor</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Registration Number *</label>
                <input type="text" value={formData.registrationNumber} onChange={(e) => handleChange('registrationNumber', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Business Email *</label>
                  <input type="email" value={formData.businessEmail} onChange={(e) => handleChange('businessEmail', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Business Phone *</label>
                  <input type="tel" value={formData.businessPhone} onChange={(e) => handleChange('businessPhone', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Business Address</h4>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Street Address *</label>
                <input type="text" value={formData.businessAddress} onChange={(e) => handleChange('businessAddress', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>City *</label>
                  <input type="text" value={formData.businessCity} onChange={(e) => handleChange('businessCity', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>State *</label>
                  <input type="text" value={formData.businessState} onChange={(e) => handleChange('businessState', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Pincode *</label>
                  <input type="text" value={formData.businessPincode} onChange={(e) => handleChange('businessPincode', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" style={{ flex: 1, backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdSave size={20} />Save Changes</button>
              <button type="button" onClick={() => navigate('/profile')} style={{ flex: 1, backgroundColor: AppColors.backgroundDark, color: AppColors.textPrimary, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.divider}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfilePage;

