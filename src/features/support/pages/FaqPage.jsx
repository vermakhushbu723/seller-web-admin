import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const FaqPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [expanded, setExpanded] = useState({});

  const faqs = [
    { category: 'Getting Started', questions: [
      { q: 'How do I register as a seller?', a: 'Click on the Sign Up button, fill in your business details, provide the required documents, and submit for verification. You\'ll receive approval within 24-48 hours.' },
      { q: 'What documents do I need to start selling?', a: 'You need a valid PAN card, GST certificate (if applicable), bank account details, and business registration proof.' },
    ]},
    { category: 'Product Management', questions: [
      { q: 'How do I add products?', a: 'Go to Products > Add Product, fill in the product details including images, pricing, and inventory, then click Save.' },
      { q: 'Can I bulk upload products?', a: 'Yes, you can bulk upload products using our CSV template. Download the template from the Products page and upload your file.' },
    ]},
    { category: 'Orders & Shipping', questions: [
      { q: 'How do I manage orders?', a: 'All orders appear in the Orders page. You can update order status, add tracking numbers, and manage fulfillment from there.' },
      { q: 'What happens if I cancel an order?', a: 'If you cancel an order, the customer will be notified and refunded. Repeated cancellations may affect your seller rating.' },
    ]},
    { category: 'Payments', questions: [
      { q: 'When will I receive payment?', a: 'Payments are processed within 3-5 business days after order delivery. You can track all payments in the Wallet section.' },
      { q: 'How do I withdraw my earnings?', a: 'Go to Wallet > Withdraw, enter the amount you want to withdraw, and the funds will be transferred to your registered bank account.' },
    ]},
  ];

  const toggleExpand = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setExpanded({...expanded, [key]: !expanded[key]});
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/support')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <div>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Frequently Asked Questions</h1>
          <p style={{ color: AppColors.textSecondary, margin: 0 }}>Find answers to common questions</p>
        </div>
      </div>

      <div style={{ maxWidth: '900px' }}>
        {faqs.map((category, catIdx) => (
          <div key={catIdx} style={{ marginBottom: AppDimensions.marginL }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: AppColors.primary }}>{category.category}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {category.questions.map((faq, qIdx) => {
                const key = `${catIdx}-${qIdx}`;
                const isExpanded = expanded[key];
                return (
                  <div key={qIdx} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusM, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
                    <div onClick={() => toggleExpand(catIdx, qIdx)} style={{ padding: AppDimensions.paddingM, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>{faq.q}</h3>
                      {isExpanded ? <MdExpandLess size={24} color={AppColors.primary} /> : <MdExpandMore size={24} color={AppColors.textSecondary} />}
                    </div>
                    {isExpanded && (
                      <div style={{ padding: `0 ${AppDimensions.paddingM} ${AppDimensions.paddingM}`, borderTop: `1px solid ${AppColors.divider}`, paddingTop: AppDimensions.paddingM }}>
                        <p style={{ lineHeight: 1.6, color: AppColors.textPrimary, margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Still have questions?</h3>
          <p style={{ color: AppColors.textSecondary, marginBottom: '1rem' }}>Contact our support team for personalized assistance</p>
          <button onClick={() => navigate('/support/chat')} style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 2rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Start Chat</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

