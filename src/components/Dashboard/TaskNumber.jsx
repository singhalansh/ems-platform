import React from 'react'
import Card from './Card'

function TaskNumber({ data }) {
  return (
    // active: 2,
    //   newTask: 1,
    //   completed: 1,
    //   failed: 0,
    <div className='flex w-full gap-5 justify-between'>
        <Card num={data.taskCounts.newTask} title="new Task"/>
        <Card num={data.taskCounts.completed} title="Completed Task"/>
        <Card num={data.taskCounts.active} title="Accepted Task"/>
        <Card num={data.taskCounts.failed} title="Failed Task"/>
        
    </div>
  )
}

export default TaskNumber