// src/App.tsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn TypeScript', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Add TypeScript to the app', completed: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
