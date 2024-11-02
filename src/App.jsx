import Login from "./components/Auth/Login"
import { setLocalStorage } from "./utils/LocalStorage";
// import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
// import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { useEffect } from "module";
import {setLocalStorage} from './utils/LocalStorage'


const App = () => {
useEffect(() => {
  setLocalStorage()
})


  return (
    <>
      <Login />

      {/* <EmployeeDashboard /> */}

    {/* <AdminDashboard /> */}

    </>
  );
};

export default App;
