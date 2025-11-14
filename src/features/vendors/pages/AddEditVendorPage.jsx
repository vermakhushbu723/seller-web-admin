import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const AddEditVendorPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    gstNumber: '',
    panNumber: '',
    businessAddress: '',
    city: '',
    state: '',
    pincode: '',
    
    // Personal Information
    ownerName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    
    // Bank Details
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branch: '',
    
    status: 'Active',
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
    console.log('Form submitted:', formData);
    // Add API call here
    navigate('/vendors');
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
          gap: AppDimensions.marginM,
          marginTop: AppDimensions.marginM,
        }}
      >
        {children}
      </div>
    </div>
  );

  const FormField = ({ label, name, type = 'text', required = false, span = 1, placeholder }) => (
    <div style={{ gridColumn: span === 2 ? '1 / -1' : 'auto' }}>
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
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => (e.target.style.borderColor = AppColors.primary)}
        onBlur={(e) => (e.target.style.borderColor = AppColors.divider)}
      />
    </div>
  );

  const SelectField = ({ label, name, options, required = false }) => (
    <div>
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
          onClick={() => navigate('/vendors')}
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
          {isEditMode ? 'Edit Vendor' : 'Add New Vendor'}
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: AppColors.surface,
            borderRadius: AppDimensions.radiusL,
            padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingXL,
            boxShadow: `0 2px 8px ${AppColors.shadow}`,
          }}
        >
          {/* Business Information */}
          <FormSection title="📋 Business Information">
            <FormField
              label="Business Name"
              name="businessName"
              required
              span={2}
              placeholder="Enter business name"
            />
            <FormField
              label="GST Number"
              name="gstNumber"
              required
              placeholder="29ABCDE1234F1Z5"
            />
            <FormField
              label="PAN Number"
              name="panNumber"
              required
              placeholder="ABCDE1234F"
            />
            <FormField
              label="Business Address"
              name="businessAddress"
              required
              span={2}
              placeholder="Enter complete business address"
            />
            <FormField
              label="City"
              name="city"
              required
              placeholder="Enter city"
            />
            <FormField
              label="State"
              name="state"
              required
              placeholder="Enter state"
            />
            <FormField
              label="Pincode"
              name="pincode"
              required
              placeholder="Enter pincode"
            />
            <SelectField
              label="Status"
              name="status"
              required
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ]}
            />
          </FormSection>

          {/* Personal Information */}
          <FormSection title="👤 Personal Information">
            <FormField
              label="Owner Name"
              name="ownerName"
              required
              span={2}
              placeholder="Enter owner's full name"
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              required
              placeholder="owner@business.com"
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
            />
            <FormField
              label="Alternate Phone"
              name="alternatePhone"
              type="tel"
              span={2}
              placeholder="+91 98765 43211 (Optional)"
            />
          </FormSection>

          {/* Bank Details */}
          <FormSection title="🏦 Bank Details for Payment Settlement">
            <FormField
              label="Account Holder Name"
              name="accountHolderName"
              required
              span={2}
              placeholder="As per bank account"
            />
            <FormField
              label="Account Number"
              name="accountNumber"
              required
              placeholder="Enter account number"
            />
            <FormField
              label="IFSC Code"
              name="ifscCode"
              required
              placeholder="HDFC0001234"
            />
            <FormField
              label="Bank Name"
              name="bankName"
              required
              placeholder="HDFC Bank"
            />
            <FormField
              label="Branch"
              name="branch"
              required
              placeholder="Koramangala, Bangalore"
            />
          </FormSection>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: AppDimensions.marginM,
              justifyContent: 'flex-end',
              marginTop: AppDimensions.marginXL,
              paddingTop: AppDimensions.marginL,
              borderTop: `1px solid ${AppColors.divider}`,
            }}
          >
            <button
              type="button"
              onClick={() => navigate('/vendors')}
              style={{
                padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
                backgroundColor: AppColors.surface,
                color: AppColors.textPrimary,
                border: `1px solid ${AppColors.divider}`,
                borderRadius: AppDimensions.radiusM,
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                order: isMobile ? 2 : 1,
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
                order: isMobile ? 1 : 2,
              }}
            >
              <MdSave size={20} />
              {isEditMode ? 'Update Vendor' : 'Add Vendor'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEditVendorPage;
