import { useEffect } from "react";
import Login from "./components/Auth/Login"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
// import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
// import AdminDashboard from "./components/DashBoard/AdminDashboard";



const App = () => {
useEffect(() => {
  setLocalStorage()
  getLocalStorage()
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
