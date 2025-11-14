import React, { useState } from 'react';
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdFolder,
  MdSubdirectoryArrowRight,
  MdExpandMore,
  MdChevronRight,
} from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const CategoriesPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const [expandedCategories, setExpandedCategories] = useState(new Set([1, 2]));
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [selectedParentId, setSelectedParentId] = useState(null);

  // Mock categories data
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Electronics',
      productCount: 45,
      subcategories: [
        { id: 101, name: 'Mobile Phones', productCount: 20 },
        { id: 102, name: 'Laptops', productCount: 15 },
        { id: 103, name: 'Accessories', productCount: 10 },
      ],
    },
    {
      id: 2,
      name: 'Fashion',
      productCount: 128,
      subcategories: [
        { id: 201, name: "Men's Clothing", productCount: 50 },
        { id: 202, name: "Women's Clothing", productCount: 60 },
        { id: 203, name: 'Footwear', productCount: 18 },
      ],
    },
    {
      id: 3,
      name: 'Home & Living',
      productCount: 67,
      subcategories: [
        { id: 301, name: 'Furniture', productCount: 30 },
        { id: 302, name: 'Decor', productCount: 25 },
        { id: 303, name: 'Kitchen', productCount: 12 },
      ],
    },
  ]);

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleAddCategory = () => {
    setEditingCategory(null);
    setShowAddCategoryModal(true);
  };

  const handleAddSubcategory = (parentId) => {
    setSelectedParentId(parentId);
    setShowAddSubcategoryModal(true);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setShowAddCategoryModal(true);
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((cat) => cat.id !== categoryId));
    }
  };

  const handleDeleteSubcategory = (categoryId, subcategoryId) => {
    if (window.confirm('Are you sure you want to delete this subcategory?')) {
      setCategories(
        categories.map((cat) =>
          cat.id === categoryId
            ? {
                ...cat,
                subcategories: cat.subcategories.filter((sub) => sub.id !== subcategoryId),
              }
            : cat
        )
      );
    }
  };

  const CategoryModal = ({ isOpen, onClose, category, isSubcategory, parentId }) => {
    const [categoryName, setCategoryName] = useState(category?.name || '');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to save category/subcategory
      console.log('Saving:', categoryName);
      onClose();
    };

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: isMobile ? '1rem' : '2rem',
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: AppColors.surface,
            borderRadius: AppDimensions.radiusL,
            padding: isMobile ? '1.5rem' : '2rem',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2
            style={{
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              fontWeight: '600',
              color: AppColors.textPrimary,
              margin: '0 0 1.5rem 0',
            }}
          >
            {category ? 'Edit' : 'Add'} {isSubcategory ? 'Subcategory' : 'Category'}
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: AppColors.textPrimary,
                  marginBottom: '0.5rem',
                }}
              >
                {isSubcategory ? 'Subcategory' : 'Category'} Name
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder={`Enter ${isSubcategory ? 'subcategory' : 'category'} name`}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${AppColors.divider}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
              }}
            >
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: AppColors.surface,
                  color: AppColors.textPrimary,
                  border: `1px solid ${AppColors.divider}`,
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '0.938rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: AppColors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: AppDimensions.radiusM,
                  fontSize: '0.938rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                {category ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

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
        <div>
          <h1
            style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              color: AppColors.textPrimary,
              margin: 0,
            }}
          >
            Category Management
          </h1>
          <p
            style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0.5rem 0 0 0',
            }}
          >
            Organize products with categories and subcategories
          </p>
        </div>

        <button
          onClick={handleAddCategory}
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
          Add Category
        </button>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: AppDimensions.marginM,
          marginBottom: AppDimensions.marginL,
        }}
      >
        <div
          style={{
            padding: AppDimensions.paddingL,
            backgroundColor: AppColors.surface,
            borderRadius: AppDimensions.radiusM,
            boxShadow: `0 2px 8px ${AppColors.shadow}`,
          }}
        >
          <p
            style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Total Categories
          </p>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: AppColors.primary,
              margin: 0,
            }}
          >
            {categories.length}
          </h2>
        </div>
        <div
          style={{
            padding: AppDimensions.paddingL,
            backgroundColor: AppColors.surface,
            borderRadius: AppDimensions.radiusM,
            boxShadow: `0 2px 8px ${AppColors.shadow}`,
          }}
        >
          <p
            style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Total Subcategories
          </p>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: AppColors.secondary,
              margin: 0,
            }}
          >
            {categories.reduce((sum, cat) => sum + cat.subcategories.length, 0)}
          </h2>
        </div>
        <div
          style={{
            padding: AppDimensions.paddingL,
            backgroundColor: AppColors.surface,
            borderRadius: AppDimensions.radiusM,
            boxShadow: `0 2px 8px ${AppColors.shadow}`,
          }}
        >
          <p
            style={{
              color: AppColors.textSecondary,
              fontSize: '0.875rem',
              margin: '0 0 0.5rem 0',
            }}
          >
            Total Products
          </p>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: AppColors.success,
              margin: 0,
            }}
          >
            {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
          </h2>
        </div>
      </div>

      {/* Categories List */}
      <div
        style={{
          backgroundColor: AppColors.surface,
          borderRadius: AppDimensions.radiusL,
          boxShadow: `0 2px 8px ${AppColors.shadow}`,
          overflow: 'hidden',
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              borderBottom: `1px solid ${AppColors.divider}`,
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '1rem' : '1.25rem',
                backgroundColor: expandedCategories.has(category.id)
                  ? AppColors.primaryLight + '20'
                  : 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => toggleCategory(category.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                {expandedCategories.has(category.id) ? (
                  <MdExpandMore size={24} color={AppColors.primary} />
                ) : (
                  <MdChevronRight size={24} color={AppColors.textSecondary} />
                )}
                <MdFolder size={24} color={AppColors.primary} />
                <div>
                  <h3
                    style={{
                      fontSize: isMobile ? '1rem' : '1.125rem',
                      fontWeight: '600',
                      color: AppColors.textPrimary,
                      margin: 0,
                    }}
                  >
                    {category.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.813rem',
                      color: AppColors.textSecondary,
                      margin: '0.25rem 0 0 0',
                    }}
                  >
                    {category.productCount} products • {category.subcategories.length} subcategories
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleAddSubcategory(category.id)}
                  style={{
                    padding: isMobile ? '0.5rem' : '0.625rem',
                    backgroundColor: AppColors.successLight,
                    color: AppColors.success,
                    border: 'none',
                    borderRadius: AppDimensions.radiusS,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  title="Add Subcategory"
                >
                  <MdAdd size={18} />
                </button>
                <button
                  onClick={() => handleEditCategory(category)}
                  style={{
                    padding: isMobile ? '0.5rem' : '0.625rem',
                    backgroundColor: AppColors.secondaryLight,
                    color: AppColors.secondary,
                    border: 'none',
                    borderRadius: AppDimensions.radiusS,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  title="Edit Category"
                >
                  <MdEdit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  style={{
                    padding: isMobile ? '0.5rem' : '0.625rem',
                    backgroundColor: AppColors.errorLight,
                    color: AppColors.error,
                    border: 'none',
                    borderRadius: AppDimensions.radiusS,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  title="Delete Category"
                >
                  <MdDelete size={18} />
                </button>
              </div>
            </div>

            {/* Subcategories */}
            {expandedCategories.has(category.id) && (
              <div
                style={{
                  backgroundColor: AppColors.backgroundDark,
                  padding: isMobile ? '0.5rem' : '1rem',
                }}
              >
                {category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: isMobile ? '0.75rem' : '1rem',
                      marginBottom: '0.5rem',
                      backgroundColor: AppColors.surface,
                      borderRadius: AppDimensions.radiusM,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <MdSubdirectoryArrowRight size={20} color={AppColors.textSecondary} />
                      <div>
                        <h4
                          style={{
                            fontSize: isMobile ? '0.938rem' : '1rem',
                            fontWeight: '500',
                            color: AppColors.textPrimary,
                            margin: 0,
                          }}
                        >
                          {subcategory.name}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            color: AppColors.textSecondary,
                            margin: '0.25rem 0 0 0',
                          }}
                        >
                          {subcategory.productCount} products
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleEditCategory(subcategory)}
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
                        title="Edit Subcategory"
                      >
                        <MdEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteSubcategory(category.id, subcategory.id)}
                        style={{
                          padding: '0.5rem',
                          backgroundColor: AppColors.errorLight,
                          color: AppColors.error,
                          border: 'none',
                          borderRadius: AppDimensions.radiusS,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="Delete Subcategory"
                      >
                        <MdDelete size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modals */}
      <CategoryModal
        isOpen={showAddCategoryModal}
        onClose={() => setShowAddCategoryModal(false)}
        category={editingCategory}
        isSubcategory={false}
      />
      <CategoryModal
        isOpen={showAddSubcategoryModal}
        onClose={() => setShowAddSubcategoryModal(false)}
        isSubcategory={true}
        parentId={selectedParentId}
      />
    </div>
  );
};

export default CategoriesPage;
