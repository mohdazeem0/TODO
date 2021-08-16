import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";

export const HomeTodo = () => {
  const [todoitems, setTodoItems] = useState([
    "Learning React",
    "Having Launch",
    "Offer Asr Salah",
  ]);
  const handleAdd = (newtodo) => {
    setTodoItems([...todoitems, newtodo]);
  };
  return (
    <Card className="home">
      <Row>
        <Col>
          <AddTodo handleAdd={handleAdd} />
        </Col>
        <Col>
          <TodoList todoitems={todoitems} />
        </Col>
      </Row>
    </Card>
  );
};
