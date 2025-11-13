import React from 'react';
import { MdVisibility } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const ProductDetailsPage = () => {
  return (
    <ComingSoonPage
      title="Product Details"
      description="View complete product information, sales history, and performance."
      IconComponent={MdVisibility}
    />
  );
};

export default ProductDetailsPage;
