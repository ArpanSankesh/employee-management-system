/* eslint-disable react/prop-types */

const TaskCount = ({data}) => {
  return (
    <div className="flex justify-between screen gap-5 my-14 text-white">
        <div className="py-5 px-10 w-[45%] bg-blue-500 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">{data.taskNumbers.newTask}</h1>
            <h2 className="text-3xl font-semibold">New Task</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-green-500 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">{data.taskNumbers.completed}</h1>
            <h2 className="text-3xl font-semibold">Completed</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-red-500 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">{data.taskNumbers.active}</h1>
            <h2 className="text-3xl font-semibold">Active</h2>
        </div>
        <div className="py-5 px-10 w-[45%] bg-yellow-500 rounded-md">
            <h1 className="text-7xl mb-2 font-bold">{data.taskNumbers.failed}</h1>
            <h2 className="text-3xl font-semibold">Failed</h2>
        </div>
    </div>
  )
}

export default TaskCount