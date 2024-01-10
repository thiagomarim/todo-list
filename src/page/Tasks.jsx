import React from "react";

const Tasks = ({ item, removeTodo, id }) => {
  return (
    <div className="p-2 bg-white mb-4 ring-1 ring-blue-300">
      <div className="flex justify-between items-center">
        <p>{item}</p>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-2 py-1">
            Concluido
          </button>
          <button
            onClick={() => removeTodo(id)}
            className="bg-red-600 text-white px-2 py-1"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
