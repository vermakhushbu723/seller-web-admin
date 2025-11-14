import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { AppColors } from '../../core/constants/colors';
import { AppTypography } from '../../core/constants/typography';

/**
 * Professional Admin Panel Pagination Component
 * Compact design matching industry standards
 */
const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
  totalItems = 0,
  itemsPerPage = 10,
  showItemsInfo = true,
  compact = true,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = compact ? 5 : 7;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: compact ? '12px 16px' : '16px 20px',
      backgroundColor: AppColors.surface,
      borderTop: `1px solid ${AppColors.border}`,
      borderRadius: '0 0 8px 8px',
      flexWrap: 'wrap',
      gap: '12px',
    },
    info: {
      fontSize: AppTypography.fontSize.xs,
      color: AppColors.textSecondary,
    },
    paginationWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    button: (disabled) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: compact ? '28px' : '32px',
      height: compact ? '28px' : '32px',
      padding: 0,
      backgroundColor: disabled ? AppColors.surfaceVariant : AppColors.surface,
      border: `1px solid ${AppColors.border}`,
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? AppColors.textTertiary : AppColors.textPrimary,
      fontSize: '16px',
      transition: 'all 0.15s ease',
      opacity: disabled ? 0.5 : 1,
    }),
    pageButton: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: compact ? '28px' : '32px',
      height: compact ? '28px' : '32px',
      padding: '0 8px',
      backgroundColor: isActive ? AppColors.primary : AppColors.surface,
      border: `1px solid ${isActive ? AppColors.primary : AppColors.border}`,
      borderRadius: '4px',
      cursor: 'pointer',
      color: isActive ? AppColors.surface : AppColors.textPrimary,
      fontSize: AppTypography.fontSize.xs,
      fontWeight: isActive ? AppTypography.fontWeight.semibold : AppTypography.fontWeight.normal,
      transition: 'all 0.15s ease',
    }),
    ellipsis: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      color: AppColors.textTertiary,
      fontSize: AppTypography.fontSize.xs,
    },
  };

  return (
    <div style={styles.container}>
      {showItemsInfo && (
        <div style={styles.info}>
          Showing {startItem} to {endItem} of {totalItems} items
        </div>
      )}
      
      <div style={styles.paginationWrapper}>
        <button
          style={styles.button(currentPage === 1)}
          onClick={handlePrevious}
          disabled={currentPage === 1}
          onMouseEnter={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.backgroundColor = AppColors.surfaceVariant;
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== 1) {
              e.currentTarget.style.backgroundColor = AppColors.surface;
            }
          }}
        >
          <MdNavigateBefore />
        </button>

        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <div key={`ellipsis-${index}`} style={styles.ellipsis}>...</div>
          ) : (
            <button
              key={page}
              style={styles.pageButton(page === currentPage)}
              onClick={() => handlePageClick(page)}
              onMouseEnter={(e) => {
                if (page !== currentPage) {
                  e.currentTarget.style.backgroundColor = AppColors.surfaceVariant;
                }
              }}
              onMouseLeave={(e) => {
                if (page !== currentPage) {
                  e.currentTarget.style.backgroundColor = AppColors.surface;
                }
              }}
            >
              {page}
            </button>
          )
        ))}

        <button
          style={styles.button(currentPage === totalPages)}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.backgroundColor = AppColors.surfaceVariant;
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.backgroundColor = AppColors.surface;
            }
          }}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
