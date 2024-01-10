import { useState } from "react";
import AddTask from "./page/AddTask";
import Tasks from "./page/Tasks";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Exemplo",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filterTodo = newTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );
    setTodos(filterTodo);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo,
    );

    setTodos(newTodos);
  };

  return (
    <div className="bg-neutral-200 h-screen flex items-center justify-center">
      <div className="bg-neutral-50 w-max p-5 m-5 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold font-sans mb-5 text-center">
          Todo List
        </h1>
        <AddTask addTodo={addTodo} />
        <div className="mt-8">
          {todos.map((item) => (
            <Tasks
              item={item}
              key={item.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
