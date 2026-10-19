export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <h2 className="mb-3 text-lg font-semibold text-slate-700">
        Список завдань ({tasks.length})
      </h2>

      {tasks.length === 0 ? (
        <p className="py-6 text-center text-slate-400">Поки що завдань немає</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
            >
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)}
                className="h-5 w-5 cursor-pointer accent-indigo-600"
              />
              <span
                className={`flex-1 break-words ${
                  task.done ? "text-slate-400 line-through" : "text-slate-800"
                }`}
              >
                {task.title}
              </span>
              <button
                onClick={() => onDelete(task.id)}
                className="rounded-md px-2 py-1 text-sm text-red-500 transition hover:bg-red-50 hover:text-red-700"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
