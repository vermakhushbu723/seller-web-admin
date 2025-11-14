import React, { useState } from 'react';
import {
  MdCurrencyRupee,
  MdShoppingCart,
  MdTrendingUp,
  MdPerson,
  MdCalendarToday,
} from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const SalesOverviewPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const [timeRange, setTimeRange] = useState('monthly');

  // Mock sales data
  const salesSummary = {
    totalSales: '₹12,45,678',
    totalOrders: 456,
    averageOrderValue: '₹2,731',
    totalCustomers: 234,
    growth: '+23.5%',
  };

  const dailySales = [
    { date: '2024-01-15', sales: 45600, orders: 23 },
    { date: '2024-01-16', sales: 52300, orders: 28 },
    { date: '2024-01-17', sales: 38900, orders: 19 },
    { date: '2024-01-18', sales: 61200, orders: 31 },
    { date: '2024-01-19', sales: 55800, orders: 27 },
    { date: '2024-01-20', sales: 48700, orders: 24 },
    { date: '2024-01-21', sales: 67500, orders: 34 },
  ];

  const weeklySales = [
    { week: 'Week 1', sales: 245600, orders: 123 },
    { week: 'Week 2', sales: 298400, orders: 152 },
    { week: 'Week 3', sales: 276800, orders: 141 },
    { week: 'Week 4', sales: 324900, orders: 165 },
  ];

  const monthlySales = [
    { month: 'Jan', sales: 1145900, orders: 581 },
    { month: 'Feb', sales: 987600, orders: 503 },
    { month: 'Mar', sales: 1234500, orders: 628 },
    { month: 'Apr', sales: 1098700, orders: 559 },
    { month: 'May', sales: 1245678, orders: 634 },
  ];

  const topProducts = [
    { name: 'iPhone 15 Pro', sales: '₹3,45,000', orders: 23, percentage: 27.7 },
    { name: 'Samsung Galaxy S24', sales: '₹2,76,000', orders: 21, percentage: 22.2 },
    { name: 'MacBook Pro M3', sales: '₹2,34,500', orders: 15, percentage: 18.8 },
    { name: 'Sony WH-1000XM5', sales: '₹1,89,000', orders: 35, percentage: 15.2 },
    { name: 'iPad Air', sales: '₹1,67,800', orders: 18, percentage: 13.5 },
  ];

  const topVendors = [
    { name: 'Tech Solutions Pvt Ltd', sales: '₹2,45,000', orders: 45, growth: '+15%' },
    { name: 'Fashion Hub', sales: '₹5,67,890', orders: 128, growth: '+28%' },
    { name: 'Home Decor Store', sales: '₹1,23,456', orders: 67, growth: '+12%' },
    { name: 'Electronics World', sales: '₹3,89,123', orders: 89, growth: '+20%' },
  ];

  const getSalesData = () => {
    switch (timeRange) {
      case 'daily':
        return dailySales;
      case 'weekly':
        return weeklySales;
      case 'monthly':
        return monthlySales;
      default:
        return monthlySales;
    }
  };

  const getMaxSales = () => {
    const data = getSalesData();
    return Math.max(...data.map((item) => item.sales));
  };

  const StatCard = ({ icon: Icon, label, value, color, subtext }) => (
    <div
      style={{
        padding: isMobile ? '1rem' : '1.5rem',
        backgroundColor: AppColors.surface,
        borderRadius: AppDimensions.radiusL,
        boxShadow: `0 2px 8px ${AppColors.shadow}`,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <div
        style={{
          padding: '1rem',
          backgroundColor: `${color}20`,
          borderRadius: AppDimensions.radiusM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={28} color={color} />
      </div>
      <div>
        <p
          style={{
            fontSize: '0.813rem',
            color: AppColors.textSecondary,
            margin: '0 0 0.25rem 0',
          }}
        >
          {label}
        </p>
        <h3
          style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontWeight: 'bold',
            color: AppColors.textPrimary,
            margin: 0,
          }}
        >
          {value}
        </h3>
        {subtext && (
          <p
            style={{
              fontSize: '0.75rem',
              color: color,
              margin: '0.25rem 0 0 0',
              fontWeight: '500',
            }}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      {/* Header */}
      <div
        style={{
          marginBottom: AppDimensions.marginL,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            color: AppColors.textPrimary,
            margin: 0,
          }}
        >
          Sales Overview
        </h1>
        <p
          style={{
            color: AppColors.textSecondary,
            fontSize: '0.875rem',
            margin: '0.5rem 0 0 0',
          }}
        >
          Track your sales performance and analytics
        </p>
      </div>

      {/* Summary Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <StatCard
          icon={MdCurrencyRupee}
          label="Total Sales"
          value={salesSummary.totalSales}
          color={AppColors.success}
          subtext={salesSummary.growth}
        />
        <StatCard
          icon={MdShoppingCart}
          label="Total Orders"
          value={salesSummary.totalOrders}
          color={AppColors.primary}
        />
        <StatCard
          icon={MdTrendingUp}
          label="Avg Order Value"
          value={salesSummary.averageOrderValue}
          color={AppColors.secondary}
        />
        <StatCard
          icon={MdPerson}
          label="Customers"
          value={salesSummary.totalCustomers}
          color={AppColors.info}
        />
        <StatCard
          icon={MdTrendingUp}
          label="Growth"
          value={salesSummary.growth}
          color={AppColors.success}
        />
      </div>

      {/* Sales Chart */}
      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusL,
          padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            marginBottom: AppDimensions.marginL,
            gap: isMobile ? AppDimensions.marginM : 0,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              fontWeight: '600',
              color: AppColors.textPrimary,
              margin: 0,
            }}
          >
            Sales Analytics
          </h2>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['daily', 'weekly', 'monthly'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor:
                    timeRange === range ? AppColors.primary : AppColors.surface,
                  color: timeRange === range ? 'white' : AppColors.textPrimary,
                  border: `1px solid ${timeRange === range ? AppColors.primary : AppColors.divider}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div style={{ overflowX: 'auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: isMobile ? '0.5rem' : '1rem',
              height: '300px',
              padding: '1rem 0',
              minWidth: isMobile ? '600px' : 'auto',
            }}
          >
            {getSalesData().map((item, index) => {
              const heightPercentage = (item.sales / getMaxSales()) * 100;
              const label = item.date || item.week || item.month;

              return (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: AppColors.primary,
                      borderRadius: `${AppDimensions.radiusS} ${AppDimensions.radiusS} 0 0`,
                      height: `${heightPercentage}%`,
                      minHeight: '20px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                    }}
                    title={`₹${item.sales.toLocaleString()}`}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-1.5rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: AppColors.textPrimary,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ₹{(item.sales / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: AppColors.textSecondary,
                      fontWeight: '500',
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.688rem',
                      color: AppColors.textSecondary,
                    }}
                  >
                    {item.orders} orders
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Products and Vendors */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(2, 1fr)',
          gap: AppDimensions.marginL,
        }}
      >
        {/* Top Products */}
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
            Top Products
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topProducts.map((product, index) => (
              <div
                key={index}
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
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontSize: '0.938rem',
                        fontWeight: '600',
                        color: AppColors.textPrimary,
                        margin: '0 0 0.25rem 0',
                      }}
                    >
                      {product.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.813rem',
                        color: AppColors.textSecondary,
                        margin: 0,
                      }}
                    >
                      {product.orders} orders
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: AppColors.success,
                        margin: 0,
                      }}
                    >
                      {product.sales}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: AppColors.divider,
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${product.percentage}%`,
                      height: '100%',
                      backgroundColor: AppColors.primary,
                      borderRadius: '3px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Vendors */}
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
            Top Vendors
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topVendors.map((vendor, index) => (
              <div
                key={index}
                style={{
                  padding: '1rem',
                  backgroundColor: AppColors.backgroundDark,
                  borderRadius: AppDimensions.radiusM,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: '0.938rem',
                      fontWeight: '600',
                      color: AppColors.textPrimary,
                      margin: '0 0 0.25rem 0',
                    }}
                  >
                    {vendor.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.813rem',
                      color: AppColors.textSecondary,
                      margin: 0,
                    }}
                  >
                    {vendor.orders} orders
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
                    {vendor.sales}
                  </p>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: AppColors.success,
                      margin: 0,
                      fontWeight: '500',
                    }}
                  >
                    {vendor.growth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewPage;
