import React, { useState } from 'react';
import { MdArrowBack, MdArrowUpward, MdArrowDownward, MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const TransactionHistoryPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const transactions = [
    { id: 'TXN001', type: 'credit', amount: '₹15,000', description: 'Order Payment', date: '2024-01-20', status: 'Completed' },
    { id: 'TXN002', type: 'debit', amount: '₹5,000', description: 'Withdrawal', date: '2024-01-18', status: 'Completed' },
    { id: 'TXN003', type: 'credit', amount: '₹8,500', description: 'Order Payment', date: '2024-01-15', status: 'Completed' },
    { id: 'TXN004', type: 'debit', amount: '₹3,000', description: 'Platform Fee', date: '2024-01-10', status: 'Completed' },
  ];

  const filtered = transactions.filter(t => (filter === 'all' || t.type === filter) && (search === '' || t.id.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase())));

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/wallet')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Transaction History</h1>
      </div>

      <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <MdSearch size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search transactions..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '0.75rem 1rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', minWidth: isMobile ? '100%' : '150px' }}>
            <option value="all">All Types</option>
            <option value="credit">Credits</option>
            <option value="debit">Debits</option>
          </select>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${AppColors.divider}` }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: AppColors.textSecondary }}>ID</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: AppColors.textSecondary }}>Type</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: AppColors.textSecondary }}>Description</th>
                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: AppColors.textSecondary }}>Amount</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: AppColors.textSecondary }}>Date</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: AppColors.textSecondary }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(txn => (
                <tr key={txn.id} style={{ borderBottom: `1px solid ${AppColors.divider}` }}>
                  <td style={{ padding: '1rem', color: AppColors.textPrimary }}>{txn.id}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: txn.type === 'credit' ? AppColors.success : AppColors.error }}>
                      {txn.type === 'credit' ? <MdArrowDownward size={18} /> : <MdArrowUpward size={18} />}
                      {txn.type === 'credit' ? 'Credit' : 'Debit'}
                    </div>
                  </td>
                  <td style={{ padding: '1rem', color: AppColors.textPrimary }}>{txn.description}</td>
                  <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: txn.type === 'credit' ? AppColors.success : AppColors.error }}>{txn.amount}</td>
                  <td style={{ padding: '1rem', color: AppColors.textSecondary }}>{txn.date}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600' }}>{txn.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;

