import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly to us, including when you create an account, make a purchase, or contact customer support. This includes your name, email address, phone number, payment information, and any other information you choose to provide.' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, communicate with you about products and services, and monitor and analyze trends and usage.' },
    { title: 'Information Sharing', content: 'We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, when required by law, or to protect our rights and safety.' },
    { title: 'Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.' },
    { title: 'Your Rights', content: 'You have the right to access, update, or delete your personal information at any time. You may also object to processing, request data portability, and withdraw consent where applicable. Contact us to exercise these rights.' },
    { title: 'Changes to This Policy', content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.' },
  ];

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/settings')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Privacy Policy</h1>
      </div>

      <div style={{ maxWidth: '900px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: '0 0 1rem 0' }}>Last Updated: January 2024</p>
          <p style={{ lineHeight: 1.6, margin: 0 }}>This Privacy Policy describes how we collect, use, and handle your information when you use our seller platform. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: AppColors.primary }}>{idx + 1}. {section.title}</h3>
            <p style={{ lineHeight: 1.6, color: AppColors.textPrimary, margin: 0 }}>{section.content}</p>
          </div>
        ))}

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Us</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@example.com" style={{ color: AppColors.primary, textDecoration: 'none' }}>privacy@example.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

