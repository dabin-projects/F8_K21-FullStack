import type { Todo } from '../type';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        {/* Yêu cầu 2: Gạch ngang chữ khi hoàn thành */}
        <span
          style={{
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#888' : '#000',
          }}
        >
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        style={{ color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}
      >
        Xóa
      </button>
    </li>
  );
}