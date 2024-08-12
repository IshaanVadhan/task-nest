import { useState } from "react";
import axiosInstance from "../utils/axios";

export default function TaskCard({ task, onEdit, onDelete }) {
  const [completed, setCompleted] = useState(task.completed);

  const handleEdit = () => {
    onEdit(task._id);
  };

  const handleDelete = async () => {
    onDelete(task._id);
  };

  const handleStatusEdit = async () => {
    try {
      const newStatus = !completed;
      await axiosInstance.put(`/tasks/${task._id}/status`, {
        completed: newStatus,
      });
      setCompleted(newStatus);
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  return (
    <div className="bg-dark-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-xl font-semibold -mb-1">{task.title}</h3>
          <p className="bg-dark-300 py-1 px-2 rounded-md text-sm min-w-fit">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        </div>
        <p className="text-gray-400">{task.description}</p>
      </div>
      <div>
        <hr className="border-gray-600 my-3" />
        <div className="mt-4 flex items-center space-x-2 justify-between">
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleStatusEdit}
              className="form-checkbox h-5 w-5 text-emerald-500"
            />
            <span
              className={`ml-2 ${
                completed ? "line-through text-gray-500" : ""
              }`}
            >
              {completed ? "Completed" : "Mark as completed"}
            </span>
          </div>
          <div className="ml-4 flex space-x-2">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-2 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
