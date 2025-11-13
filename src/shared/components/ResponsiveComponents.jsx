import React from 'react';
import { useResponsive } from '../../core/utils/useResponsive.js';

/**
 * Responsive container component that adapts padding and width based on screen size
 */
export const ResponsiveContainer = ({ children, maxWidth = 'desktop', style = {} }) => {
  const { padding } = useResponsive();

  const getMaxWidth = () => {
    switch (maxWidth) {
      case 'mobile': return '480px';
      case 'tablet': return '768px';
      case 'laptop': return '1024px';
      case 'desktop': return '1280px';
      case 'wide': return '1536px';
      case 'full': return '100%';
      default: return '1280px';
    }
  };

  return (
    <div
      style={{
        maxWidth: getMaxWidth(),
        width: '100%',
        margin: '0 auto',
        padding: padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Responsive grid component with automatic column calculation
 */
export const ResponsiveGrid = ({ 
  children, 
  columns = { mobile: 1, tablet: 2, laptop: 3, desktop: 4 },
  gap,
  style = {} 
}) => {
  const { isMobile, isTablet, isLaptop, gap: defaultGap } = useResponsive();

  const getColumns = () => {
    if (isMobile) return columns.mobile || 1;
    if (isTablet) return columns.tablet || 2;
    if (isLaptop) return columns.laptop || 3;
    return columns.desktop || 4;
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
        gap: gap || defaultGap,
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Responsive card component with adaptive padding
 */
export const ResponsiveCard = ({ 
  children, 
  padding: customPadding,
  onClick,
  hoverable = false,
  style = {} 
}) => {
  const { isMobile, isTablet } = useResponsive();
  const [isHovered, setIsHovered] = React.useState(false);

  const getPadding = () => {
    if (customPadding) return customPadding;
    if (isMobile) return '12px';
    if (isTablet) return '16px';
    return '24px';
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      style={{
        padding: getPadding(),
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: isHovered 
          ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
          : '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'all 200ms ease-in-out',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        cursor: onClick || hoverable ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Responsive text component with adaptive font sizes
 */
export const ResponsiveText = ({ 
  variant = 'body',
  children,
  style = {},
  ...props
}) => {
  const { isMobile, isTablet } = useResponsive();

  const getFontSize = () => {
    const sizes = {
      h1: { mobile: '1.75rem', tablet: '2rem', desktop: '2.5rem' },
      h2: { mobile: '1.5rem', tablet: '1.75rem', desktop: '2rem' },
      h3: { mobile: '1.25rem', tablet: '1.5rem', desktop: '1.75rem' },
      h4: { mobile: '1.125rem', tablet: '1.25rem', desktop: '1.5rem' },
      body: { mobile: '0.875rem', tablet: '1rem', desktop: '1rem' },
      small: { mobile: '0.75rem', tablet: '0.813rem', desktop: '0.875rem' },
    };

    const variantSizes = sizes[variant] || sizes.body;
    if (isMobile) return variantSizes.mobile;
    if (isTablet) return variantSizes.tablet;
    return variantSizes.desktop;
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component
      style={{
        fontSize: getFontSize(),
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default {
  Container: ResponsiveContainer,
  Grid: ResponsiveGrid,
  Card: ResponsiveCard,
  Text: ResponsiveText,
};
