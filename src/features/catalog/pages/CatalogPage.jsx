import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdd, MdSearch, MdVisibility, MdTrendingUp } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const CatalogPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [search, setSearch] = useState('');

  const catalogs = [
    { id: 1, name: 'Winter Collection 2024', products: 45, views: 1250, sales: '₹85,000', image: '🧊', status: 'Active' },
    { id: 2, name: 'Electronics Essentials', products: 32, views: 890, sales: '₹1,24,500', image: '📱', status: 'Active' },
    { id: 3, name: 'Home Decor', products: 28, views: 670, sales: '₹56,000', image: '🏠', status: 'Active' },
    { id: 4, name: 'Summer Clearance', products: 18, views: 320, sales: '₹32,000', image: '☀️', status: 'Archived' },
  ];

  const filtered = catalogs.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: AppDimensions.marginL, flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Catalogs</h1>
        <button onClick={() => navigate('/catalog/create')} style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdAdd size={20} />Create Catalog</button>
      </div>

      <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <MdSearch size={20} color={AppColors.textSecondary} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input type="text" placeholder="Search catalogs..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: AppDimensions.marginL }}>
          {filtered.map(catalog => (
            <div key={catalog.id} onClick={() => navigate(`/catalog/${catalog.id}`)} style={{ backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{catalog.image}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 1rem 0' }}>{catalog.name}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusM }}>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Products</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.primary, margin: 0 }}>{catalog.products}</p>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusM }}>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Views</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.info, margin: 0 }}>{catalog.views}</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Total Sales</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: AppColors.success, margin: 0 }}>{catalog.sales}</p>
                </div>
                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: catalog.status === 'Active' ? `${AppColors.success}20` : `${AppColors.textSecondary}40`, color: catalog.status === 'Active' ? AppColors.success : AppColors.textSecondary, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600' }}>{catalog.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
