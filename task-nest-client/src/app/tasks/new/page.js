"use client";
import { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { useRouter } from "next/navigation";

export default function CreateTaskPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axiosInstance.post("/tasks", formData);
      router.push("/tasks");
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-dark-200 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-2xl font-medium text-center">Add Task</h1>
        <hr className="border-gray-600 my-4" />
        {error && (
          <p className="bg-red-500 text-white mb-4 rounded-md p-2 text-sm">
            Error: {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full bg-dark-300 rounded-md shadow-sm p-1.5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full bg-dark-300 rounded-md shadow-sm p-1.5"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="mt-1 block w-full bg-dark-300 rounded-md shadow-sm p-1.5"
              required
            />
          </div>
          <div className="mt-3 text-center">
            <button
              type="submit"
              className="mt-2 bg-emerald-500 text-white px-4 py-3 rounded-md w-full text-md font-medium"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
