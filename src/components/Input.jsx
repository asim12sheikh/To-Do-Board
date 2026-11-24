import React, { useState } from 'react'

const Input = ({task,taskList,setTaskList}) => {
  const [input,setInput] = useState("")

  const handleAddButton = (e) => {
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    setTaskList([...taskList, input.trim()])
    setInput("")
  }

  return (
    <form className='flex flex-row items-center gap-1'>
        <input className='border rounded-lg py-1.5 px-2.5 mt-5 text-lg outline-none focus:border-blue-500 focus:ring-blue-200 focus:ring-2' type="text"
        placeholder='Add a Task'
        value={input} 
        onChange={(e)=>setInput(e.target.value)}
        />
        <button className='bg-violet-500 text-white py-2 px-2.5 mt-5 rounded-lg  font-semibold focus:border-blue-500 focus:ring-blue-200 focus:ring-2 hover:opacity-70' onClick={handleAddButton}>Add</button>
    </form>
  )
}

export default Input