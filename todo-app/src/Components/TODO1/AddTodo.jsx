import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export const AddTodo = ({ handleAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <Card className="addtodo">
      <Row>
        <Col md={10}>
          <Form.Control
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            placeholder="add new todo"
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setNewTodo("");
              handleAdd(newTodo);
            }}
            style={{ backgroundColor: "#DF2E2E" }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
