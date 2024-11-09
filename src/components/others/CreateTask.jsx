import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [taskNew, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees")); 
    console.log(data);

    data.forEach((element) => {
      if (assignTo == element.name) {
        element.tasks.push(taskNew);
        console.log(element);
      }
    });
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

  };

  return (
    <div className="mt-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="wrapper flex justify-between items-start bg-zinc-900 p-10 w-full rounded-md opacity-90">
          <div className="left w-1/2">
            <h2 className="mb-1 text-xl font-medium">Task Title</h2>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="title of the task"
              className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5"
            />
            <h2 className="mb-1 text-xl font-medium">Date</h2>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5"
            />
            <h2 className="mb-1 text-xl font-medium">Assign to</h2>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="employee name"
              className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5"
            />
            <h2 className="mb-1 text-xl font-medium">Category</h2>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design, dev, etc"
              className="w-[90%] px-3 py-2 rounded-md text-md outline-none bg-transparent border-blue-400 border text-white mb-5"
            />
          </div>

          <div className="right w-1/2 flex flex-col">
            <h2 className=" text-xl font-medium mb-1">Description</h2>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded-md text-md outline-none bg-transparent border-blue-400 border text-white p-2"
            ></textarea>

            <button className="mt-5 bg-blue-400 rounded-md text-xl py-3">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
