import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, [authData]);

  const handelLogin = (email, password) => {
    if (email == "admin@abc" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => (email == e.email, password == e.password)
      );
      if (employee) {
        setUser("employee");
      }
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invalid ");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
