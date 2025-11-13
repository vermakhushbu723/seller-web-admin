import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const AddProductPage = () => {
  return (
    <ComingSoonPage
      title="Add Product"
      description="Create and list new products with detailed information and images."
      IconComponent={MdAddCircle}
    />
  );
};

export default AddProductPage;
