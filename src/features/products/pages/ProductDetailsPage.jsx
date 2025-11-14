import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack, MdEdit } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();

  const product = {
    name: 'iPhone 15 Pro', category: 'Electronics', subcategory: 'Mobile Phones',
    description: 'The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system.',
    price: '₹1,49,900', comparePrice: '₹1,59,900', sku: 'IPH15PRO-128', barcode: '1234567890123',
    stock: 25, lowStockThreshold: 5, status: 'Active', visibility: 'Visible',
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: AppDimensions.marginL, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1rem' : 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/products')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <MdArrowBack size={20} />
          </button>
          <h1 style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>{product.name}</h1>
        </div>
        <button onClick={() => navigate(`/products/edit/${id}`)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: AppColors.primary, color: 'white', border: 'none', borderRadius: AppDimensions.radiusM, cursor: 'pointer', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
          <MdEdit size={20} /> Edit
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : 'repeat(2, 1fr)', gap: AppDimensions.marginL }}>
        <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
          <div style={{ fontSize: '6rem', textAlign: 'center', padding: '2rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, marginBottom: '1rem' }}>📱</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Product Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Description</p><p style={{ color: AppColors.textPrimary }}>{product.description}</p></div>
            <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>Category</p><p style={{ fontWeight: '600' }}>{product.category} / {product.subcategory}</p></div>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Pricing & Inventory</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary }}>Price</p><p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: AppColors.success }}>{product.price}</p></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary }}>SKU</p><p style={{ fontWeight: '600' }}>{product.sku}</p></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary }}>Stock</p><p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.success }}>{product.stock}</p></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary }}>Status</p><span style={{ padding: '0.5rem 1rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600' }}>{product.status}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
