import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdAccountBalanceWallet,
  MdTrendingUp,
  MdTrendingDown,
  MdCurrencyRupee,
  MdHistory,
  MdAccountBalance,
  MdPayment,
} from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { AppRoutes } from '../../../core/constants/routes.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const WalletPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  // Mock wallet data
  const walletBalance = '₹45,678';
  const pendingSettlements = '₹12,340';
  const totalEarnings = '₹1,23,456';

  // Recent transactions (customer payments)
  const recentTransactions = [
    {
      id: 'TXN-001',
      orderId: 'ORD-001',
      customer: 'Amit Kumar',
      vendor: 'Tech Solutions',
      amount: '₹15,500',
      type: 'credit',
      status: 'Completed',
      date: '2024-01-15',
      settlementStatus: 'Settled',
    },
    {
      id: 'TXN-002',
      orderId: 'ORD-002',
      customer: 'Priya Sharma',
      vendor: 'Fashion Hub',
      amount: '₹8,900',
      type: 'credit',
      status: 'Pending',
      date: '2024-01-16',
      settlementStatus: 'Pending',
    },
    {
      id: 'TXN-003',
      orderId: 'ORD-003',
      customer: 'Rahul Verma',
      vendor: 'Electronics World',
      amount: '₹45,000',
      type: 'credit',
      status: 'Completed',
      date: '2024-01-16',
      settlementStatus: 'Settled',
    },
  ];

  // Vendor settlement data
  const vendorSettlements = [
    {
      vendor: 'Tech Solutions',
      totalSales: '₹45,600',
      platformFee: '₹2,280',
      netAmount: '₹43,320',
      status: 'Settled',
      date: '2024-01-15',
    },
    {
      vendor: 'Fashion Hub',
      totalSales: '₹28,900',
      platformFee: '₹1,445',
      netAmount: '₹27,455',
      status: 'Pending',
      date: '2024-01-16',
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Completed: AppColors.success,
      Pending: AppColors.warning,
      Failed: AppColors.error,
      Settled: AppColors.success,
    };
    return colors[status] || AppColors.textSecondary;
  };

  const StatCard = ({ icon: Icon, label, value, color, action }) => (
    <div
      style={{
        padding: isMobile ? '1rem' : '1.5rem',
        backgroundColor: AppColors.surface,
        borderRadius: AppDimensions.radiusL,
        boxShadow: `0 2px 8px ${AppColors.shadow}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            padding: '0.75rem',
            backgroundColor: `${color}20`,
            borderRadius: AppDimensions.radiusM,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={24} color={color} />
        </div>
        {action && (
          <button
            onClick={action.onClick}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: color,
              color: 'white',
              border: 'none',
              borderRadius: AppDimensions.radiusS,
              fontSize: '0.813rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            {action.label}
          </button>
        )}
      </div>
      <p
        style={{
          fontSize: '0.875rem',
          color: AppColors.textSecondary,
          margin: '0 0 0.5rem 0',
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: isMobile ? '1.5rem' : '2rem',
          fontWeight: 'bold',
          color: AppColors.textPrimary,
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      {/* Header */}
      <div style={{ marginBottom: AppDimensions.marginL }}>
        <h1
          style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            color: AppColors.textPrimary,
            margin: 0,
          }}
        >
          Wallet & Payment Management
        </h1>
        <p
          style={{
            color: AppColors.textSecondary,
            fontSize: '0.875rem',
            margin: '0.5rem 0 0 0',
          }}
        >
          Track customer payments and vendor settlements
        </p>
      </div>

      {/* Wallet Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <StatCard
          icon={MdAccountBalanceWallet}
          label="Available Balance"
          value={walletBalance}
          color={AppColors.primary}
          action={{
            label: 'Withdraw',
            onClick: () => navigate(AppRoutes.withdraw),
          }}
        />
        <StatCard
          icon={MdCurrencyRupee}
          label="Pending Settlements"
          value={pendingSettlements}
          color={AppColors.warning}
        />
        <StatCard
          icon={MdTrendingUp}
          label="Total Earnings"
          value={totalEarnings}
          color={AppColors.success}
        />
      </div>

      {/* Quick Actions */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <button
          onClick={() => navigate(AppRoutes.transactionHistory)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem',
            backgroundColor: AppColors.surface,
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            color: AppColors.textPrimary,
          }}
        >
          <MdHistory size={24} />
          Transaction History
        </button>
        <button
          onClick={() => navigate(AppRoutes.bankDetails)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem',
            backgroundColor: AppColors.surface,
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            color: AppColors.textPrimary,
          }}
        >
          <MdAccountBalance size={24} />
          Bank Details
        </button>
        <button
          onClick={() => navigate(AppRoutes.withdraw)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem',
            backgroundColor: AppColors.primary,
            border: 'none',
            borderRadius: AppDimensions.radiusM,
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            color: 'white',
          }}
        >
          <MdPayment size={24} />
          Withdraw Funds
        </button>
      </div>

      {/* Recent Customer Payments */}
      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusL,
          padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '1.125rem' : '1.25rem',
            fontWeight: '600',
            color: AppColors.textPrimary,
            margin: `0 0 ${AppDimensions.marginM} 0`,
          }}
        >
          Recent Customer Payments
        </h2>

        <div style={{ overflowX: 'auto' }}>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentTransactions.map((txn) => (
                <div
                  key={txn.id}
                  style={{
                    padding: '1rem',
                    backgroundColor: AppColors.backgroundDark,
                    borderRadius: AppDimensions.radiusM,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span style={{ fontWeight: '600', color: AppColors.primary }}>
                      {txn.id}
                    </span>
                    <span style={{ fontWeight: '600', color: AppColors.success }}>
                      {txn.amount}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: AppColors.textSecondary }}>
                    <div>{txn.customer}</div>
                    <div>Vendor: {txn.vendor}</div>
                    <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                      <span
                        style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: `${getStatusColor(txn.status)}20`,
                          color: getStatusColor(txn.status),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.75rem',
                        }}
                      >
                        {txn.status}
                      </span>
                      <span
                        style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: `${getStatusColor(txn.settlementStatus)}20`,
                          color: getStatusColor(txn.settlementStatus),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.75rem',
                        }}
                      >
                        {txn.settlementStatus}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: AppColors.backgroundDark }}>
                  <th style={tableHeaderStyle}>Transaction ID</th>
                  <th style={tableHeaderStyle}>Order ID</th>
                  <th style={tableHeaderStyle}>Customer</th>
                  <th style={tableHeaderStyle}>Vendor</th>
                  <th style={tableHeaderStyle}>Amount</th>
                  <th style={tableHeaderStyle}>Payment Status</th>
                  <th style={tableHeaderStyle}>Settlement</th>
                  <th style={tableHeaderStyle}>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((txn) => (
                  <tr key={txn.id} style={{ borderBottom: `1px solid ${AppColors.divider}` }}>
                    <td style={tableCellStyle}>
                      <span style={{ fontWeight: '600', color: AppColors.primary }}>
                        {txn.id}
                      </span>
                    </td>
                    <td style={tableCellStyle}>{txn.orderId}</td>
                    <td style={tableCellStyle}>{txn.customer}</td>
                    <td style={tableCellStyle}>{txn.vendor}</td>
                    <td style={tableCellStyle}>
                      <span style={{ fontWeight: '600', color: AppColors.success }}>
                        {txn.amount}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: `${getStatusColor(txn.status)}20`,
                          color: getStatusColor(txn.status),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.813rem',
                          fontWeight: '500',
                        }}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: `${getStatusColor(txn.settlementStatus)}20`,
                          color: getStatusColor(txn.settlementStatus),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.813rem',
                          fontWeight: '500',
                        }}
                      >
                        {txn.settlementStatus}
                      </span>
                    </td>
                    <td style={tableCellStyle}>{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Vendor Settlements */}
      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusL,
          padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '1.125rem' : '1.25rem',
            fontWeight: '600',
            color: AppColors.textPrimary,
            margin: `0 0 ${AppDimensions.marginM} 0`,
          }}
        >
          Vendor Settlements
        </h2>

        <div style={{ overflowX: 'auto' }}>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {vendorSettlements.map((settlement, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    backgroundColor: AppColors.backgroundDark,
                    borderRadius: AppDimensions.radiusM,
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    {settlement.vendor}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: AppColors.textSecondary,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.5rem',
                    }}
                  >
                    <div>Sales: {settlement.totalSales}</div>
                    <div>Fee: {settlement.platformFee}</div>
                    <div>
                      <span style={{ fontWeight: '600', color: AppColors.success }}>
                        Net: {settlement.netAmount}
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: `${getStatusColor(settlement.status)}20`,
                          color: getStatusColor(settlement.status),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.75rem',
                        }}
                      >
                        {settlement.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: AppColors.backgroundDark }}>
                  <th style={tableHeaderStyle}>Vendor</th>
                  <th style={tableHeaderStyle}>Total Sales</th>
                  <th style={tableHeaderStyle}>Platform Fee (5%)</th>
                  <th style={tableHeaderStyle}>Net Amount</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={tableHeaderStyle}>Date</th>
                </tr>
              </thead>
              <tbody>
                {vendorSettlements.map((settlement, index) => (
                  <tr key={index} style={{ borderBottom: `1px solid ${AppColors.divider}` }}>
                    <td style={tableCellStyle}>
                      <span style={{ fontWeight: '600' }}>{settlement.vendor}</span>
                    </td>
                    <td style={tableCellStyle}>{settlement.totalSales}</td>
                    <td style={tableCellStyle}>{settlement.platformFee}</td>
                    <td style={tableCellStyle}>
                      <span style={{ fontWeight: '600', color: AppColors.success }}>
                        {settlement.netAmount}
                      </span>
                    </td>
                    <td style={tableCellStyle}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: `${getStatusColor(settlement.status)}20`,
                          color: getStatusColor(settlement.status),
                          borderRadius: AppDimensions.radiusS,
                          fontSize: '0.813rem',
                          fontWeight: '500',
                        }}
                      >
                        {settlement.status}
                      </span>
                    </td>
                    <td style={tableCellStyle}>{settlement.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '1rem',
  textAlign: 'left',
  fontSize: '0.813rem',
  fontWeight: '600',
  color: AppColors.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const tableCellStyle = {
  padding: '1rem',
  fontSize: '0.875rem',
  color: AppColors.textSecondary,
};

export default WalletPage;

