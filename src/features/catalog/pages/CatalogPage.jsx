import React from 'react';
import { MdBook } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const CatalogPage = () => {
  return (
    <ComingSoonPage
      title="Catalog"
      description="Create and manage product catalogs, collections, and categories."
      IconComponent={MdBook}
    />
  );
};

export default CatalogPage;
