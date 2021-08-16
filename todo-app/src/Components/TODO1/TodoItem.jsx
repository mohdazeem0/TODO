import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const TodoItem = () => {
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}></Col>
        <Col md={10}></Col>
      </Row>
    </Card>
  );
};
