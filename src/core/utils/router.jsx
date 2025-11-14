import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../constants/routes.js';

// Layouts
import MainLayout from '../../shared/layouts/MainLayout.jsx';

// Core Components
import ProtectedRoute from '../components/ProtectedRoute.jsx';

// Dashboard Pages
import DashboardPage from '../../features/dashboard/pages/DashboardPage.jsx';
import AnalyticsPage from '../../features/dashboard/pages/AnalyticsPage.jsx';

// Vendor Pages
import VendorsPage from '../../features/vendors/pages/VendorsPage.jsx';
import VendorDetailsPage from '../../features/vendors/pages/VendorDetailsPage.jsx';
import AddEditVendorPage from '../../features/vendors/pages/AddEditVendorPage.jsx';

// Product Pages
import ProductsPage from '../../features/products/pages/ProductsPage.jsx';
import AddProductPage from '../../features/products/pages/AddProductPage.jsx';
import EditProductPage from '../../features/products/pages/EditProductPage.jsx';
import ProductDetailsPage from '../../features/products/pages/ProductDetailsPage.jsx';

// Category Pages
import CategoriesPage from '../../features/categories/pages/CategoriesPage.jsx';

// Order Pages
import OrdersPage from '../../features/orders/pages/OrdersPage.jsx';
import OrderDetailsPage from '../../features/orders/pages/OrderDetailsPage.jsx';
import UpdateOrderStatusPage from '../../features/orders/pages/UpdateOrderStatusPage.jsx';

// Sales Pages
import SalesOverviewPage from '../../features/sales/pages/SalesOverviewPage.jsx';

// Catalog Pages
import CatalogPage from '../../features/catalog/pages/CatalogPage.jsx';
import CreateCatalogPage from '../../features/catalog/pages/CreateCatalogPage.jsx';
import CatalogDetailsPage from '../../features/catalog/pages/CatalogDetailsPage.jsx';
import CatalogAnalyticsPage from '../../features/catalog/pages/CatalogAnalyticsPage.jsx';

// Wallet Pages
import WalletPage from '../../features/wallet/pages/WalletPage.jsx';
import TransactionHistoryPage from '../../features/wallet/pages/TransactionHistoryPage.jsx';
import WithdrawPage from '../../features/wallet/pages/WithdrawPage.jsx';
import BankDetailsPage from '../../features/wallet/pages/BankDetailsPage.jsx';

// Profile Pages
import ProfilePage from '../../features/profile/pages/ProfilePage.jsx';
import EditProfilePage from '../../features/profile/pages/EditProfilePage.jsx';
import BusinessProfilePage from '../../features/profile/pages/BusinessProfilePage.jsx';
import GstPanSetupPage from '../../features/profile/pages/GstPanSetupPage.jsx';

// Notification Pages
import NotificationsPage from '../../features/notifications/pages/NotificationsPage.jsx';

// Support Pages
import SupportPage from '../../features/support/pages/SupportPage.jsx';
import ChatPage from '../../features/support/pages/ChatPage.jsx';
import FaqPage from '../../features/support/pages/FaqPage.jsx';

// Settings Pages
import SettingsPage from '../../features/settings/pages/SettingsPage.jsx';
import AccountSettingsPage from '../../features/settings/pages/AccountSettingsPage.jsx';
import PrivacyPolicyPage from '../../features/settings/pages/PrivacyPolicyPage.jsx';
import TermsPage from '../../features/settings/pages/TermsPage.jsx';
import ContactUsPage from '../../features/settings/pages/ContactUsPage.jsx';
import DeleteAccountPage from '../../features/settings/pages/DeleteAccountPage.jsx';

// Auth Pages
import LoginPage from '../../features/auth/pages/LoginPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      // Dashboard Routes
      { path: AppRoutes.dashboard, element: <DashboardPage /> },
      { path: AppRoutes.analytics, element: <AnalyticsPage /> },

      // Vendor Routes
      { path: AppRoutes.vendors, element: <VendorsPage /> },
      { path: AppRoutes.addVendor, element: <AddEditVendorPage /> },
      { path: AppRoutes.editVendor, element: <AddEditVendorPage /> },
      { path: AppRoutes.vendorDetails, element: <VendorDetailsPage /> },

      // Product Routes
      { path: AppRoutes.products, element: <ProductsPage /> },
      { path: AppRoutes.addProduct, element: <AddProductPage /> },
      { path: AppRoutes.editProduct, element: <EditProductPage /> },
      { path: AppRoutes.productDetails, element: <ProductDetailsPage /> },

      // Category Routes
      { path: AppRoutes.categories, element: <CategoriesPage /> },

      // Order Routes
      { path: AppRoutes.orders, element: <OrdersPage /> },
      { path: AppRoutes.orderDetails, element: <OrderDetailsPage /> },
      { path: AppRoutes.updateOrderStatus, element: <UpdateOrderStatusPage /> },

      // Sales Routes
      { path: AppRoutes.salesOverview, element: <SalesOverviewPage /> },

      // Catalog Routes
      { path: AppRoutes.catalog, element: <CatalogPage /> },
      { path: AppRoutes.createCatalog, element: <CreateCatalogPage /> },
      { path: AppRoutes.catalogDetails, element: <CatalogDetailsPage /> },
      { path: AppRoutes.catalogAnalytics, element: <CatalogAnalyticsPage /> },

      // Wallet Routes
      { path: AppRoutes.wallet, element: <WalletPage /> },
      { path: AppRoutes.transactionHistory, element: <TransactionHistoryPage /> },
      { path: AppRoutes.withdraw, element: <WithdrawPage /> },
      { path: AppRoutes.bankDetails, element: <BankDetailsPage /> },

      // Profile Routes
      { path: AppRoutes.profile, element: <ProfilePage /> },
      { path: AppRoutes.editProfile, element: <EditProfilePage /> },
      { path: AppRoutes.businessProfile, element: <BusinessProfilePage /> },
      { path: AppRoutes.gstPanSetup, element: <GstPanSetupPage /> },

      // Notification Routes
      { path: AppRoutes.notifications, element: <NotificationsPage /> },

      // Support Routes
      { path: AppRoutes.support, element: <SupportPage /> },
      { path: AppRoutes.chat, element: <ChatPage /> },
      { path: AppRoutes.faq, element: <FaqPage /> },

      // Settings Routes
      { path: AppRoutes.settings, element: <SettingsPage /> },
      { path: AppRoutes.accountSettings, element: <AccountSettingsPage /> },
      { path: AppRoutes.privacyPolicy, element: <PrivacyPolicyPage /> },
      { path: AppRoutes.terms, element: <TermsPage /> },
      { path: AppRoutes.contactUs, element: <ContactUsPage /> },
      { path: AppRoutes.deleteAccount, element: <DeleteAccountPage /> },
    ],
  },
  // Auth Routes (without protection)
  { path: AppRoutes.login, element: <LoginPage /> },
]);
