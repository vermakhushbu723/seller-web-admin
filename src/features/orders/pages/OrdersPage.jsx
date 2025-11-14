import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVisibility, MdFilterList, MdSearch } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const OrdersPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPayment, setFilterPayment] = useState('all');

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      customerName: 'Amit Kumar',
      vendor: 'Tech Solutions',
      products: 3,
      totalAmount: '₹15,500',
      paymentStatus: 'Paid',
      orderStatus: 'Completed',
      date: '2024-01-15',
      time: '10:30 AM',
    },
    {
      id: 'ORD-002',
      customerName: 'Priya Sharma',
      vendor: 'Fashion Hub',
      products: 2,
      totalAmount: '₹8,900',
      paymentStatus: 'Pending',
      orderStatus: 'Pending',
      date: '2024-01-16',
      time: '02:15 PM',
    },
    {
      id: 'ORD-003',
      customerName: 'Rahul Verma',
      vendor: 'Electronics World',
      products: 1,
      totalAmount: '₹45,000',
      paymentStatus: 'Paid',
      orderStatus: 'Received',
      date: '2024-01-16',
      time: '04:45 PM',
    },
    {
      id: 'ORD-004',
      customerName: 'Sneha Patel',
      vendor: 'Home Decor Store',
      products: 5,
      totalAmount: '₹12,350',
      paymentStatus: 'Paid',
      orderStatus: 'Completed',
      date: '2024-01-17',
      time: '11:20 AM',
    },
    {
      id: 'ORD-005',
      customerName: 'Vikram Singh',
      vendor: 'Tech Solutions',
      products: 2,
      totalAmount: '₹23,800',
      paymentStatus: 'Failed',
      orderStatus: 'Cancelled',
      date: '2024-01-17',
      time: '03:30 PM',
    },
  ];

  const getStatusColor = (status) => {
    const statusColors = {
      Received: AppColors.info,
      Pending: AppColors.warning,
      Completed: AppColors.success,
      Cancelled: AppColors.error,
    };
    return statusColors[status] || AppColors.textSecondary;
  };

  const getPaymentStatusColor = (status) => {
    const paymentColors = {
      Paid: AppColors.success,
      Pending: AppColors.warning,
      Failed: AppColors.error,
    };
    return paymentColors[status] || AppColors.textSecondary;
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatusFilter = filterStatus === 'all' || order.orderStatus === filterStatus;
    const matchesPaymentFilter = filterPayment === 'all' || order.paymentStatus === filterPayment;

    return matchesSearch && matchesStatusFilter && matchesPaymentFilter;
  });

  const orderStats = {
    total: orders.length,
    received: orders.filter((o) => o.orderStatus === 'Received').length,
    pending: orders.filter((o) => o.orderStatus === 'Pending').length,
    completed: orders.filter((o) => o.orderStatus === 'Completed').length,
    cancelled: orders.filter((o) => o.orderStatus === 'Cancelled').length,
  };

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
          Order Management
        </h1>
        <p
          style={{
            color: AppColors.textSecondary,
            fontSize: '0.875rem',
            margin: '0.5rem 0 0 0',
          }}
        >
          Track and manage all customer orders
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        {[
          { label: 'Total Orders', value: orderStats.total, color: AppColors.primary },
          { label: 'Received', value: orderStats.received, color: AppColors.info },
          { label: 'Pending', value: orderStats.pending, color: AppColors.warning },
          { label: 'Completed', value: orderStats.completed, color: AppColors.success },
          { label: 'Cancelled', value: orderStats.cancelled, color: AppColors.error },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              padding: AppDimensions.paddingL,
              backgroundColor: AppColors.surface,
              borderRadius: AppDimensions.radiusM,
              boxShadow: `0 2px 8px ${AppColors.shadow}`,
            }}
          >
            <p
              style={{
                color: AppColors.textSecondary,
                fontSize: '0.875rem',
                margin: '0 0 0.5rem 0',
              }}
            >
              {stat.label}
            </p>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: stat.color,
                margin: 0,
              }}
            >
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <div style={{ position: 'relative', flex: 1 }}>
          <MdSearch
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: AppColors.textSecondary,
            }}
            size={20}
          />
          <input
            type="text"
            placeholder="Search by order ID, customer, or vendor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              border: `1px solid ${AppColors.divider}`,
              borderRadius: AppDimensions.radiusM,
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            fontSize: '1rem',
            outline: 'none',
            backgroundColor: AppColors.surface,
            cursor: 'pointer',
            minWidth: isMobile ? '100%' : '150px',
          }}
        >
          <option value="all">All Status</option>
          <option value="Received">Received</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          value={filterPayment}
          onChange={(e) => setFilterPayment(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            fontSize: '1rem',
            outline: 'none',
            backgroundColor: AppColors.surface,
            cursor: 'pointer',
            minWidth: isMobile ? '100%' : '150px',
          }}
        >
          <option value="all">All Payments</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* Orders List */}
      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusM,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
          overflow: 'hidden',
        }}
      >
        {isMobile ? (
          // Mobile Card View
          <div>
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                style={{
                  padding: AppDimensions.paddingM,
                  borderBottom: `1px solid ${AppColors.divider}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: AppColors.primary,
                        margin: '0 0 0.25rem 0',
                      }}
                    >
                      {order.id}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: AppColors.textSecondary,
                        margin: 0,
                      }}
                    >
                      {order.customerName}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: AppColors.success,
                        margin: '0 0 0.25rem 0',
                      }}
                    >
                      {order.totalAmount}
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: AppColors.textSecondary,
                        margin: 0,
                      }}
                    >
                      {order.date}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${getStatusColor(order.orderStatus)}20`,
                      color: getStatusColor(order.orderStatus),
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {order.orderStatus}
                  </span>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${getPaymentStatusColor(order.paymentStatus)}20`,
                      color: getPaymentStatusColor(order.paymentStatus),
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {order.paymentStatus}
                  </span>
                </div>

                <button
                  onClick={() => navigate(`/orders/${order.id}`)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    backgroundColor: AppColors.primaryLight,
                    color: AppColors.primary,
                    border: 'none',
                    borderRadius: AppDimensions.radiusS,
                    fontSize: '0.813rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  <MdVisibility size={16} />
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Table View
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: AppColors.backgroundDark }}>
                <th style={tableHeaderStyle}>Order ID</th>
                <th style={tableHeaderStyle}>Customer</th>
                <th style={tableHeaderStyle}>Vendor</th>
                <th style={tableHeaderStyle}>Products</th>
                <th style={tableHeaderStyle}>Amount</th>
                <th style={tableHeaderStyle}>Payment</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Date & Time</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  style={{
                    borderBottom: `1px solid ${AppColors.divider}`,
                  }}
                >
                  <td style={tableCellStyle}>
                    <span style={{ fontWeight: '600', color: AppColors.primary }}>
                      {order.id}
                    </span>
                  </td>
                  <td style={tableCellStyle}>{order.customerName}</td>
                  <td style={tableCellStyle}>{order.vendor}</td>
                  <td style={tableCellStyle}>{order.products} items</td>
                  <td style={tableCellStyle}>
                    <span style={{ fontWeight: '600', color: AppColors.success }}>
                      {order.totalAmount}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: `${getPaymentStatusColor(order.paymentStatus)}20`,
                        color: getPaymentStatusColor(order.paymentStatus),
                        borderRadius: AppDimensions.radiusS,
                        fontSize: '0.813rem',
                        fontWeight: '500',
                      }}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: `${getStatusColor(order.orderStatus)}20`,
                        color: getStatusColor(order.orderStatus),
                        borderRadius: AppDimensions.radiusS,
                        fontSize: '0.813rem',
                        fontWeight: '500',
                      }}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <div style={{ fontSize: '0.813rem' }}>
                      <div>{order.date}</div>
                      <div style={{ color: AppColors.textSecondary }}>{order.time}</div>
                    </div>
                  </td>
                  <td style={tableCellStyle}>
                    <button
                      onClick={() => navigate(`/orders/${order.id}`)}
                      style={{
                        padding: '0.5rem',
                        backgroundColor: AppColors.primaryLight,
                        color: AppColors.primary,
                        border: 'none',
                        borderRadius: AppDimensions.radiusS,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      title="View Details"
                    >
                      <MdVisibility size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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

export default OrdersPage;
