const AcceptTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 rounded-lg h-full w-[350px] bg-red-500 p-5 ">
      <div className="flex items-center justify-between ">
        <h2 className="bg-red-500 px-3 p-1 rounded-md text-sm font-bold">
        {data.tasks[0].category}
        </h2>
        <h3 className="text-sm font-semibold">{data.tasks[0].date}</h3>
      </div>
      <h1 className="mt-10 text-2xl font-bold">
        Complete Learning Full Stack Web Development Quick!!
      </h1>
      <p className="text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
        accusamus, maxime alias ipsum quasi animi!
      </p>
      <div className="flex justify-between mt-5">
        <button className="p-2 px-4 bg-green-700 rounded-md">Accept</button>
      </div>
    </div>
  );
};

export default AcceptTask;
