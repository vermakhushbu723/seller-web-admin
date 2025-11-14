import React from 'react';
import { AppColors } from '../../core/constants/colors';
import { AppDimensions } from '../../core/constants/dimensions';
import { AppTypography } from '../../core/constants/typography';

/**
 * Professional Admin Panel Card Component
 * Compact design matching industry standards
 */
const Card = ({ 
  children, 
  title = null,
  subtitle = null,
  action = null,
  noPadding = false,
  compact = true,
  style = {},
}) => {
  const styles = {
    card: {
      backgroundColor: AppColors.surface,
      borderRadius: AppDimensions.cardRadius,
      border: `1px solid ${AppColors.border}`,
      boxShadow: AppDimensions.elevationS,
      overflow: 'hidden',
      ...style,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: compact ? '12px 16px' : '16px 20px',
      borderBottom: `1px solid ${AppColors.border}`,
      backgroundColor: AppColors.surfaceVariant,
    },
    headerContent: {
      flex: 1,
    },
    title: {
      fontSize: AppTypography.fontSize.md,
      fontWeight: AppTypography.fontWeight.semibold,
      color: AppColors.textPrimary,
      margin: 0,
    },
    subtitle: {
      fontSize: AppTypography.fontSize.xs,
      color: AppColors.textSecondary,
      margin: '2px 0 0 0',
    },
    content: {
      padding: noPadding ? 0 : (compact ? '12px 16px' : '16px 20px'),
    },
  };

  const hasHeader = title || subtitle || action;

  return (
    <div style={styles.card}>
      {hasHeader && (
        <div style={styles.header}>
          <div style={styles.headerContent}>
            {title && <h3 style={styles.title}>{title}</h3>}
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Card;
