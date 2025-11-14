import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdd, MdSearch, MdEdit, MdVisibility, MdFilterList } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { AppTypography } from '../../../core/constants/typography.js';
import { AppRoutes } from '../../../core/constants/routes.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';
import Card from '../../../shared/components/Card.jsx';
import Table from '../../../shared/components/Table.jsx';
import Pagination from '../../../shared/components/Pagination.jsx';

const VendorsPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock vendor data
  const vendors = [
    {
      id: 1,
      businessName: 'Tech Solutions Pvt Ltd',
      ownerName: 'Rajesh Kumar',
      email: 'rajesh@techsolutions.com',
      phone: '+91 98765 43210',
      gst: '29ABCDE1234F1Z5',
      status: 'Active',
      totalProducts: 45,
      totalSales: '₹2,45,000',
      joinedDate: '15 Jan 2024',
    },
    {
      id: 2,
      businessName: 'Fashion Hub',
      ownerName: 'Priya Sharma',
      email: 'priya@fashionhub.com',
      phone: '+91 87654 32109',
      gst: '27FGHIJ5678K1L9',
      status: 'Active',
      totalProducts: 128,
      totalSales: '₹5,67,890',
      joinedDate: '22 Feb 2024',
    },
    {
      id: 3,
      businessName: 'Home Decor Store',
      ownerName: 'Amit Patel',
      email: 'amit@homedecor.com',
      phone: '+91 76543 21098',
      gst: '24MNOPQ9012R3S4',
      status: 'Inactive',
      totalProducts: 67,
      totalSales: '₹1,23,456',
      joinedDate: '10 Mar 2024',
    },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = 
      vendor.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || vendor.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? AppColors.success : AppColors.error;
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        marginBottom: AppDimensions.marginL,
        gap: isMobile ? AppDimensions.marginM : 0,
      }}>
        <div>
          <h1 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 'bold',
            color: AppColors.textPrimary,
            margin: 0,
          }}>
            Vendor Management
          </h1>
          <p style={{
            color: AppColors.textSecondary,
            fontSize: '0.875rem',
            margin: '0.5rem 0 0 0',
          }}>
            Manage all vendor accounts and details
          </p>
        </div>

        <button
          onClick={() => navigate(AppRoutes.addVendor)}
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
          <MdAdd size={20} />
          Add Vendor
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: AppDimensions.marginM,
        marginBottom: AppDimensions.marginL,
      }}>
        {[
          { label: 'Total Vendors', value: '3', color: AppColors.primary },
          { label: 'Active Vendors', value: '2', color: AppColors.success },
          { label: 'Inactive Vendors', value: '1', color: AppColors.error },
          { label: 'Total Products', value: '240', color: AppColors.info },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              padding: AppDimensions.paddingL,
              backgroundColor: AppColors.surface,
              borderRadius: AppDimensions.radiusM,
              boxShadow: `0 2px 8px ${AppColors.shadow}`,
            }}
          >
            <p style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0 0 0.5rem 0',
            }}>
              {stat.label}
            </p>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: stat.color,
              margin: 0,
            }}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: AppDimensions.marginM,
        marginBottom: AppDimensions.marginL,
      }}>
        <div style={{
          position: 'relative',
          flex: isMobile ? 'none' : 1,
        }}>
          <MdSearch
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: AppColors.textSecondary,
            }}
            size={20}
          />
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              border: `1px solid ${AppColors.divider}`,
              borderRadius: AppDimensions.radiusM,
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            border: `1px solid ${AppColors.divider}`,
            borderRadius: AppDimensions.radiusM,
            fontSize: '1rem',
            outline: 'none',
            backgroundColor: AppColors.surface,
            cursor: 'pointer',
            minWidth: isMobile ? '100%' : '150px',
          }}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Vendors List */}
      <div style={{
        backgroundColor: AppColors.surface,
        borderRadius: AppDimensions.radiusM,
        boxShadow: `0 2px 8px ${AppColors.shadow}`,
        overflow: 'hidden',
      }}>
        {isMobile ? (
          // Mobile Card View
          <div>
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                style={{
                  padding: AppDimensions.paddingM,
                  borderBottom: `1px solid ${AppColors.divider}`,
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: AppColors.textPrimary,
                      margin: '0 0 0.25rem 0',
                    }}>
                      {vendor.businessName}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: AppColors.textSecondary,
                      margin: 0,
                    }}>
                      {vendor.ownerName}
                    </p>
                  </div>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: `${getStatusColor(vendor.status)}20`,
                    color: getStatusColor(vendor.status),
                    borderRadius: AppDimensions.radiusS,
                    fontSize: '0.75rem',
                    fontWeight: '500',
                  }}>
                    {vendor.status}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                  fontSize: '0.813rem',
                }}>
                  <div>
                    <span style={{ color: AppColors.textSecondary }}>Products:</span>
                    <span style={{ color: AppColors.textPrimary, fontWeight: '500', marginLeft: '0.25rem' }}>
                      {vendor.totalProducts}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: AppColors.textSecondary }}>Sales:</span>
                    <span style={{ color: AppColors.textPrimary, fontWeight: '500', marginLeft: '0.25rem' }}>
                      {vendor.totalSales}
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                }}>
                  <button
                    onClick={() => navigate(`/vendors/${vendor.id}`)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: AppColors.primaryLight,
                      color: AppColors.primary,
                      border: 'none',
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.813rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                    }}
                  >
                    <MdVisibility size={16} />
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/vendors/edit/${vendor.id}`)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: AppColors.secondaryLight,
                      color: AppColors.secondary,
                      border: 'none',
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.813rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                    }}
                  >
                    <MdEdit size={16} />
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Table View
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: AppColors.backgroundDark }}>
                <th style={tableHeaderStyle}>Business Name</th>
                <th style={tableHeaderStyle}>Owner Name</th>
                <th style={tableHeaderStyle}>Contact</th>
                <th style={tableHeaderStyle}>GST Number</th>
                <th style={tableHeaderStyle}>Products</th>
                <th style={tableHeaderStyle}>Total Sales</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  style={{
                    borderBottom: `1px solid ${AppColors.divider}`,
                  }}
                >
                  <td style={tableCellStyle}>
                    <div style={{ fontWeight: '600', color: AppColors.textPrimary }}>
                      {vendor.businessName}
                    </div>
                  </td>
                  <td style={tableCellStyle}>{vendor.ownerName}</td>
                  <td style={tableCellStyle}>
                    <div style={{ fontSize: '0.813rem' }}>
                      <div>{vendor.email}</div>
                      <div style={{ color: AppColors.textSecondary }}>{vendor.phone}</div>
                    </div>
                  </td>
                  <td style={tableCellStyle}>{vendor.gst}</td>
                  <td style={tableCellStyle}>{vendor.totalProducts}</td>
                  <td style={tableCellStyle}>
                    <span style={{ fontWeight: '600', color: AppColors.success }}>
                      {vendor.totalSales}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${getStatusColor(vendor.status)}20`,
                      color: getStatusColor(vendor.status),
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.813rem',
                      fontWeight: '500',
                    }}>
                      {vendor.status}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => navigate(`/vendors/${vendor.id}`)}
                        style={{
                          padding: '0.5rem',
                          backgroundColor: AppColors.primaryLight,
                          color: AppColors.primary,
                          border: 'none',
                          borderRadius: AppDimensions.radiusS,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="View Details"
                      >
                        <MdVisibility size={18} />
                      </button>
                      <button
                        onClick={() => navigate(`/vendors/edit/${vendor.id}`)}
                        style={{
                          padding: '0.5rem',
                          backgroundColor: AppColors.secondaryLight,
                          color: AppColors.secondary,
                          border: 'none',
                          borderRadius: AppDimensions.radiusS,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="Edit Vendor"
                      >
                        <MdEdit size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '1rem',
  textAlign: 'left',
  fontSize: '0.813rem',
  fontWeight: '600',
  color: AppColors.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const tableCellStyle = {
  padding: '1rem',
  fontSize: '0.875rem',
  color: AppColors.textSecondary,
};

export default VendorsPage;
