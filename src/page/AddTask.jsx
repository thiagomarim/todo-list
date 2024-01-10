import { useState } from "react";

const AddTask = ({ addTodo }) => {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;
    setValue("");
    addTodo(value);
  }

  return (
    <div>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="p-2 w-full text-gray-800 rounded-sm ring-1 ring-blue-400 focus:border-none focus:ring-1 focus:ring-blue-600"
          type="text"
        />
        <button type="submit" className="py-2 px-4 bg-blue-400 rounded-md">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
