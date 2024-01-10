import React from "react";
import AddTask from "./page/AddTask";

function App() {
  return (
    <div className="bg-neutral-200 h-screen flex items-center justify-center">
      <div className="bg-neutral-50 w-max p-20 m-5">
        <h1 className="text-4xl font-sans mb-10">Todo List</h1>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
