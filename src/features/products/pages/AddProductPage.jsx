import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack, MdSave, MdImage } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const AddProductPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    subcategory: '',
    description: '',
    price: '',
    comparePrice: '',
    sku: '',
    barcode: '',
    quantity: '',
    lowStockThreshold: '',
    visibility: 'visible',
    status: 'active',
    weight: '',
    dimensions: '',
    tags: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data:', formData);
    // Add API call here
    navigate('/products');
  };

  const FormSection = ({ title, children }) => (
    <div style={{ marginBottom: AppDimensions.marginXL }}>
      <h2
        style={{
          fontSize: isMobile ? '1.125rem' : '1.25rem',
          fontWeight: '600',
          color: AppColors.textPrimary,
          margin: `0 0 ${AppDimensions.marginM} 0`,
          paddingBottom: '0.5rem',
          borderBottom: `2px solid ${AppColors.primary}`,
        }}
      >
        {title}
      </h2>
      <div style={{ marginTop: AppDimensions.marginM }}>
        {children}
      </div>
    </div>
  );

  const FormField = ({ label, name, type = 'text', required = false, span = 1, placeholder, multiline = false }) => (
    <div style={{ gridColumn: span === 2 ? '1 / -1' : 'auto', marginBottom: AppDimensions.marginM }}>
      <label
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: AppColors.textPrimary,
          marginBottom: '0.5rem',
        }}
      >
        {label} {required && <span style={{ color: AppColors.error }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
          placeholder={placeholder}
          rows={4}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            fontSize: '1rem',
            outline: 'none',
          }}
        />
      )}
    </div>
  );

  const SelectField = ({ label, name, options, required = false }) => (
    <div style={{ marginBottom: AppDimensions.marginM }}>
      <label
        style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: AppColors.textPrimary,
          marginBottom: '0.5rem',
        }}
      >
        {label} {required && <span style={{ color: AppColors.error }}>*</span>}
      </label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        required={required}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: `1px solid ${AppColors.divider}`,
          borderRadius: AppDimensions.radiusM,
          fontSize: '1rem',
          outline: 'none',
          backgroundColor: AppColors.surface,
          cursor: 'pointer',
        }}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: AppDimensions.marginL,
        }}
      >
        <button
          onClick={() => navigate('/products')}
          style={{
            padding: '0.5rem',
            backgroundColor: AppColors.surface,
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MdArrowBack size={20} />
        </button>
        <h1
          style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            color: AppColors.textPrimary,
            margin: 0,
          }}
        >
          Add New Product
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '2fr 1fr', gap: AppDimensions.marginL }}>
          {/* Left Column */}
          <div>
            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
                marginBottom: AppDimensions.marginL,
              }}
            >
              <FormSection title="📋 Product Information">
                <FormField label="Product Name" name="productName" required placeholder="Enter product name" span={2} />
                <FormField
                  label="Description"
                  name="description"
                  multiline
                  required
                  placeholder="Detailed product description"
                  span={2}
                />
              </FormSection>
            </div>

            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
                marginBottom: AppDimensions.marginL,
              }}
            >
              <FormSection title="💰 Pricing">
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: AppDimensions.marginM }}>
                  <FormField label="Price" name="price" type="number" required placeholder="0.00" />
                  <FormField label="Compare at Price" name="comparePrice" type="number" placeholder="0.00" />
                </div>
              </FormSection>
            </div>

            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
              }}
            >
              <FormSection title="📦 Inventory Management">
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: AppDimensions.marginM }}>
                  <FormField label="SKU" name="sku" required placeholder="PROD-001" />
                  <FormField label="Barcode" name="barcode" placeholder="123456789" />
                  <FormField label="Quantity in Stock" name="quantity" type="number" required placeholder="0" />
                  <FormField label="Low Stock Threshold" name="lowStockThreshold" type="number" placeholder="5" />
                </div>
              </FormSection>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
                marginBottom: AppDimensions.marginL,
              }}
            >
              <FormSection title="🏷️ Category">
                <SelectField
                  label="Category"
                  name="category"
                  required
                  options={[
                    { value: 'electronics', label: 'Electronics' },
                    { value: 'fashion', label: 'Fashion' },
                    { value: 'home', label: 'Home & Living' },
                  ]}
                />
                <SelectField
                  label="Subcategory"
                  name="subcategory"
                  required
                  options={[
                    { value: 'mobile', label: 'Mobile Phones' },
                    { value: 'laptops', label: 'Laptops' },
                    { value: 'accessories', label: 'Accessories' },
                  ]}
                />
              </FormSection>
            </div>

            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
                marginBottom: AppDimensions.marginL,
              }}
            >
              <FormSection title="👁️ Visibility & Status">
                <SelectField
                  label="Visibility"
                  name="visibility"
                  required
                  options={[
                    { value: 'visible', label: 'Visible (Public)' },
                    { value: 'hidden', label: 'Hidden (Private)' },
                  ]}
                />
                <SelectField
                  label="Status"
                  name="status"
                  required
                  options={[
                    { value: 'active', label: 'Active' },
                    { value: 'draft', label: 'Draft' },
                    { value: 'archived', label: 'Archived' },
                  ]}
                />
              </FormSection>
            </div>

            <div
              style={{
                backgroundColor: AppColors.surface,
                borderRadius: AppDimensions.radiusL,
                padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL,
                boxShadow: `0 2px 8px ${AppColors.shadow}`,
              }}
            >
              <FormSection title="📸 Product Images">
                <div
                  style={{
                    border: `2px dashed ${AppColors.divider}`,
                    borderRadius: AppDimensions.radiusM,
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: AppColors.backgroundDark,
                    cursor: 'pointer',
                  }}
                >
                  <MdImage size={48} color={AppColors.textSecondary} style={{ margin: '0 auto' }} />
                  <p style={{ color: AppColors.textSecondary, margin: '1rem 0 0 0', fontSize: '0.875rem' }}>
                    Click to upload or drag and drop
                  </p>
                  <p style={{ color: AppColors.textSecondary, margin: '0.25rem 0 0 0', fontSize: '0.75rem' }}>
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </FormSection>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: AppDimensions.marginM,
            justifyContent: 'flex-end',
            marginTop: AppDimensions.marginL,
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/products')}
            style={{
              padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
              backgroundColor: AppColors.surface,
              color: AppColors.textPrimary,
              border: `1px solid ${AppColors.divider}`,
              borderRadius: AppDimensions.radiusM,
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
              backgroundColor: AppColors.primary,
              color: 'white',
              border: 'none',
              borderRadius: AppDimensions.radiusM,
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            <MdSave size={20} />
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
