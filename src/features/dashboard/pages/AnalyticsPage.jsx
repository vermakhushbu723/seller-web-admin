import React, { useState } from 'react';
import { MdTrendingUp, MdShoppingCart, MdVisibility, MdAttachMoney } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const AnalyticsPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const [timeRange, setTimeRange] = useState('week');

  const metrics = [
    { label: 'Revenue', value: '₹1,24,500', change: '+12.5%', icon: MdAttachMoney, color: AppColors.success },
    { label: 'Orders', value: '145', change: '+8.3%', icon: MdShoppingCart, color: AppColors.primary },
    { label: 'Page Views', value: '3,250', change: '+15.2%', icon: MdVisibility, color: AppColors.info },
    { label: 'Conversion', value: '4.2%', change: '+0.8%', icon: MdTrendingUp, color: AppColors.warning },
  ];

  const chartData = [{ day: 'Mon', sales: 12000 }, { day: 'Tue', sales: 18000 }, { day: 'Wed', sales: 15000 }, { day: 'Thu', sales: 22000 }, { day: 'Fri', sales: 19000 }, { day: 'Sat', sales: 16000 }, { day: 'Sun', sales: 14000 }];
  const maxSales = Math.max(...chartData.map(d => d.sales));

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: AppDimensions.marginL, flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Analytics Dashboard</h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['week', 'month', 'year'].map(range => (
            <button key={range} onClick={() => setTimeRange(range)} style={{ padding: '0.5rem 1rem', backgroundColor: timeRange === range ? AppColors.primary : AppColors.surface, color: timeRange === range ? AppColors.surface : AppColors.textPrimary, border: `1px solid ${timeRange === range ? AppColors.primary : AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', textTransform: 'capitalize' }}>{range}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: AppDimensions.marginL, marginBottom: AppDimensions.marginL }}>
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: AppDimensions.radiusL, backgroundColor: `${metric.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={24} color={metric.color} />
                </div>
                <span style={{ padding: '0.25rem 0.5rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.75rem', fontWeight: '600' }}>{metric.change}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.5rem 0' }}>{metric.label}</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '2fr 1fr', gap: AppDimensions.marginL }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Sales Trend</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '250px' }}>
            {chartData.map((data, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '100%', backgroundColor: AppColors.primary, borderRadius: `${AppDimensions.radiusM} ${AppDimensions.radiusM} 0 0`, height: `${(data.sales / maxSales) * 200}px`, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', color: AppColors.surface, fontWeight: '600' }}>₹{(data.sales / 1000).toFixed(0)}k</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: AppColors.textSecondary, fontWeight: '600' }}>{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Top Categories</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[{ name: 'Electronics', percentage: 45, color: AppColors.primary }, { name: 'Fashion', percentage: 30, color: AppColors.success }, { name: 'Home', percentage: 25, color: AppColors.info }].map((cat, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{cat.name}</span>
                    <span style={{ fontWeight: '600', color: cat.color, fontSize: '0.875rem' }}>{cat.percentage}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: AppColors.backgroundDark, borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${cat.percentage}%`, height: '100%', backgroundColor: cat.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[{ text: 'New order received', time: '2 min ago' }, { text: 'Product out of stock', time: '15 min ago' }, { text: 'Payment received', time: '1 hour ago' }].map((activity, idx) => (
                <div key={idx} style={{ padding: '0.75rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
                  <p style={{ fontWeight: '600', fontSize: '0.875rem', margin: '0 0 0.25rem 0' }}>{activity.text}</p>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: 0 }}>{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
