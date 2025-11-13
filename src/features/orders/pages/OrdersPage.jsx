import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const OrdersPage = () => {
  return (
    <ComingSoonPage
      title="Orders"
      description="Manage and track all customer orders, payments, and deliveries."
      IconComponent={MdShoppingCart}
    />
  );
};

export default OrdersPage;
