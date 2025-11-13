import { useState, useEffect } from 'react';
import { AppDimensions } from '../constants/dimensions.js';

/**
 * Custom hook to handle responsive design breakpoints
 * Returns current device type and window dimensions
 */
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < AppDimensions.breakpoints.tablet;
  const isTablet = windowSize.width >= AppDimensions.breakpoints.tablet && 
                   windowSize.width < AppDimensions.breakpoints.laptop;
  const isLaptop = windowSize.width >= AppDimensions.breakpoints.laptop && 
                   windowSize.width < AppDimensions.breakpoints.desktop;
  const isDesktop = windowSize.width >= AppDimensions.breakpoints.desktop;
  const isWide = windowSize.width >= AppDimensions.breakpoints.wide;

  // Device type string
  const getDeviceType = () => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    if (isLaptop) return 'laptop';
    if (isWide) return 'wide';
    return 'desktop';
  };

  // Grid columns based on screen size
  const getGridColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLaptop) return 3;
    return 4;
  };

  // Responsive padding
  const getPadding = () => {
    if (isMobile) return AppDimensions.responsivePadding.mobile;
    if (isTablet) return AppDimensions.responsivePadding.tablet;
    if (isLaptop) return AppDimensions.responsivePadding.laptop;
    return AppDimensions.responsivePadding.desktop;
  };

  // Responsive gap
  const getGap = () => {
    if (isMobile) return AppDimensions.responsiveGap.mobile;
    if (isTablet) return AppDimensions.responsiveGap.tablet;
    if (isLaptop) return AppDimensions.responsiveGap.laptop;
    return AppDimensions.responsiveGap.desktop;
  };

  // Responsive font size multiplier
  const getFontSizeMultiplier = () => {
    if (isMobile) return 0.875;
    if (isTablet) return 0.95;
    return 1;
  };

  return {
    windowSize,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isWide,
    deviceType: getDeviceType(),
    gridColumns: getGridColumns(),
    padding: getPadding(),
    gap: getGap(),
    fontSizeMultiplier: getFontSizeMultiplier(),
  };
};

export default useResponsive;
