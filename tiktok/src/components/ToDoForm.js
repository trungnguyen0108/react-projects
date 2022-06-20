import React from 'react';
import { useState } from 'react'
// import { toast } from 'react-toastify';

function ToDoForm(pops) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    pops.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
          placeholder='add somthing'
          onChange={handleChange}
          value={input}
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm;
