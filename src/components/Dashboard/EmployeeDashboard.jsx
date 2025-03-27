import React from "react";
import EmpHeader from "./EmpHeader";
import TaskNumber from "./TaskNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({changeUser,data}) {
  return (
    <div className="py-8 px-10 w-full h-screen ">
      {console.log(data)}
      <EmpHeader changeUser={changeUser} data={data}/>
      <TaskNumber  data={data}/>
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
