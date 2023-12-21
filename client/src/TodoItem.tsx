// src/components/TodoItem.tsx
import React from 'react';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    );
};

export default TodoItem;
