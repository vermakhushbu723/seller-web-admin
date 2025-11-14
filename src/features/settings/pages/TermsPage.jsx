import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const TermsPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const sections = [
    { title: 'Acceptance of Terms', content: 'By accessing and using this seller platform, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our services.' },
    { title: 'Seller Registration', content: 'To become a seller on our platform, you must complete the registration process and provide accurate information. You are responsible for maintaining the confidentiality of your account credentials.' },
    { title: 'Product Listings', content: 'Sellers are responsible for the accuracy of product information, pricing, and availability. All products must comply with applicable laws and our platform policies. We reserve the right to remove listings that violate our guidelines.' },
    { title: 'Fees and Payments', content: 'Sellers agree to pay the applicable platform fees and transaction charges. Payments for orders will be processed according to our payment schedule, minus any applicable fees or charges.' },
    { title: 'Order Fulfillment', content: 'Sellers must fulfill orders within the specified timeframe and maintain adequate inventory. Failure to fulfill orders may result in account suspension or termination.' },
    { title: 'Prohibited Activities', content: 'Sellers must not engage in fraudulent activities, sell counterfeit goods, manipulate reviews, or violate intellectual property rights. Violations will result in immediate account termination.' },
    { title: 'Termination', content: 'We reserve the right to suspend or terminate seller accounts at our discretion for violations of these terms or for any other reason. Upon termination, pending payments will be processed according to our policies.' },
  ];

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/settings')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Terms & Conditions</h1>
      </div>

      <div style={{ maxWidth: '900px' }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
          <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: '0 0 1rem 0' }}>Last Updated: January 2024</p>
          <p style={{ lineHeight: 1.6, margin: 0 }}>These terms and conditions outline the rules and regulations for sellers using our platform. Please read these terms carefully before using our services.</p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: AppColors.primary }}>{idx + 1}. {section.title}</h3>
            <p style={{ lineHeight: 1.6, color: AppColors.textPrimary, margin: 0 }}>{section.content}</p>
          </div>
        ))}

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Questions</h3>
          <p style={{ lineHeight: 1.6, margin: 0 }}>If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:legal@example.com" style={{ color: AppColors.primary, textDecoration: 'none' }}>legal@example.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

