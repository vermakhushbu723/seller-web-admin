import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSend, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); setFormData({ name: '', email: '', subject: '', message: '' }); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/settings')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Contact Us</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: AppDimensions.marginL, maxWidth: '1200px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name *</label>
              <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email *</label>
              <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subject *</label>
              <input type="text" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message *</label>
              <textarea value={formData.message} onChange={(e) => handleChange('message', e.target.value)} rows="6" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', resize: 'vertical' }} />
            </div>
            <button type="submit" style={{ width: '100%', backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdSend size={20} />Send Message</button>
          </form>
        </div>

        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdEmail size={24} color={AppColors.primary} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Email</p>
                  <p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>support@example.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdPhone size={24} color={AppColors.success} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Phone</p>
                  <p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>+91 98765 43210</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${AppColors.error}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MdLocationOn size={24} color={AppColors.error} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Address</p>
                  <p style={{ fontWeight: '600', fontSize: '1.125rem', margin: 0 }}>123 Business Park, Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Business Hours</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Monday - Friday</span><span style={{ fontWeight: '600' }}>9:00 AM - 6:00 PM</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Saturday</span><span style={{ fontWeight: '600' }}>10:00 AM - 4:00 PM</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Sunday</span><span style={{ fontWeight: '600' }}>Closed</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

