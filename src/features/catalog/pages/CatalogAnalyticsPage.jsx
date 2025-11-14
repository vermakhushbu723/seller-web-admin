import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const CatalogAnalyticsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();
  const [timeRange, setTimeRange] = useState('week');

  const metrics = [
    { label: 'Total Views', value: '1,250', change: '+12%', color: AppColors.info },
    { label: 'Product Clicks', value: '856', change: '+8%', color: AppColors.primary },
    { label: 'Sales', value: '₹85,000', change: '+15%', color: AppColors.success },
    { label: 'Conversion Rate', value: '68%', change: '+5%', color: AppColors.warning },
  ];

  const dailyData = [
    { day: 'Mon', views: 180, sales: 12 },
    { day: 'Tue', views: 220, sales: 15 },
    { day: 'Wed', views: 195, sales: 13 },
    { day: 'Thu', views: 240, sales: 18 },
    { day: 'Fri', views: 210, sales: 14 },
    { day: 'Sat', views: 160, sales: 10 },
    { day: 'Sun', views: 145, sales: 9 },
  ];

  const maxValue = Math.max(...dailyData.map(d => d.views));

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate(`/catalog/${id}`)} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Catalog Analytics</h1>
      </div>

      <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {['week', 'month', 'year'].map(range => (
            <button key={range} onClick={() => setTimeRange(range)} style={{ padding: '0.5rem 1rem', backgroundColor: timeRange === range ? AppColors.primary : AppColors.backgroundDark, color: timeRange === range ? AppColors.surface : AppColors.textPrimary, border: `1px solid ${timeRange === range ? AppColors.primary : AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', textTransform: 'capitalize' }}>{range}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: AppDimensions.marginL }}>
          {metrics.map((metric, idx) => (
            <div key={idx} style={{ padding: AppDimensions.paddingL, backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusL }}>
              <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.5rem 0' }}>{metric.label}</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: metric.color, margin: '0 0 0.5rem 0' }}>{metric.value}</p>
              <p style={{ fontSize: '0.875rem', color: AppColors.success, fontWeight: '600', margin: 0 }}>{metric.change}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Views Over Time</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '200px' }}>
          {dailyData.map((data, idx) => (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '100%', backgroundColor: AppColors.primary, borderRadius: `${AppDimensions.radiusM} ${AppDimensions.radiusM} 0 0`, height: `${(data.views / maxValue) * 160}px`, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: AppColors.surface, fontWeight: '600' }}>{data.views}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: AppColors.textSecondary, fontWeight: '600' }}>{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(2, 1fr)', gap: AppDimensions.marginL }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Top Performing Products</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[{ name: 'Winter Jacket', sales: 24, revenue: '₹83,976' }, { name: 'Wool Sweater', sales: 18, revenue: '₹35,982' }, { name: 'Leather Boots', sales: 12, revenue: '₹59,988' }].map((product, idx) => (
              <div key={idx} style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>{product.name}</p>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>{product.sales} sales</p>
                </div>
                <p style={{ fontWeight: 'bold', color: AppColors.success, margin: 0 }}>{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Traffic Sources</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[{ source: 'Direct', percentage: 45, color: AppColors.primary }, { source: 'Search', percentage: 30, color: AppColors.success }, { source: 'Social', percentage: 15, color: AppColors.info }, { source: 'Other', percentage: 10, color: AppColors.warning }].map((source, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>{source.source}</span>
                  <span style={{ fontWeight: '600', color: source.color }}>{source.percentage}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: AppColors.backgroundDark, borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${source.percentage}%`, height: '100%', backgroundColor: source.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogAnalyticsPage;

