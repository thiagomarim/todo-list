import React from "react";

const AddTask = () => {
  function handleClick() {}

  return (
    <div className="flex gap-4">
      <input
        className="p-2 w-full text-gray-800 rounded-sm ring-1 ring-blue-400 focus:border-none focus:ring-1 focus:ring-blue-600"
        type="text"
      />
      <button
        onClick={handleClick}
        className="py-2 px-4 bg-blue-400 rounded-md"
      >
        Salvar
      </button>
    </div>
  );
};

export default AddTask;
