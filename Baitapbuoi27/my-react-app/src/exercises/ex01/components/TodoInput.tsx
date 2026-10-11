import { useState, useRef, type FormEvent } from 'react';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Yêu cầu 1: Không cho thêm nếu chuỗi rỗng hoặc chỉ có khoảng trắng
        if (!text.trim()) return;

        // Gửi nội dung lên component cha (TodoApp)
        onAdd(text.trim());

        // Yêu cầu 4: Xóa trống ô input và focus lại
        setText('');
        inputRef.current?.focus();
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}
        >
            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Thêm công việc mới..."
                style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                type="submit"
                style={{ padding: '8px 16px', cursor: 'pointer' }}
            >
                Thêm
            </button>
        </form>
    );
}
