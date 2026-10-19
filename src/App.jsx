import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks((prev) => [...prev, { id: Date.now(), title, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          Мої завдання
        </h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}
