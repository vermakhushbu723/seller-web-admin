import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdCheckCircle, MdError, MdUpload } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const GstPanSetupPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    panNumber: 'ABCDE1234F',
    gstNumber: '29ABCDE1234F1Z5',
    panVerified: true,
    gstVerified: false,
  });

  const handleSubmit = (e) => { e.preventDefault(); alert('GST/PAN details updated!'); navigate('/profile'); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/profile')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>GST & PAN Setup</h1>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <div style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>ℹ️ GST and PAN details are required for tax compliance and payment processing. Please ensure the information is accurate.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>PAN Details</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>PAN Number *</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" value={formData.panNumber} onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())} placeholder="ABCDE1234F" maxLength="10" required style={{ width: '100%', padding: '0.75rem', paddingRight: '3rem', border: `1px solid ${formData.panVerified ? AppColors.success : AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', fontFamily: 'monospace', textTransform: 'uppercase' }} />
                  {formData.panVerified && (
                    <MdCheckCircle size={24} color={AppColors.success} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  )}
                </div>
                {formData.panVerified && (
                  <p style={{ fontSize: '0.875rem', color: AppColors.success, margin: '0.5rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdCheckCircle size={16} />Verified</p>
                )}
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Upload PAN Card</label>
                <div style={{ border: `2px dashed ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, padding: '2rem', textAlign: 'center', cursor: 'pointer' }}>
                  <MdUpload size={48} color={AppColors.textSecondary} style={{ margin: '0 auto 1rem' }} />
                  <p style={{ color: AppColors.textSecondary, margin: 0 }}>Click to upload or drag and drop</p>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0.5rem 0 0 0' }}>PDF, JPG or PNG (Max 5MB)</p>
                </div>
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${AppColors.divider}`, paddingTop: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>GST Details</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>GST Number</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" value={formData.gstNumber} onChange={(e) => handleChange('gstNumber', e.target.value.toUpperCase())} placeholder="29ABCDE1234F1Z5" maxLength="15" style={{ width: '100%', padding: '0.75rem', paddingRight: '3rem', border: `1px solid ${formData.gstVerified ? AppColors.success : AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', fontFamily: 'monospace', textTransform: 'uppercase' }} />
                  {!formData.gstVerified && formData.gstNumber && (
                    <MdError size={24} color={AppColors.warning} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  )}
                </div>
                {!formData.gstVerified && formData.gstNumber && (
                  <p style={{ fontSize: '0.875rem', color: AppColors.warning, margin: '0.5rem 0 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdError size={16} />Pending Verification</p>
                )}
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Upload GST Certificate</label>
                <div style={{ border: `2px dashed ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, padding: '2rem', textAlign: 'center', cursor: 'pointer' }}>
                  <MdUpload size={48} color={AppColors.textSecondary} style={{ margin: '0 auto 1rem' }} />
                  <p style={{ color: AppColors.textSecondary, margin: 0 }}>Click to upload or drag and drop</p>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0.5rem 0 0 0' }}>PDF, JPG or PNG (Max 5MB)</p>
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

export default GstPanSetupPage;

