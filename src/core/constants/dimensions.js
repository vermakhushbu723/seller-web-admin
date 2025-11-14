// App Dimensions Constants
export const AppDimensions = {
  // Spacing
  spacingXS: '4px',
  spacingS: '8px',
  spacingM: '16px',
  spacingL: '24px',
  spacingXL: '32px',
  spacingXXL: '48px',

  // Padding
  paddingXS: '4px',
  paddingS: '8px',
  paddingM: '12px',
  paddingL: '16px',
  paddingXL: '24px',
  paddingXXL: '32px',

  // Margin
  marginXS: '4px',
  marginS: '8px',
  marginM: '16px',
  marginL: '24px',
  marginXL: '32px',
  marginXXL: '48px',

  // Border Radius
  radiusXS: '4px',
  radiusS: '6px',
  radiusM: '8px',
  radiusL: '12px',
  radiusXL: '16px',
  radiusXXL: '24px',
  radiusFull: '9999px',

  // Card - Compact Admin Panel Sizes
  cardRadius: '8px',
  cardPadding: '12px',
  cardElevation: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  // Elevation - Subtle Shadows
  elevationNone: '0',
  elevationS: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
  elevationM: '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  elevationL: '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
  elevationXL: '0 8px 12px -2px rgba(0, 0, 0, 0.1)',

  // Icon Sizes - Compact
  iconXS: '14px',
  iconS: '16px',
  iconM: '20px',
  iconL: '24px',
  iconXL: '32px',

  // Button Heights - Compact
  buttonSmall: '28px',
  buttonMedium: '32px',
  buttonLarge: '36px',

  // Input Heights - Compact
  inputSmall: '32px',
  inputMedium: '36px',
  inputLarge: '40px',

  // Container Width
  containerSmall: '640px',
  containerMedium: '768px',
  containerLarge: '1024px',
  containerXLarge: '1280px',
  containerXXLarge: '1536px',

  // Sidebar - Compact
  sidebarWidth: '260px',
  sidebarCollapsedWidth: '60px',

  // Header - Compact
  headerHeight: '56px',

  // Responsive Breakpoints (in pixels)
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    wide: 1536,
  },

  // Responsive Grid Columns
  gridColumns: {
    mobile: 1,
    tablet: 2,
    laptop: 3,
    desktop: 4,
  },

  // Responsive Spacing
  responsivePadding: {
    mobile: '12px',
    tablet: '16px',
    laptop: '24px',
    desktop: '32px',
  },

  responsiveGap: {
    mobile: '12px',
    tablet: '16px',
    laptop: '20px',
    desktop: '24px',
  },
};

// Helper function to get responsive value
export const getResponsiveValue = (values, width) => {
  if (width < AppDimensions.breakpoints.mobile) return values.mobile;
  if (width < AppDimensions.breakpoints.tablet) return values.tablet || values.mobile;
  if (width < AppDimensions.breakpoints.laptop) return values.laptop || values.tablet || values.mobile;
  if (width < AppDimensions.breakpoints.desktop) return values.desktop || values.laptop || values.tablet || values.mobile;
  return values.wide || values.desktop || values.laptop || values.tablet || values.mobile;
};
