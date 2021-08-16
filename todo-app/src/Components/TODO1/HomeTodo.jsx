import React from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";

export const HomeTodo = () => {
  return (
    <Card className="home">
      <Row>
        <Col>
          <AddTodo />
        </Col>
        <Col>
          <TodoList />
        </Col>
      </Row>
    </Card>
  );
};
