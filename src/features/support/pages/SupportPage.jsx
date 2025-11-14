import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdChat, MdHelp, MdEmail, MdPhone } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const SupportPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const supportOptions = [
    { title: 'Live Chat', description: 'Chat with our support team', icon: MdChat, color: AppColors.primary, path: '/support/chat' },
    { title: 'FAQ', description: 'Find answers to common questions', icon: MdHelp, color: AppColors.success, path: '/support/faq' },
    { title: 'Email Support', description: 'support@example.com', icon: MdEmail, color: AppColors.info, action: () => window.location.href = 'mailto:support@example.com' },
    { title: 'Phone Support', description: '+91 98765 43210', icon: MdPhone, color: AppColors.warning, action: () => window.location.href = 'tel:+919876543210' },
  ];

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ marginBottom: AppDimensions.marginL }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: '0 0 0.5rem 0' }}>Support Center</h1>
        <p style={{ color: AppColors.textSecondary, margin: 0 }}>Get help and find answers to your questions</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: AppDimensions.marginL, marginBottom: AppDimensions.marginXL }}>
        {supportOptions.map((option, idx) => {
          const Icon = option.icon;
          return (
            <div key={idx} onClick={option.path ? () => navigate(option.path) : option.action} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, cursor: 'pointer', textAlign: 'center', transition: 'transform 0.2s' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${option.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Icon size={32} color={option.color} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>{option.title}</h3>
              <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>{option.description}</p>
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Recent Tickets</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[{ id: 'TKT001', subject: 'Payment issue', status: 'Open', date: '2024-01-20' }, { id: 'TKT002', subject: 'Product listing help', status: 'Resolved', date: '2024-01-18' }].map(ticket => (
            <div key={ticket.id} style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>{ticket.subject}</p>
                <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Ticket #{ticket.id} - {ticket.date}</p>
              </div>
              <span style={{ padding: '0.25rem 0.75rem', backgroundColor: ticket.status === 'Open' ? `${AppColors.warning}20` : `${AppColors.success}20`, color: ticket.status === 'Open' ? AppColors.warning : AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600' }}>{ticket.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

