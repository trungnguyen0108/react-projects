import React from 'react'
import ToDoForm from './ToDoForm'

function ToDo() {

  const submitUpdate = () => {
    
  }

  return (
    <div>
      <ToDoForm onSubmit={submitUpdate}></ToDoForm>
    </div>
  )
}

export default ToDo