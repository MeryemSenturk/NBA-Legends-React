import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Header = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;

    const newTodo = {
      id: uuidv4(),
      text: input.trim(),
    };
    console.log(newTodo);
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setInput("");
  };

  return (
    <div>
      <h1 className="m-5">Todo List</h1>

      <Form.Control
        className="form-control w-50 m-auto mb-2"
        placeholder="Enter new todo..."
        aria-label="Enter new todo..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{ height: "50px" }}
      />
      <Button
        className="btn btn-outline-success "
        variant=""
        id="button-addon"
        onClick={addTodo}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default Header;
