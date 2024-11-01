
const CreateTask = () => {
  return (
    <div className="mt-10">
    <form>
      <div className="wrapper flex justify-between items-start bg-zinc-900 p-10 w-full rounded-md opacity-90">
        <div className="left w-1/2">
          <h2 className="mb-1 text-xl font-medium">Task Title</h2>
          <input type="text" placeholder="title of the task" className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5" />
          <h2 className="mb-1 text-xl font-medium">Date</h2>
          <input type="date"  className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5"/>
          <h2 className="mb-1 text-xl font-medium">Assign to</h2>
          <input type="text" placeholder="employee name" className="w-[90%] px-3 py-2 rounded-md text-md  outline-none bg-transparent border-blue-400 border text-white mb-5"/>
          <h2 className="mb-1 text-xl font-medium">Category</h2>
          <input type="text" placeholder="design, dev, etc" className="w-[90%] px-3 py-2 rounded-md text-md outline-none bg-transparent border-blue-400 border text-white mb-5" />
        </div>

        <div className="right w-1/2 flex flex-col">
          <h2 className=" text-xl font-medium mb-1">Description</h2>
          <textarea name="" id="" cols="30" rows="10" className="rounded-md text-md outline-none bg-transparent border-blue-400 border text-white p-2"></textarea>

          <button className="mt-5 bg-blue-400 rounded-md text-xl py-3">Create Task</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default CreateTask