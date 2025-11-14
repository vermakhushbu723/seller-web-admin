import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdPerson } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    address: '123 Street, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
  });

  const handleSubmit = (e) => { e.preventDefault(); alert('Profile updated!'); navigate('/profile'); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/profile')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Edit Profile</h1>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: AppColors.primary, color: AppColors.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', margin: '0 auto 1rem' }}><MdPerson size={48} /></div>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: AppColors.backgroundDark, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem' }}>Change Photo</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name *</label>
                <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address *</label>
                <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone Number *</label>
              <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Address *</label>
              <input type="text" value={formData.address} onChange={(e) => handleChange('address', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>City *</label>
                <input type="text" value={formData.city} onChange={(e) => handleChange('city', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>State *</label>
                <input type="text" value={formData.state} onChange={(e) => handleChange('state', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Pincode *</label>
                <input type="text" value={formData.pincode} onChange={(e) => handleChange('pincode', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
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

export default EditProfilePage;

