import React, { useState } from "react";
import "./TodoList.css";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Clean the house", done: false },
    { id: 3, text: "Walk the dog", done: false },
    { id: 4, text: "Go to gym", done: false },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [counter, setCounter] = useState(0);

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);

    if (updatedTodos.find((todo) => todo.id === id)?.done) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p>Selected: {counter}</p>
      {todos.length === 0 ? (
        <p>No to-dos</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item ${
                selectedItemId === todo.id ? "active" : ""
              }`}
              onClick={() => {
                handleToggleTodo(todo.id);
                setSelectedItemId(todo.id);
              }}
            >
              {todo.done ? <span>&#x2713; </span> : null}
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
