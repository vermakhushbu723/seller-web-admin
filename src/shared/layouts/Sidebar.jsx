import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdDashboard, 
  MdAnalytics, 
  MdInventory, 
  MdShoppingCart, 
  MdBook, 
  MdAccountBalanceWallet, 
  MdPerson, 
  MdNotifications, 
  MdSupport, 
  MdSettings,
  MdMenu,
  MdMenuOpen,
  MdClose,
  MdPeople,
  MdCategory,
  MdTrendingUp,
  MdExpandMore,
  MdExpandLess,
  MdAdd,
  MdList,
  MdHistory,
  MdAccountBalance,
  MdEdit,
  MdBusiness,
  MdDescription,
  MdManageAccounts,
  MdPrivacyTip,
  MdGavel,
  MdEmail,
  MdDeleteForever,
  MdChat,
  MdHelp,
  MdVisibility,
  MdBarChart,
} from 'react-icons/md';
import { AppColors } from '../../core/constants/colors.js';
import { AppDimensions } from '../../core/constants/dimensions.js';
import { AppRoutes } from '../../core/constants/routes.js';
import { useResponsive } from '../../core/utils/useResponsive.js';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const { isMobile, isTablet } = useResponsive();

  // Close sidebar on route change for mobile/tablet
  useEffect(() => {
    if ((isMobile || isTablet) && isOpen) {
      onClose();
    }
  }, [location.pathname]);

  const menuItems = [
    { path: AppRoutes.dashboard, label: 'Dashboard', icon: MdDashboard },
    { path: AppRoutes.salesOverview, label: 'Sales Overview', icon: MdTrendingUp },
    { path: AppRoutes.analytics, label: 'Analytics', icon: MdAnalytics },
    { 
      label: 'Vendors', 
      icon: MdPeople,
      children: [
        { path: AppRoutes.vendors, label: 'All Vendors', icon: MdList },
        { path: '/vendors/add', label: 'Add Vendor', icon: MdAdd },
      ]
    },
    { 
      label: 'Products', 
      icon: MdInventory,
      children: [
        { path: AppRoutes.products, label: 'All Products', icon: MdList },
        { path: '/products/add', label: 'Add Product', icon: MdAdd },
        { path: AppRoutes.categories, label: 'Categories', icon: MdCategory },
      ]
    },
    { 
      label: 'Orders', 
      icon: MdShoppingCart,
      children: [
        { path: AppRoutes.orders, label: 'All Orders', icon: MdList },
      ]
    },
    { 
      label: 'Wallet', 
      icon: MdAccountBalanceWallet,
      children: [
        { path: AppRoutes.wallet, label: 'Overview', icon: MdVisibility },
        { path: '/wallet/transactions', label: 'Transactions', icon: MdHistory },
        { path: '/wallet/withdraw', label: 'Withdraw', icon: MdAccountBalance },
        { path: '/wallet/bank-details', label: 'Bank Details', icon: MdAccountBalance },
      ]
    },
    { 
      label: 'Catalog', 
      icon: MdBook,
      children: [
        { path: AppRoutes.catalog, label: 'All Catalogs', icon: MdList },
        { path: '/catalog/create', label: 'Create Catalog', icon: MdAdd },
      ]
    },
    { 
      label: 'Profile', 
      icon: MdPerson,
      children: [
        { path: AppRoutes.profile, label: 'My Profile', icon: MdPerson },
        { path: '/profile/edit', label: 'Edit Profile', icon: MdEdit },
        { path: '/profile/business', label: 'Business Info', icon: MdBusiness },
        { path: '/profile/gst-pan', label: 'GST & PAN', icon: MdDescription },
      ]
    },
    { 
      label: 'Support', 
      icon: MdSupport,
      children: [
        { path: AppRoutes.support, label: 'Support Center', icon: MdSupport },
        { path: '/support/chat', label: 'Live Chat', icon: MdChat },
        { path: '/support/faq', label: 'FAQ', icon: MdHelp },
      ]
    },
    { 
      label: 'Settings', 
      icon: MdSettings,
      children: [
        { path: AppRoutes.settings, label: 'General', icon: MdSettings },
        { path: '/settings/account', label: 'Account', icon: MdManageAccounts },
        { path: '/settings/privacy', label: 'Privacy', icon: MdPrivacyTip },
        { path: '/settings/terms', label: 'Terms', icon: MdGavel },
      ]
    },
    { path: AppRoutes.notifications, label: 'Notifications', icon: MdNotifications },
  ];

  const isActive = (path) => location.pathname === path;
  
  const isParentActive = (children) => {
    return children?.some(child => location.pathname.startsWith(child.path));
  };

  const toggleMenu = (label) => {
    setExpandedMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleMenuItemClick = () => {
    if (isMobile || isTablet) {
      onClose();
    }
  };

  // Determine sidebar width
  const getSidebarWidth = () => {
    if (isMobile || isTablet) return '280px';
    if (collapsed) return AppDimensions.sidebarCollapsedWidth;
    return AppDimensions.sidebarWidth;
  };

  // Determine sidebar left position
  const getSidebarLeft = () => {
    if (isMobile || isTablet) {
      return isOpen ? 0 : '-280px';
    }
    return 0;
  };

  return (
    <>
      {/* Mobile/Tablet Overlay */}
      {(isMobile || isTablet) && isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99,
            transition: 'opacity 300ms',
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          width: getSidebarWidth(),
          height: '100vh',
          background: AppColors.surface,
          borderRight: `1px solid ${AppColors.divider}`,
          position: 'fixed',
          left: getSidebarLeft(),
          top: 0,
          transition: 'all 300ms ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
          boxShadow: (isMobile || isTablet) && isOpen ? '4px 0 8px rgba(0, 0, 0, 0.1)' : 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            padding: AppDimensions.paddingL,
            borderBottom: `1px solid ${AppColors.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: AppDimensions.headerHeight,
            flexShrink: 0,
          }}
        >
          {(!collapsed || isMobile || isTablet) && (
            <h1
              style={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 700,
                background: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Seller Admin
            </h1>
          )}
          {(isMobile || isTablet) ? (
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: AppColors.textPrimary,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MdClose size={24} />
            </button>
          ) : (
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: AppColors.textPrimary,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {collapsed ? <MdMenu size={24} /> : <MdMenuOpen size={24} />}
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: AppDimensions.paddingS }}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedMenus[item.label];
            const isParentHighlighted = hasChildren && isParentActive(item.children);
            
            return (
              <div key={item.label} style={{ marginBottom: AppDimensions.marginS }}>
                {/* Parent Menu Item */}
                {hasChildren ? (
                  <div
                    onClick={() => !collapsed && toggleMenu(item.label)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: AppDimensions.paddingM,
                      borderRadius: AppDimensions.radiusM,
                      textDecoration: 'none',
                      color: isParentHighlighted ? AppColors.primary : AppColors.textSecondary,
                      background: isParentHighlighted ? `${AppColors.primary}10` : 'transparent',
                      fontWeight: isParentHighlighted ? 600 : 500,
                      transition: 'all 200ms ease-in-out',
                      cursor: 'pointer',
                      fontSize: isMobile ? '0.875rem' : '0.95rem',
                    }}
                    onMouseEnter={(e) => {
                      if (!isParentHighlighted) {
                        e.currentTarget.style.background = AppColors.surfaceVariant;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isParentHighlighted) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: AppDimensions.spacingM, flex: 1 }}>
                      <IconComponent size={isMobile ? 20 : 22} />
                      {(!collapsed || isMobile || isTablet) && <span>{item.label}</span>}
                    </div>
                    {(!collapsed || isMobile || isTablet) && (
                      isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={handleMenuItemClick}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: AppDimensions.spacingM,
                      padding: AppDimensions.paddingM,
                      borderRadius: AppDimensions.radiusM,
                      textDecoration: 'none',
                      color: isActive(item.path) ? AppColors.primary : AppColors.textSecondary,
                      background: isActive(item.path) ? `${AppColors.primary}15` : 'transparent',
                      fontWeight: isActive(item.path) ? 600 : 500,
                      transition: 'all 200ms ease-in-out',
                      cursor: 'pointer',
                      fontSize: isMobile ? '0.875rem' : '0.95rem',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.background = AppColors.surfaceVariant;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <IconComponent size={isMobile ? 20 : 22} />
                    {(!collapsed || isMobile || isTablet) && <span>{item.label}</span>}
                  </Link>
                )}

                {/* Child Menu Items */}
                {hasChildren && isExpanded && (!collapsed || isMobile || isTablet) && (
                  <div style={{ 
                    marginTop: AppDimensions.marginXS,
                    marginLeft: isMobile ? '1rem' : '1.5rem',
                    borderLeft: `2px solid ${AppColors.divider}`,
                    paddingLeft: AppDimensions.paddingS,
                  }}>
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      return (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={handleMenuItemClick}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: AppDimensions.spacingS,
                            padding: `${AppDimensions.paddingS} ${AppDimensions.paddingM}`,
                            marginBottom: AppDimensions.marginXS,
                            borderRadius: AppDimensions.radiusS,
                            textDecoration: 'none',
                            color: isActive(child.path) ? AppColors.primary : AppColors.textSecondary,
                            background: isActive(child.path) ? `${AppColors.primary}20` : 'transparent',
                            fontWeight: isActive(child.path) ? 600 : 400,
                            fontSize: isMobile ? '0.8rem' : '0.875rem',
                            transition: 'all 150ms ease-in-out',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive(child.path)) {
                              e.currentTarget.style.background = `${AppColors.primary}08`;
                              e.currentTarget.style.transform = 'translateX(2px)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive(child.path)) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }
                          }}
                        >
                          <ChildIcon size={isMobile ? 16 : 18} />
                          <span>{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
