import React, { useState } from 'react'
import Header from "../Header.jsx"
import ToDoList from '../ToDoList';

const Main = () => {
    const [todo, setTodo]  = useState("");

  return (
    <div>
      Main
      <Header />
      <ToDoList todo={todo} setTodo={setTodo} />
      
    </div>
  );
}

export default Main