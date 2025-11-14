import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdAdd } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const CreateCatalogPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    status: 'active',
  });
  const [selectedProducts, setSelectedProducts] = useState([]);

  const availableProducts = [
    { id: 1, name: 'iPhone 15 Pro', price: '₹1,49,900', image: '📱' },
    { id: 2, name: 'AirPods Pro', price: '₹24,900', image: '🎧' },
    { id: 3, name: 'MacBook Air', price: '₹99,900', image: '💻' },
  ];

  const handleSubmit = (e) => { e.preventDefault(); alert('Catalog created!'); navigate('/catalog'); };
  const handleChange = (field, value) => setFormData({...formData, [field]: value});
  const toggleProduct = (productId) => {
    setSelectedProducts(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/catalog')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Create New Catalog</h1>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Catalog Information</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Catalog Name *</label>
              <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="e.g., Winter Collection 2024" required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Description</label>
              <textarea value={formData.description} onChange={(e) => handleChange('description', e.target.value)} rows="4" placeholder="Describe your catalog..." style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem', resize: 'vertical' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Category *</label>
              <select value={formData.category} onChange={(e) => handleChange('category', e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }}>
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Living</option>
                <option value="sports">Sports</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Status</label>
              <select value={formData.status} onChange={(e) => handleChange('status', e.target.value)} style={{ width: '100%', padding: '0.75rem', border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, fontSize: '1rem' }}>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>Select Products</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {availableProducts.map(product => (
                <div key={product.id} onClick={() => toggleProduct(product.id)} style={{ padding: '1rem', backgroundColor: selectedProducts.includes(product.id) ? `${AppColors.primary}20` : AppColors.backgroundDark, border: `2px solid ${selectedProducts.includes(product.id) ? AppColors.primary : AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{product.image}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>{product.name}</p>
                    <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>{product.price}</p>
                  </div>
                  {selectedProducts.includes(product.id) && (
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: AppColors.primary, color: AppColors.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                  )}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, marginTop: '1rem' }}>{selectedProducts.length} product(s) selected</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={{ flex: 1, backgroundColor: AppColors.primary, color: AppColors.surface, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: 'none', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MdSave size={20} />Create Catalog</button>
            <button type="button" onClick={() => navigate('/catalog')} style={{ flex: 1, backgroundColor: AppColors.backgroundDark, color: AppColors.textPrimary, padding: '0.75rem', borderRadius: AppDimensions.radiusM, border: `1px solid ${AppColors.divider}`, fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCatalogPage;

