import React, { useState } from 'react';
import { MdNotifications, MdShoppingCart, MdPayment, MdInventory, MdInfo, MdCheckCircle } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const NotificationsPage = () => {
  const { isMobile } = useResponsive();
  const [filter, setFilter] = useState('all');

  const notifications = [
    { id: 1, type: 'order', title: 'New Order Received', message: 'Order #ORD-001 has been placed', time: '5 min ago', read: false, icon: MdShoppingCart, color: AppColors.primary },
    { id: 2, type: 'payment', title: 'Payment Received', message: 'Payment of ₹15,000 credited to wallet', time: '1 hour ago', read: false, icon: MdPayment, color: AppColors.success },
    { id: 3, type: 'inventory', title: 'Low Stock Alert', message: 'iPhone 15 Pro is running low on stock', time: '2 hours ago', read: true, icon: MdInventory, color: AppColors.warning },
    { id: 4, type: 'order', title: 'Order Delivered', message: 'Order #ORD-002 has been delivered', time: '5 hours ago', read: true, icon: MdCheckCircle, color: AppColors.success },
    { id: 5, type: 'info', title: 'Platform Update', message: 'New features added to dashboard', time: '1 day ago', read: true, icon: MdInfo, color: AppColors.info },
  ];

  const filtered = notifications.filter(n => filter === 'all' || (filter === 'unread' && !n.read) || n.type === filter);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ marginBottom: AppDimensions.marginL }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: '0 0 0.25rem 0' }}>Notifications</h1>
            <p style={{ color: AppColors.textSecondary, margin: 0 }}>You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
          </div>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: AppColors.backgroundDark, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600' }}>Mark all as read</button>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {['all', 'unread', 'order', 'payment', 'inventory', 'info'].map(type => (
            <button key={type} onClick={() => setFilter(type)} style={{ padding: '0.5rem 1rem', backgroundColor: filter === type ? AppColors.primary : AppColors.surface, color: filter === type ? AppColors.surface : AppColors.textPrimary, border: `1px solid ${filter === type ? AppColors.primary : AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', fontSize: '0.875rem', fontWeight: '600', textTransform: 'capitalize', whiteSpace: 'nowrap' }}>{type}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '900px' }}>
        {filtered.length === 0 ? (
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: '3rem', boxShadow: `0 2px 8px ${AppColors.shadow}`, textAlign: 'center' }}>
            <MdNotifications size={64} color={AppColors.textSecondary} style={{ margin: '0 auto 1rem' }} />
            <p style={{ fontSize: '1.125rem', color: AppColors.textSecondary, margin: 0 }}>No notifications found</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filtered.map(notification => {
              const Icon = notification.icon;
              return (
                <div key={notification.id} style={{ backgroundColor: notification.read ? AppColors.surface : `${AppColors.primary}05`, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, border: notification.read ? 'none' : `2px solid ${AppColors.primary}20`, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: `${notification.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={24} color={notification.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 }}>{notification.title}</h3>
                      {!notification.read && (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: AppColors.primary, flexShrink: 0, marginLeft: '0.5rem', marginTop: '0.25rem' }} />
                      )}
                    </div>
                    <p style={{ color: AppColors.textPrimary, margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>{notification.message}</p>
                    <p style={{ color: AppColors.textSecondary, fontSize: '0.75rem', margin: 0 }}>{notification.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

