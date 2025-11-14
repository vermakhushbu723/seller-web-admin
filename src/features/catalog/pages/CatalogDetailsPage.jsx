import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack, MdEdit, MdVisibility, MdShoppingCart, MdTrendingUp } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const CatalogDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();

  const catalog = {
    name: 'Winter Collection 2024',
    description: 'Curated selection of winter essentials and trending products for the season',
    category: 'Fashion',
    status: 'Active',
    products: 45,
    views: 1250,
    sales: '₹85,000',
    image: '🧊',
  };

  const products = [
    { id: 1, name: 'Winter Jacket', price: '₹3,499', sales: 24, image: '🧥' },
    { id: 2, name: 'Wool Sweater', price: '₹1,999', sales: 18, image: '👚' },
    { id: 3, name: 'Leather Boots', price: '₹4,999', sales: 12, image: '👢' },
  ];

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: AppDimensions.marginL, flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/catalog')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>{catalog.name}</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => navigate(`/catalog/${id}/analytics`)} style={{ backgroundColor: AppColors.backgroundDark, color: AppColors.textPrimary, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.divider}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdTrendingUp size={20} />Analytics</button>
          <button style={{ backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem 1.5rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MdEdit size={20} />Edit</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '2fr 1fr', gap: AppDimensions.marginL }}>
        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>{catalog.image}</div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>About this Catalog</h3>
            <p style={{ lineHeight: 1.6, color: AppColors.textPrimary, marginBottom: '1rem' }}>{catalog.description}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.5rem 1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem' }}><strong>Category:</strong> {catalog.category}</span>
              <span style={{ padding: '0.5rem 1rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600' }}>{catalog.status}</span>
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Products in this Catalog</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {products.map(product => (
                <div key={product.id} style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>{product.image}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>{product.name}</p>
                    <p style={{ color: AppColors.success, fontWeight: '600', margin: 0 }}>{product.price}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.75rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Sales</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.primary, margin: 0 }}>{product.sales}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Performance</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: `${AppColors.primary}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdShoppingCart size={20} color={AppColors.primary} />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Total Products</p>
                </div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: AppColors.primary, margin: 0 }}>{catalog.products}</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: `${AppColors.info}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdVisibility size={20} color={AppColors.info} />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Total Views</p>
                </div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: AppColors.info, margin: 0 }}>{catalog.views}</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: `${AppColors.success}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MdTrendingUp size={20} color={AppColors.success} />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Total Sales</p>
                </div>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: AppColors.success, margin: 0 }}>{catalog.sales}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetailsPage;

