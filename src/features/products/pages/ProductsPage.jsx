import React from 'react';
import { MdInventory } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const ProductsPage = () => {
  return (
    <ComingSoonPage
      title="Products"
      description="Manage your product inventory, add new items, and update listings."
      IconComponent={MdInventory}
    />
  );
};

export default ProductsPage;
