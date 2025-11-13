import React from 'react';
import { MdEdit } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const EditProductPage = () => {
  return (
    <ComingSoonPage
      title="Edit Product"
      description="Update product details, pricing, and availability."
      IconComponent={MdEdit}
    />
  );
};

export default EditProductPage;
