// App Routes Constants
export const AppRoutes = {
  // Auth Routes
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  otpVerification: '/otp-verification',

  // Main App Routes
  dashboard: '/',
  analytics: '/analytics',

  // Product Routes
  products: '/products',
  addProduct: '/products/add',
  editProduct: '/products/edit/:id',
  productDetails: '/products/:id',

  // Order Routes
  orders: '/orders',
  orderDetails: '/orders/:id',
  orderTracking: '/orders/tracking/:id',
  updateOrderStatus: '/orders/update-status/:id',

  // Catalog Routes
  catalog: '/catalog',
  createCatalog: '/catalog/create',
  catalogDetails: '/catalog/:id',
  catalogAnalytics: '/catalog/analytics/:id',

  // Wallet Routes
  wallet: '/wallet',
  transactionHistory: '/wallet/transactions',
  withdraw: '/wallet/withdraw',
  bankDetails: '/wallet/bank-details',

  // Profile Routes
  profile: '/profile',
  editProfile: '/profile/edit',
  businessProfile: '/profile/business',
  gstPanSetup: '/profile/gst-pan-setup',

  // Notification Routes
  notifications: '/notifications',

  // Support Routes
  support: '/support',
  chat: '/support/chat',
  faq: '/support/faq',

  // Settings Routes
  settings: '/settings',
  accountSettings: '/settings/account',
  privacyPolicy: '/settings/privacy-policy',
  terms: '/settings/terms',
  contactUs: '/settings/contact-us',
  deleteAccount: '/settings/delete-account',
};
