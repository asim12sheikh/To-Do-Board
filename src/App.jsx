import React, { useEffect, useState } from 'react'
import Input from "./components/Input"
import Board from './components/Board';

const App = () => {
  const [taskList,setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(taskList))
  },[taskList])
  
  return (
    <div className='px-12 '>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
      <h2 className=' text-4xl font-semibold'>To Do Board</h2>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
      {taskList.map((task,index) => (
       <Board
       key={index}
       task={task}
       taskIndex={index}
       setTaskList={setTaskList}
       />
      ))}
      </div>
    </div>
    </div>
  )
}

export default App