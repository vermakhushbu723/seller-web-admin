import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MdArrowBack,
  MdEdit,
  MdBusiness,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccountBalance,
  MdCreditCard,
  MdVerified,
  MdInventory,
  MdShoppingCart,
  MdCurrencyRupee,
} from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const VendorDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();

  // Mock vendor data
  const vendor = {
    id: 1,
    businessName: 'Tech Solutions Pvt Ltd',
    ownerName: 'Rajesh Kumar',
    email: 'rajesh@techsolutions.com',
    phone: '+91 98765 43210',
    alternatePhone: '+91 98765 43211',
    address: '123, Tech Park, Koramangala, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560034',
    gst: '29ABCDE1234F1Z5',
    pan: 'ABCDE1234F',
    status: 'Active',
    totalProducts: 45,
    totalOrders: 128,
    totalSales: '₹2,45,000',
    pendingOrders: 5,
    completedOrders: 120,
    cancelledOrders: 3,
    joinedDate: '15 Jan 2024',
    lastActive: '2 hours ago',
    bankDetails: {
      accountHolderName: 'Rajesh Kumar',
      accountNumber: '1234567890',
      ifscCode: 'HDFC0001234',
      bankName: 'HDFC Bank',
      branch: 'Koramangala, Bangalore',
    },
  };

  const InfoCard = ({ icon: Icon, label, value, color = AppColors.primary }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: isMobile ? '1rem' : '1.25rem',
        backgroundColor: AppColors.surface,
        borderRadius: AppDimensions.radiusM,
        boxShadow: `0 2px 8px ${AppColors.shadow}`,
      }}
    >
      <div
        style={{
          padding: '0.75rem',
          backgroundColor: `${color}20`,
          borderRadius: AppDimensions.radiusM,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={24} color={color} />
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
        <p
          style={{
            fontSize: isMobile ? '0.938rem' : '1rem',
            fontWeight: '600',
            color: AppColors.textPrimary,
            margin: 0,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  const StatCard = ({ label, value, color }) => (
    <div
      style={{
        padding: isMobile ? '1rem' : '1.25rem',
        backgroundColor: AppColors.surface,
        borderRadius: AppDimensions.radiusM,
        boxShadow: `0 2px 8px ${AppColors.shadow}`,
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          fontSize: isMobile ? '1.5rem' : '1.75rem',
          fontWeight: 'bold',
          color: color,
          margin: '0 0 0.5rem 0',
        }}
      >
        {value}
      </h3>
      <p
        style={{
          fontSize: '0.875rem',
          color: AppColors.textSecondary,
          margin: 0,
        }}
      >
        {label}
      </p>
    </div>
  );

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      {/* Header */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
          <div>
            <h1
              style={{
                fontSize: isMobile ? '1.25rem' : '1.75rem',
                fontWeight: 'bold',
                color: AppColors.textPrimary,
                margin: 0,
              }}
            >
              {vendor.businessName}
            </h1>
            <p
              style={{
                color: AppColors.textSecondary,
                fontSize: '0.875rem',
                margin: '0.25rem 0 0 0',
              }}
            >
              Joined on {vendor.joinedDate} • Last active {vendor.lastActive}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/vendors/edit/${id}`)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: isMobile ? '0.625rem 1rem' : '0.75rem 1.5rem',
            backgroundColor: AppColors.primary,
            color: 'white',
            border: 'none',
            borderRadius: AppDimensions.radiusM,
            fontSize: isMobile ? '0.875rem' : '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto',
            justifyContent: 'center',
          }}
        >
          <MdEdit size={20} />
          Edit Details
        </button>
      </div>

      {/* Status Badge */}
      <div style={{ marginBottom: AppDimensions.marginL }}>
        <span
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: `${AppColors.success}20`,
            color: AppColors.success,
            borderRadius: AppDimensions.radiusM,
            fontSize: '0.875rem',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <MdVerified size={18} />
          {vendor.status}
        </span>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <StatCard label="Total Products" value={vendor.totalProducts} color={AppColors.primary} />
        <StatCard label="Total Orders" value={vendor.totalOrders} color={AppColors.secondary} />
        <StatCard label="Total Sales" value={vendor.totalSales} color={AppColors.success} />
        <StatCard label="Pending Orders" value={vendor.pendingOrders} color={AppColors.warning} />
      </div>

      {/* Main Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
          gap: AppDimensions.marginL,
        }}
      >
        {/* Business Information */}
        <div>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: AppColors.textPrimary,
              margin: `0 0 ${AppDimensions.marginM} 0`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <MdBusiness size={24} color={AppColors.primary} />
            Business Information
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: AppDimensions.marginM }}>
            <InfoCard icon={MdBusiness} label="Business Name" value={vendor.businessName} />
            <InfoCard icon={MdVerified} label="GST Number" value={vendor.gst} color={AppColors.success} />
            <InfoCard icon={MdCreditCard} label="PAN Number" value={vendor.pan} color={AppColors.info} />
            <InfoCard icon={MdLocationOn} label="Address" value={vendor.address} color={AppColors.secondary} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: AppDimensions.marginM,
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: AppColors.surface,
                  borderRadius: AppDimensions.radiusM,
                  boxShadow: `0 2px 8px ${AppColors.shadow}`,
                }}
              >
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  City
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.city}
                </p>
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: AppColors.surface,
                  borderRadius: AppDimensions.radiusM,
                  boxShadow: `0 2px 8px ${AppColors.shadow}`,
                }}
              >
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  State
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.state}
                </p>
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: AppColors.surface,
                  borderRadius: AppDimensions.radiusM,
                  boxShadow: `0 2px 8px ${AppColors.shadow}`,
                }}
              >
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  Pincode
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal & Payment Information */}
        <div>
          {/* Personal Information */}
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: AppColors.textPrimary,
              margin: `0 0 ${AppDimensions.marginM} 0`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <MdPerson size={24} color={AppColors.primary} />
            Personal Information
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: AppDimensions.marginM, marginBottom: AppDimensions.marginL }}>
            <InfoCard icon={MdPerson} label="Owner Name" value={vendor.ownerName} />
            <InfoCard icon={MdEmail} label="Email" value={vendor.email} color={AppColors.info} />
            <InfoCard icon={MdPhone} label="Phone" value={vendor.phone} color={AppColors.success} />
            {vendor.alternatePhone && (
              <InfoCard icon={MdPhone} label="Alternate Phone" value={vendor.alternatePhone} color={AppColors.secondary} />
            )}
          </div>

          {/* Bank Details */}
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: AppColors.textPrimary,
              margin: `0 0 ${AppDimensions.marginM} 0`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <MdAccountBalance size={24} color={AppColors.primary} />
            Bank Details
          </h2>
          <div
            style={{
              padding: isMobile ? '1rem' : '1.5rem',
              backgroundColor: AppColors.surface,
              borderRadius: AppDimensions.radiusM,
              boxShadow: `0 2px 8px ${AppColors.shadow}`,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  Account Holder Name
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.bankDetails.accountHolderName}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  Account Number
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.bankDetails.accountNumber}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  IFSC Code
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.bankDetails.ifscCode}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  Bank Name
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.bankDetails.bankName}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.813rem', color: AppColors.textSecondary, margin: '0 0 0.25rem 0' }}>
                  Branch
                </p>
                <p style={{ fontSize: '0.938rem', fontWeight: '600', color: AppColors.textPrimary, margin: 0 }}>
                  {vendor.bankDetails.branch}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div style={{ marginTop: AppDimensions.marginL }}>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: AppColors.textPrimary,
            margin: `0 0 ${AppDimensions.marginM} 0`,
          }}
        >
          Order Summary
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: AppDimensions.marginM,
          }}
        >
          <StatCard label="Completed Orders" value={vendor.completedOrders} color={AppColors.success} />
          <StatCard label="Pending Orders" value={vendor.pendingOrders} color={AppColors.warning} />
          <StatCard label="Cancelled Orders" value={vendor.cancelledOrders} color={AppColors.error} />
        </div>
      </div>
    </div>
  );
};

export default VendorDetailsPage;
