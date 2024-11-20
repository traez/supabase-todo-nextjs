"use client";
import { useContext } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import { StateContext } from "@/lib/StateProvider";

export default function TaskList() {
  const { loading, setLoading, tasks, setTasks, fetchData } =
    useContext(StateContext)!;

  async function deleteTask(id: number) {
    try {
      const { error } = await supabase.from("s3todo").delete().eq("id", id);

      if (error) throw error;

      await fetchData();
      toast.success("Task deleted successfully!");
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(`Error deleting task: ${errorMessage}`);
    }
  }

  const toggleTask = async (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    // Optimistically update the local state
    setTasks(updatedTasks);

    try {
      // Update the task in Supabase
      const { error } = await supabase
        .from("s3todo")
        .update({ completed: !tasks.find((task) => task.id === id)?.completed })
        .eq("id", id);

      if (error) throw error;
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(`Error updating task: ${errorMessage}`);

      // If there was an error, revert the local update
      setTasks(tasks);
    }
  };

  const handleClearTasks = async () => {
    if (!window.confirm("Are you sure you want to clear all tasks?")) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("s3todo").delete().gt("id", 0);

      if (error) {
        throw new Error(error.message);
      }

      await fetchData();
      toast.success("All tasks cleared successfully!");
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.log(`Error clearing tasks: ${errorMessage}`);
      toast.error(`Error clearing tasks: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  if (!tasks || !tasks.length) {
    return (
      <>
        <div className="relative w-[400px] h-[250px]">
          <Image
            src="empty.svg"
            alt="empty"
            fill
            sizes="(min-width: 400px) 100vw"
            className="rounded-t-lg object-cover"
          />
        </div>
      </>
    );
  }

  return (
    <div className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center space-x-2 rounded-md border border-gray-e00 p-1">
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <label
            htmlFor={`task-${task.id}`}
            className={`flex-grow ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </label>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 text-gray-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
          >
            <FaRegTrashAlt className="h-4 w-4" />
            <span className="sr-only">Delete task</span>
          </button>
        </div>
      ))}
      <button
        onClick={handleClearTasks}
        disabled={loading}
        className="w-full mt-4 px-8 py-2 text-gray-500 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Clearing tasks..." : "Clear Tasks"}
      </button>
    </div>
  );
}
