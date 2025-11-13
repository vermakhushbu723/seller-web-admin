// App Color Constants - Same as Flutter seller_app
export const AppColors = {
  // Primary Colors
  primary: '#6B46C1',
  primaryDark: '#553C9A',
  primaryLight: '#8B5CF6',

  // Secondary Colors
  secondary: '#EC4899',
  secondaryDark: '#DB2777',
  secondaryLight: '#F472B6',

  // Accent Colors
  accent: '#10B981',
  accentDark: '#059669',
  accentLight: '#34D399',

  // Background Colors
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F5F9',

  // Text Colors
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textTertiary: '#94A3B8',

  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Border & Divider
  divider: '#E2E8F0',
  border: '#CBD5E1',

  // Grey Scale
  grey50: '#F9FAFB',
  grey100: '#F3F4F6',
  grey200: '#E5E7EB',
  grey300: '#D1D5DB',
  grey400: '#9CA3AF',
  grey500: '#6B7280',
  grey600: '#4B5563',
  grey700: '#374151',
  grey800: '#1F2937',
  grey900: '#111827',
};

// Gradients
export const AppGradients = {
  primary: `linear-gradient(135deg, ${AppColors.primary} 0%, ${AppColors.primaryLight} 100%)`,
  secondary: `linear-gradient(135deg, ${AppColors.secondary} 0%, ${AppColors.secondaryLight} 100%)`,
  success: `linear-gradient(135deg, ${AppColors.success} 0%, ${AppColors.accentLight} 100%)`,
  shimmer: 'linear-gradient(90deg, #EBEBF4 0%, #F4F4F4 50%, #EBEBF4 100%)',
};
