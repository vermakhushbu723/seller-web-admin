import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdAccountBalance, MdEdit, MdDelete, MdAdd } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const BankDetailsPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ bankName: '', accountNumber: '', ifsc: '', accountHolder: '' });

  const accounts = [
    { id: 1, bankName: 'HDFC Bank', accountNumber: '****1234', ifsc: 'HDFC0001234', accountHolder: 'John Doe', primary: true },
    { id: 2, bankName: 'ICICI Bank', accountNumber: '****5678', ifsc: 'ICIC0005678', accountHolder: 'John Doe', primary: false },
  ];

  const handleSubmit = (e) => { e.preventDefault(); alert('Bank account added!'); setShowForm(false); setFormData({ bankName: '', accountNumber: '', ifsc: '', accountHolder: '' }); };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: AppDimensions.marginL }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/wallet')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Bank Details</h1>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdAdd size={20} />Add Account</button>
      </div>

      {showForm && (
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL, maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Add New Bank Account</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Bank Name</label>
              <input type="text" value={formData.bankName} onChange={(e) => setFormData({...formData, bankName: e.target.value})} placeholder="e.g., HDFC Bank" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Account Holder Name</label>
              <input type="text" value={formData.accountHolder} onChange={(e) => setFormData({...formData, accountHolder: e.target.value})} placeholder="Full name as per bank" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Account Number</label>
              <input type="text" value={formData.accountNumber} onChange={(e) => setFormData({...formData, accountNumber: e.target.value})} placeholder="Enter account number" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>IFSC Code</label>
              <input type="text" value={formData.ifsc} onChange={(e) => setFormData({...formData, ifsc: e.target.value})} placeholder="11-digit IFSC code" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" style={{ flex: 1, backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Add Account</button>
              <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, backgroundColor: AppColors.backgroundDark, color: AppColors.textPrimary, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.divider}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(400px, 1fr))', gap: AppDimensions.marginL }}>
        {accounts.map(account => (
          <div key={account.id} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, position: 'relative' }}>
            {account.primary && (
              <span style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.25rem 0.75rem', backgroundColor: `${AppColors.primary}20`, color: AppColors.primary, borderRadius: AppDimensions.radiusM, fontSize: '0.75rem', fontWeight: '600' }}>Primary</span>
            )}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MdAccountBalance size={24} color={AppColors.primary} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.25rem 0' }}>{account.bankName}</h3>
                <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>Account ending in {account.accountNumber}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div><p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Account Holder</p><p style={{ fontWeight: '600', margin: 0 }}>{account.accountHolder}</p></div>
              <div><p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>IFSC Code</p><p style={{ fontWeight: '600', fontFamily: 'monospace', margin: 0 }}>{account.ifsc}</p></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ flex: 1, padding: '0.5rem', backgroundColor: AppColors.backgroundDark, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem' }}><MdEdit size={16} />Edit</button>
              <button disabled={account.primary} style={{ flex: 1, padding: '0.5rem', backgroundColor: account.primary ? AppColors.backgroundDark : `${AppColors.error}20`, color: account.primary ? AppColors.textSecondary : AppColors.error, border: `1px solid ${account.primary ? AppColors.divider : AppColors.error}`, borderRadius: AppDimensions.radiusM, cursor: account.primary ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: account.primary ? 0.5 : 1 }}><MdDelete size={16} />Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankDetailsPage;

