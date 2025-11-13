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

  // Card
  cardRadius: '12px',
  cardPadding: '16px',
  cardElevation: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',

  // Elevation
  elevationNone: '0',
  elevationS: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  elevationM: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  elevationL: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  elevationXL: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

  // Icon Sizes
  iconXS: '16px',
  iconS: '20px',
  iconM: '24px',
  iconL: '32px',
  iconXL: '48px',

  // Button Heights
  buttonSmall: '32px',
  buttonMedium: '40px',
  buttonLarge: '48px',

  // Input Heights
  inputSmall: '36px',
  inputMedium: '44px',
  inputLarge: '52px',

  // Container Width
  containerSmall: '640px',
  containerMedium: '768px',
  containerLarge: '1024px',
  containerXLarge: '1280px',
  containerXXLarge: '1536px',

  // Sidebar
  sidebarWidth: '280px',
  sidebarCollapsedWidth: '80px',

  // Header
  headerHeight: '64px',

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
