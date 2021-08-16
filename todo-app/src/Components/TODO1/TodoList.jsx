import React from "react";
import { TodoItem } from "./TodoItem";
import { Card } from "react-bootstrap";

export const TodoList = () => {
  return (
    <Card>
      <TodoItem />
      <TodoItem />
    </Card>
  );
};
