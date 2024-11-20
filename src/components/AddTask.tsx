"use client";
import { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { StateContext } from "@/lib/StateProvider";

export default function AddTask() {
  const { fetchData } = useContext(StateContext)!;
  const [task, setTask] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("s3todo")
        .insert([
          {
            text: task,
            completed: false,
          },
        ])
        .select();

      if (error) throw error;
      setTask("");
      toast.success("task created successfully!");
      await fetchData();
    } catch (error) {
      const errorMessage = (error as Error).message;
      toast.error(`Error: ${errorMessage}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex space-x-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaPlus className="h-4 w-4" />
          <span className="sr-only">Add task</span>
        </button>
      </div>
    </form>
  );
}
