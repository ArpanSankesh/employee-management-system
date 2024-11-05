/* eslint-disable react/prop-types */

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="ScrollBar"
      className="flex items-center justify-start gap-5 overflow-x-auto h-[55%] w-full rounded-lg py-5 text-white"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask data={elem} key={index} />;
        }
        if (elem.newTask) {
          return <NewTask data={elem} key={index} />;
        }
        if (elem.completed) {
          return <CompleteTask data={elem} key={index} />;
        }
        if (elem.failed) {
          return <FailedTask data={elem} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
