import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Tasks = ({ item, removeTodo, completeTodo }) => {
  return (
    <div
      className={`${
        item.isCompleted
          ? "p-2 bg-neutral-200 rounded-md mb-4 opacity-50"
          : "p-2 bg-neutral-200 rounded-md mb-4"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className={`${item.isCompleted ? "line-through" : ""}`}>
          {item.text}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => completeTodo(item.id)}
            className="bg-green-600 text-white px-2 py-1"
          >
            <IoCheckmarkSharp />
          </button>
          <button
            onClick={() => removeTodo(item.id)}
            className="bg-red-600 text-white px-2 py-1"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
