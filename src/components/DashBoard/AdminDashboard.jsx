import AllTasks from "../others/AllTasks";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Header />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
