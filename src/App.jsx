import { useState } from "react";
import AddTask from "./page/AddTask";
import Tasks from "./page/Tasks";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Comer arroz",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Comer feijao",
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

  return (
    <div className="bg-neutral-200 h-screen flex items-center justify-center">
      <div className="bg-neutral-50 w-max p-20 m-5">
        <h1 className="text-4xl font-sans mb-10">Todo List</h1>
        <AddTask addTodo={addTodo} />
        <div className="mt-10">
          {todos.map((item) => (
            <Tasks
              item={item.text}
              key={item.id}
              id={item.id}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
