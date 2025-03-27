import React from 'react'
import EmpHeader from './EmpHeader'
import CreateTask from '../TaskList/CreateTask'
import AllTask from '../TaskList/AllTask'

function AdminDashboard({changeUser,data}) {
  return (
    <div className='py-8 px-10 w-full h-screen '>
      {console.log(data)}
        <EmpHeader changeUser={changeUser} data={data} />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard