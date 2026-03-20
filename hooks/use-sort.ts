import { useState, useMemo } from 'react';

export type SortConfig = {
  key: string;
  direction: 'asc' | 'desc';
} | null;

export function useSort<T>(items: T[], defaultSort?: { key: string; direction: 'asc' | 'desc' }) {
  const [sortConfig, setSortConfig] = useState<SortConfig>(defaultSort || null);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // Handle nested properties like 'doctor.doctor_name'
        const aValue = sortConfig.key.split('.').reduce((obj: any, k: string) => obj && obj[k], a);
        const bValue = sortConfig.key.split('.').reduce((obj: any, k: string) => obj && obj[k], b);

        if (aValue === bValue) return 0;
        
        // Handle nulls/undefined to always stay at bottom natively
        if (aValue == null) return 1;
        if (bValue == null) return -1;

        // String comparison
        if (typeof aValue === 'string' && typeof bValue === 'string') {
           const comparison = aValue.localeCompare(bValue);
           return sortConfig.direction === 'asc' ? comparison : -comparison;
        }

        // Default comparison (numbers, booleans, dates implicitly coerced)
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig && sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}
