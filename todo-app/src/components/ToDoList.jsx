import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <div className=" container todo-list  mt-3">
      <div className="row justify-content-center">
        <div
          className="col-lg-8 col-md-10 rounded-3"
          style={{ backgroundColor: "gray" }}
        >
          <h2 className="text-center fs-1 text-info p-3 ">My Todos</h2>
          <ul>
            {todos?.length ? (
              todos.map(({ id, text }) => (
                <div
                  className="list d-flex justify-content-between align-items-center border border-2 mb-2 rounded-3"
                  key={id}
                >
                  <li className="fs-3  mb-3" style={{ color: "white", listStylePosition:"inside", paddingLeft:"20px"}}>
                    {text}
                  </li>
                  <FaTrash
                    className="fs-3 text-danger me-2 "
                    onClick={() => deleteTodo(id)}
                  />
                </div>
              ))
            ) : (
              <p className="text-center mt-5 fs-3">No tasks yet!</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
