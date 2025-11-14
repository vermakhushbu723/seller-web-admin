import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack, MdPerson, MdEmail, MdPhone, MdLocationOn, MdPayment, MdLocalShipping } from 'react-icons/md';
import { AppColors } from '../../../core/constants/colors.js';
import { AppDimensions } from '../../../core/constants/dimensions.js';
import { useResponsive } from '../../../core/utils/useResponsive.js';

const OrderDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isMobile, isTablet } = useResponsive();

  const order = {
    id: 'ORD-001',
    customer: { name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 98765 43210' },
    items: [
      { name: 'iPhone 15 Pro', qty: 1, price: '₹1,49,900', image: '📱' },
      { name: 'AirPods Pro', qty: 1, price: '₹24,900', image: '🎧' },
    ],
    subtotal: '₹1,74,800',
    shipping: '₹500',
    tax: '₹31,464',
    total: '₹2,06,764',
    status: 'Completed',
    paymentStatus: 'Paid',
    shippingAddress: '123 Street, Bangalore, Karnataka - 560001',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-18',
  };

  return (
    <div style={{ padding: isMobile ? AppDimensions.paddingM : AppDimensions.paddingL }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: AppDimensions.marginL }}>
        <button onClick={() => navigate('/orders')} style={{ padding: '0.5rem', backgroundColor: AppColors.surface, border: `1px solid ${AppColors.divider}`, borderRadius: AppDimensions.radiusM, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><MdArrowBack size={20} /></button>
        <h1 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: AppColors.textPrimary, margin: 0 }}>Order {order.id}</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '2fr 1fr', gap: AppDimensions.marginL }}>
        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Order Items</h2>
            {order.items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: AppColors.backgroundDark, borderRadius: AppDimensions.radiusM, marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '2rem' }}>{item.image}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: '600', margin: '0 0 0.25rem 0' }}>{item.name}</p>
                  <p style={{ color: AppColors.textSecondary, fontSize: '0.875rem', margin: 0 }}>Qty: {item.qty}</p>
                </div>
                <p style={{ fontWeight: '600', color: AppColors.success }}>{item.price}</p>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Customer Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><MdPerson size={24} color={AppColors.primary} /><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Name</p><p style={{ fontWeight: '600', margin: 0 }}>{order.customer.name}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><MdEmail size={24} color={AppColors.info} /><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Email</p><p style={{ fontWeight: '600', margin: 0 }}>{order.customer.email}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><MdPhone size={24} color={AppColors.success} /><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Phone</p><p style={{ fontWeight: '600', margin: 0 }}>{order.customer.phone}</p></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><MdLocationOn size={24} color={AppColors.error} /><div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Shipping Address</p><p style={{ fontWeight: '600', margin: 0 }}>{order.shippingAddress}</p></div></div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Order Summary</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: AppColors.textSecondary }}>Subtotal</span><span style={{ fontWeight: '600' }}>{order.subtotal}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: AppColors.textSecondary }}>Shipping</span><span style={{ fontWeight: '600' }}>{order.shipping}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: AppColors.textSecondary }}>Tax</span><span style={{ fontWeight: '600' }}>{order.tax}</span></div>
              <div style={{ borderTop: `2px solid ${AppColors.divider}`, paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Total</span><span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: AppColors.success }}>{order.total}</span></div>
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}`, marginBottom: AppDimensions.marginL }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Status</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.5rem 0' }}>Order Status</p><span style={{ padding: '0.5rem 1rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600', display: 'inline-block' }}>{order.status}</span></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: '0 0 0.5rem 0' }}>Payment</p><span style={{ padding: '0.5rem 1rem', backgroundColor: `${AppColors.success}20`, color: AppColors.success, borderRadius: AppDimensions.radiusM, fontSize: '0.875rem', fontWeight: '600', display: 'inline-block' }}>{order.paymentStatus}</span></div>
            </div>
          </div>

          <div style={{ backgroundColor: AppColors.surface, borderRadius: AppDimensions.radiusL, padding: AppDimensions.paddingL, boxShadow: `0 2px 8px ${AppColors.shadow}` }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Timeline</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Order Date</p><p style={{ fontWeight: '600', margin: 0 }}>{order.orderDate}</p></div>
              <div><p style={{ fontSize: '0.875rem', color: AppColors.textSecondary, margin: 0 }}>Delivery Date</p><p style={{ fontWeight: '600', margin: 0 }}>{order.deliveryDate}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
