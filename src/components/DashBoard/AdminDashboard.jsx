import AllTasks from "../others/AllTasks";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = (props) => {
  return (
    <div className="p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
