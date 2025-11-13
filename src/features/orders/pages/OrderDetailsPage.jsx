import React from 'react';
import { MdReceipt } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const OrderDetailsPage = () => {
  return (
    <ComingSoonPage
      title="Order Details"
      description="View complete order information, customer details, and delivery status."
      IconComponent={MdReceipt}
    />
  );
};

export default OrderDetailsPage;
