import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

const Tasks = () => {
  return (
    <div className="flex flex-col gap-3 items-center flex-grow p-4">
      <h1 className="mt-20 p-5 text-4xl font-extrabold bg-gradient-to-l from-teal-300 to-blue-500 bg-clip-text text-transparent">
        Todo List
      </h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Tasks;
