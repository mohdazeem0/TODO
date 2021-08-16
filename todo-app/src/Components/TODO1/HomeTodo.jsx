import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";
import { TodoItem } from "./TodoItem";

export const HomeTodo = () => {
  const [todoitems, setTodoItems] = useState([
    "Learning React",
    "Having Launch",
    "Offer Asr Salah",
  ]);
  const handleAdd = (newtodo) => {
    setTodoItems([...todoitems, newtodo]);
  };
  const handleDelete = (curritem) => {
    const filtered = todoitems.filter((item) => item !== curritem);
    setTodoItems([...filtered]);
  };
  return (
    <Card className="home">
      <h2>ADD TODO</h2>
      <AddTodo handleAdd={handleAdd} />
      <h2>TODO LIST</h2>
      <TodoList handleDelete={handleDelete} todoitems={todoitems} />
    </Card>
  );
};
