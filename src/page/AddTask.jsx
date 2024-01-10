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
      <form
        className="flex gap-4 items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="bg-neutral-200 py-2 px-4 w-full text-gray-800 rounded-sm"
          type="text"
          placeholder="Escreva a sua tarefa aqui"
        />
        <button
          type="submit"
          className="py-2 px-4 w-max h-max text-white bg-blue-400 rounded-sm"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
