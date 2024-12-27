import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div className="w-80 flex flex-col gap-4 rounded-lg p-4 bg-white">
        <h1 className="text-center leading-normal text-emerald-500 font-medium text-3xl mb-6">
          Todo List
        </h1>
        <div className="flex">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l"
            placeholder="Enter a new todo"
          />
          <button
            onClick={addTodo}
            className="bg-emerald-600 p-2 text-white rounded-r"
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
            >
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
