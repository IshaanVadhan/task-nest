"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Nav() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleCreateTask = () => {
    router.push("/tasks/new");
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center w-full flex-col sm:flex-row">
        <div>
          <h1
            className="text-3xl font-bold cursor-pointer"
            onClick={() => router.push("/tasks")}
          >
            Task
            <span className="text-emerald-500">Nest</span>
          </h1>
          {user?.name && (
            <p className="text-gray-300 mt-1 sm:hidden block text-center">
              Hello, {user.name}!
            </p>
          )}
        </div>
        {user?.name && (
          <div className="flex space-x-4 items-center mt-4 sm:mt-0">
            {user?.name && (
              <p className="text-gray-300 mt-1 sm:block hidden">
                Hello, {user.name}!
              </p>
            )}
            <button
              onClick={handleCreateTask}
              className="bg-emerald-500 text-white px-3 py-1.5 rounded-md"
            >
              Add Task
            </button>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1.5 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <hr className="border-gray-600 mb-6" />
    </>
  );
}
