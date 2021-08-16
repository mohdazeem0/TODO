import React from "react";
import { TodoItem } from "./TodoItem";
import { Card } from "react-bootstrap";

export const TodoList = ({ todoitems }) => {
  return (
    <Card className="todolist">
      {todoitems.map((item) => (
        <TodoItem item={item} />
      ))}
    </Card>
  );
};
