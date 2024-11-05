/* eslint-disable react/prop-types */

const CompleteTask = ({ data }) => {
  return (
    <div className=" flex-shrink-0 rounded-lg h-full w-[350px] bg-green-500 p-5 ">
      <div className="flex items-center justify-between ">
        <h2 className="bg-red-500 px-3 p-1 rounded-md text-sm font-bold">
          {data.category}
        </h2>
        <h3 className="text-sm font-semibold">{data.date}</h3>
      </div>
      <h1 className="mt-10 text-2xl font-bold">{data.title}</h1>
      <p className="text-sm mt-3">{data.description}</p>
      <div className="flex justify-between mt-5">
        <button className="p-2 px-4 bg-blue-700 rounded-md">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
