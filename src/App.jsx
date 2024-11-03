import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
// import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
// import AdminDashboard from "./components/DashBoard/AdminDashboard";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  const [user, setUser] = useState(null);

  const handelLogin = (email, password) => {
    if (email == "admin@abc" && password == "123") {
      setUser('admin')
    } else if (email == "user@abc" && password == "123") {
      setUser('employee')
    } else {
      alert("Invalid ");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin = {handelLogin} /> : ""}

      {/* <EmployeeDashboard /> */}

      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
