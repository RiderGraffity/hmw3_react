import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Назва завдання"
        className="flex-1 rounded-lg border bg-white border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
      >
        Додати
      </button>
    </form>
  );
}
