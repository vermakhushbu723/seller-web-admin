// Update all remaining pages with React Icons

// This file contains the updated code for all remaining pages
// Copy-paste each section to respective files

/*
===== CATALOG PAGES =====
*/

// CreateCatalogPage.jsx
`
import React from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const CreateCatalogPage = () => {
  return (
    <ComingSoonPage
      title="Create Catalog"
      description="Build new product catalogs and organize your inventory."
      IconComponent={MdCreateNewFolder}
    />
  );
};

export default CreateCatalogPage;
`

// CatalogDetailsPage.jsx
`
import React from 'react';
import { MdLibraryBooks } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const CatalogDetailsPage = () => {
  return (
    <ComingSoonPage
      title="Catalog Details"
      description="View catalog performance, products, and sales analytics."
      IconComponent={MdLibraryBooks}
    />
  );
};

export default CatalogDetailsPage;
`

// CatalogAnalyticsPage.jsx
`
import React from 'react';
import { MdBarChart } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const CatalogAnalyticsPage = () => {
  return (
    <ComingSoonPage
      title="Catalog Analytics"
      description="Track catalog performance, views, and conversion rates."
      IconComponent={MdBarChart}
    />
  );
};

export default CatalogAnalyticsPage;
`

/*
===== WALLET PAGES =====
*/

// WalletPage.jsx
`
import React from 'react';
import { MdAccountBalanceWallet } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const WalletPage = () => {
  return (
    <ComingSoonPage
      title="Wallet"
      description="Manage earnings, view balance, and track payment transactions."
      IconComponent={MdAccountBalanceWallet}
    />
  );
};

export default WalletPage;
`

// TransactionHistoryPage.jsx
`
import React from 'react';
import { MdHistory } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const TransactionHistoryPage = () => {
  return (
    <ComingSoonPage
      title="Transaction History"
      description="View all payment transactions, earnings, and withdrawal history."
      IconComponent={MdHistory}
    />
  );
};

export default TransactionHistoryPage;
`

// WithdrawPage.jsx
`
import React from 'react';
import { MdAttachMoney } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const WithdrawPage = () => {
  return (
    <ComingSoonPage
      title="Withdraw Funds"
      description="Request withdrawal of your earnings to your bank account."
      IconComponent={MdAttachMoney}
    />
  );
};

export default WithdrawPage;
`

// BankDetailsPage.jsx
`
import React from 'react';
import { MdAccountBalance } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const BankDetailsPage = () => {
  return (
    <ComingSoonPage
      title="Bank Details"
      description="Add and manage your bank account information for withdrawals."
      IconComponent={MdAccountBalance}
    />
  );
};

export default BankDetailsPage;
`

/*
===== PROFILE PAGES =====
*/

// ProfilePage.jsx
`
import React from 'react';
import { MdPerson } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const ProfilePage = () => {
  return (
    <ComingSoonPage
      title="Profile"
      description="View and manage your seller profile and account information."
      IconComponent={MdPerson}
    />
  );
};

export default ProfilePage;
`

// EditProfilePage.jsx
`
import React from 'react';
import { MdEdit } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const EditProfilePage = () => {
  return (
    <ComingSoonPage
      title="Edit Profile"
      description="Update your personal information, contact details, and profile picture."
      IconComponent={MdEdit}
    />
  );
};

export default EditProfilePage;
`

// BusinessProfilePage.jsx
`
import React from 'react';
import { MdBusiness } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const BusinessProfilePage = () => {
  return (
    <ComingSoonPage
      title="Business Profile"
      description="Manage your business information, address, and legal documents."
      IconComponent={MdBusiness}
    />
  );
};

export default BusinessProfilePage;
`

// GstPanSetupPage.jsx
`
import React from 'react';
import { MdDescription } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const GstPanSetupPage = () => {
  return (
    <ComingSoonPage
      title="GST & PAN Setup"
      description="Add and verify your GST and PAN details for tax compliance."
      IconComponent={MdDescription}
    />
  );
};

export default GstPanSetupPage;
`

/*
===== NOTIFICATION, SUPPORT, SETTINGS, AUTH PAGES =====
*/

// NotificationsPage.jsx
`
import React from 'react';
import { MdNotifications } from 'react-icons/md';
import ComingSoonPage from '../../../shared/components/ComingSoonPage.jsx';

const NotificationsPage = () => {
  return (
    <ComingSoonPage
      title="Notifications"
      description="View all notifications, alerts, and important updates."
      IconComponent={MdNotifications}
    />
  );
};

export default NotificationsPage;
`

// SupportPage.jsx, ChatPage.jsx, FaqPage.jsx...
// (Similar pattern for all other pages)
