import React from 'react';
import { MdUpdate } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const UpdateOrderStatusPage = () => {
  return (
    <ComingSoonPage
      title="Update Order Status"
      description="Change order status, update tracking, and manage delivery."
      IconComponent={MdUpdate}
    />
  );
};

export default UpdateOrderStatusPage;
