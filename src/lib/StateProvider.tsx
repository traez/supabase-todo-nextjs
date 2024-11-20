"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";
import { taskType } from "@/lib/Types";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

export interface StateContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: taskType[];
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
  fetchData: () => Promise<void>;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<taskType[]>([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("s3todo").select("*");
      if (error) throw error;
      if (data != null) {
        setTasks(data);
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      alert(errorMessage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        tasks,
        setTasks,
        fetchData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
