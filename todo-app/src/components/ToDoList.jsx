import React from 'react'

const ToDoList = ({todo, setTodo}) => {


  return (
    <form>
        <input type="text" value={inp} className='form-control' placeholder="enter your todo"/>

        <button className='btn btn-success text-nowrap'>Add Task</button>
    </form>
  )
}

export default ToDoList