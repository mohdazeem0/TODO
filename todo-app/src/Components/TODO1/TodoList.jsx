import React from "react";
import { TodoItem } from "./TodoItem";
import { Card } from "react-bootstrap";

export const TodoList = ({ todoitems, handleDelete }) => {
  return (
    <Card className="todolist">
      {todoitems.map((item) => (
        <TodoItem handleDelete={handleDelete} item={item} />
      ))}
    </Card>
  );
};
