
const TaskCount = () => {
  return (
    <div className="flex justify-between screen gap-5 p-10 text-white">
        <div className="py-5 px-10 w-[45%] bg-blue-400 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">0</h1>
            <h2 className="text-3xl font-semibold">New Task</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-green-400 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">3</h1>
            <h2 className="text-3xl font-semibold">Completed</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-red-400 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">0</h1>
            <h2 className="text-3xl font-semibold">Accepted</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-yellow-400 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">1</h1>
            <h2 className="text-3xl font-semibold">Failed</h2>
        </div>
    </div>
  )
}

export default TaskCount