import { useState, useEffect } from 'react';
import type { Todo, FilterType } from './type';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoItem from './components/TodoItem';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Yêu cầu 5: useEffect hiển thị số việc chưa hoàn thành lên tiêu đề tab trình duyệt
  useEffect(() => {
    const activeCount = todos.filter((todo) => !todo.done).length;
    document.title = `(${activeCount}) việc cần làm`;
  }, [todos]);

  // Thêm công việc mới (Đảm bảo tính bất biến - Immutable bằng cách dùng toán tử spread)
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(), // Dùng crypto.randomUUID() làm id
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Đổi trạng thái hoàn thành (done / chưa done)
  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Xóa công việc
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Lọc danh sách trực tiếp từ state (Không tạo thêm state riêng cho danh sách đã lọc)
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true; // 'all'
  });

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Bài 1: Todo List Mini</h2>

      {/* Component Nhập liệu */}
      <TodoInput onAdd={handleAddTodo} />

      {/* Component Bộ lọc */}
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

      {/* Danh sách Todo */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
        {filteredTodos.length === 0 && (
          <p style={{ color: '#888', textAlign: 'center' }}>Không có công việc nào.</p>
        )}
      </ul>
    </div>
  );
}