import type { FilterType } from '../type';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <button
        disabled={currentFilter === 'all'}
        onClick={() => onFilterChange('all')}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        Tất cả
      </button>
      <button
        disabled={currentFilter === 'active'}
        onClick={() => onFilterChange('active')}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        Đang làm
      </button>
      <button
        disabled={currentFilter === 'completed'}
        onClick={() => onFilterChange('completed')}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        Đã xong
      </button>
    </div>
  );
}