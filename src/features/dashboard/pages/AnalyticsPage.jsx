import React from 'react';
import { MdAnalytics } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const AnalyticsPage = () => {
  return (
    <ComingSoonPage
      title="Analytics"
      description="Track detailed analytics, performance metrics, and growth trends."
      IconComponent={MdAnalytics}
    />
  );
};

export default AnalyticsPage;
