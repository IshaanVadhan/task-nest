"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import TaskCard from "../../components/TaskCard";
import { useRouter } from "next/navigation";
import LoadingScreen from "../loading";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      setLoadingTasks(true);
      try {
        const response = await axiosInstance.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoadingTasks(false);
      }
    };

    fetchTasks();
  }, []);

  const handleEdit = (taskId) => {
    router.push(`/tasks/${taskId}/update`);
  };

  const handleDelete = async (taskId) => {
    try {
      await axiosInstance.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return loadingTasks ? (
    <LoadingScreen />
  ) : (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-gray-400">No tasks available.</p>
      )}
    </div>
  );
}
