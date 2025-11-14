import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdd, MdSearch, MdEdit, MdDelete, MdVisibility, MdFilterList } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { AppRoutes } from '../../../core/constants/routes.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'Electronics',
      subcategory: 'Mobile Phones',
      price: '₹1,49,900',
      stock: 25,
      status: 'Active',
      visibility: 'Visible',
      image: '📱',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      category: 'Electronics',
      subcategory: 'Mobile Phones',
      price: '₹89,999',
      stock: 18,
      status: 'Active',
      visibility: 'Visible',
      image: '📱',
    },
    {
      id: 3,
      name: 'MacBook Pro M3',
      category: 'Electronics',
      subcategory: 'Laptops',
      price: '₹1,99,900',
      stock: 8,
      status: 'Active',
      visibility: 'Visible',
      image: '💻',
    },
    {
      id: 4,
      name: 'Casual T-Shirt',
      category: 'Fashion',
      subcategory: "Men's Clothing",
      price: '₹599',
      stock: 150,
      status: 'Active',
      visibility: 'Visible',
      image: '👕',
    },
    {
      id: 5,
      name: 'Wooden Dining Table',
      category: 'Home & Living',
      subcategory: 'Furniture',
      price: '₹25,000',
      stock: 3,
      status: 'Draft',
      visibility: 'Hidden',
      image: '🪑',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? AppColors.success : AppColors.warning;
  };

  const getStockColor = (stock) => {
    if (stock === 0) return AppColors.error;
    if (stock < 10) return AppColors.warning;
    return AppColors.success;
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
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
        <div>
          <h1
            style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              color: AppColors.textPrimary,
              margin: 0,
            }}
          >
            Products
          </h1>
          <p
            style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0.5rem 0 0 0',
            }}
          >
            Manage your product inventory
          </p>
        </div>

        <button
          onClick={() => navigate(AppRoutes.addProduct)}
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
          Add Product
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        {[
          { label: 'Total Products', value: products.length, color: AppColors.primary },
          { label: 'Active', value: products.filter((p) => p.status === 'Active').length, color: AppColors.success },
          { label: 'Low Stock', value: products.filter((p) => p.stock < 10).length, color: AppColors.warning },
          { label: 'Out of Stock', value: products.filter((p) => p.stock === 0).length, color: AppColors.error },
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
            <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
              {stat.label}
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: stat.color, margin: 0 }}>
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <div style={{ position: 'relative', flex: 1 }}>
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
            placeholder="Search products..."
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
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
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
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home & Living">Home & Living</option>
        </select>

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
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusM,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
          overflow: 'hidden',
        }}
      >
        {isMobile ? (
          <div>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  padding: AppDimensions.paddingM,
                  borderBottom: `1px solid ${AppColors.divider}`,
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      fontSize: '2.5rem',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: AppColors.backgroundDark,
                      borderRadius: AppDimensions.radiusM,
                    }}
                  >
                    {product.image}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: AppColors.textPrimary, margin: '0 0 0.25rem 0' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>
                      {product.category}
                    </p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: AppColors.success, margin: '0.25rem 0 0 0' }}>
                      {product.price}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${getStatusColor(product.status)}20`,
                      color: getStatusColor(product.status),
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    {product.status}
                  </span>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${getStockColor(product.stock)}20`,
                      color: getStockColor(product.stock),
                      borderRadius: AppDimensions.radiusS,
                      fontSize: '0.75rem',
                      fontWeight: '500',
                    }}
                  >
                    Stock: {product.stock}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
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
                    onClick={() => navigate(`/products/edit/${product.id}`)}
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
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: AppColors.backgroundDark }}>
                <th style={tableHeaderStyle}>Product</th>
                <th style={tableHeaderStyle}>Category</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Stock</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Visibility</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} style={{ borderBottom: `1px solid ${AppColors.divider}` }}>
                  <td style={tableCellStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          fontSize: '1.5rem',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: AppColors.backgroundDark,
                          borderRadius: AppDimensions.radiusS,
                        }}
                      >
                        {product.image}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', color: AppColors.textPrimary }}>{product.name}</div>
                        <div style={{ fontSize: '0.813rem', color: AppColors.textSecondary }}>{product.subcategory}</div>
                      </div>
                    </div>
                  </td>
                  <td style={tableCellStyle}>{product.category}</td>
                  <td style={tableCellStyle}>
                    <span style={{ fontWeight: '600', color: AppColors.success }}>{product.price}</span>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: `${getStockColor(product.stock)}20`,
                        color: getStockColor(product.stock),
                        borderRadius: AppDimensions.radiusS,
                        fontSize: '0.813rem',
                        fontWeight: '500',
                      }}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: `${getStatusColor(product.status)}20`,
                        color: getStatusColor(product.status),
                        borderRadius: AppDimensions.radiusS,
                        fontSize: '0.813rem',
                        fontWeight: '500',
                      }}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td style={tableCellStyle}>{product.visibility}</td>
                  <td style={tableCellStyle}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => navigate(`/products/${product.id}`)}
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
                      >
                        <MdVisibility size={18} />
                      </button>
                      <button
                        onClick={() => navigate(`/products/edit/${product.id}`)}
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

export default ProductsPage;
