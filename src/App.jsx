import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedinuserData, setloggedinuserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedinuser = localStorage.getItem("loggedinuser");

    if (loggedinuser) {
      const userData = JSON.parse(loggedinuser);
      setUser(userData.role);
      setloggedinuserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "ansh@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedinuser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setloggedinuserData(employee);
        localStorage.setItem(
          "loggedinuser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
      else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedinuserData} />
      ) : null}
    </>
  );
};

export default App;
