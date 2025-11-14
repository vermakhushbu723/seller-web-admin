import React from 'react';
import { AppColors } from '../../core/constants/colors';
import { AppTypography } from '../../core/constants/typography';

/**
 * Professional Admin Panel Table Component
 * Compact, clean design matching industry standards
 */
const Table = ({ 
  columns = [], 
  data = [], 
  onRowClick = null,
  hoverable = true,
  striped = false,
  compact = true,
}) => {
  const styles = {
    tableContainer: {
      width: '100%',
      overflowX: 'auto',
      backgroundColor: AppColors.surface,
      borderRadius: '8px',
      border: `1px solid ${AppColors.border}`,
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: AppTypography.fontSize.sm,
    },
    thead: {
      backgroundColor: AppColors.surfaceVariant,
      borderBottom: `2px solid ${AppColors.border}`,
    },
    th: {
      padding: compact ? '8px 12px' : '12px 16px',
      textAlign: 'left',
      fontWeight: AppTypography.fontWeight.semibold,
      fontSize: AppTypography.fontSize.xs,
      color: AppColors.textSecondary,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
    },
    tbody: {
      backgroundColor: AppColors.surface,
    },
    tr: (index) => ({
      borderBottom: `1px solid ${AppColors.border}`,
      backgroundColor: striped && index % 2 === 1 ? AppColors.background : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color 0.15s ease',
    }),
    trHover: {
      backgroundColor: AppColors.primaryLight + '08',
    },
    td: {
      padding: compact ? '10px 12px' : '14px 16px',
      fontSize: AppTypography.fontSize.sm,
      color: AppColors.textPrimary,
      whiteSpace: 'nowrap',
    },
    emptyState: {
      padding: '40px 20px',
      textAlign: 'center',
      color: AppColors.textTertiary,
      fontSize: AppTypography.fontSize.sm,
    },
  };

  if (!data || data.length === 0) {
    return (
      <div style={styles.tableContainer}>
        <div style={styles.emptyState}>No data available</div>
      </div>
    );
  }

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            {columns.map((column, index) => (
              <th 
                key={index}
                style={{
                  ...styles.th,
                  textAlign: column.align || 'left',
                  width: column.width || 'auto',
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={styles.tbody}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={styles.tr(rowIndex)}
              onClick={() => onRowClick && onRowClick(row)}
              onMouseEnter={(e) => hoverable && (e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor)}
              onMouseLeave={(e) => {
                if (hoverable) {
                  e.currentTarget.style.backgroundColor = striped && rowIndex % 2 === 1 
                    ? AppColors.background 
                    : 'transparent';
                }
              }}
            >
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex}
                  style={{
                    ...styles.td,
                    textAlign: column.align || 'left',
                  }}
                >
                  {column.render ? column.render(row[column.key], row, rowIndex) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
