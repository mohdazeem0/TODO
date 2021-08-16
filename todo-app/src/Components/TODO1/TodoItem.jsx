import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export const TodoItem = ({ item, handleDelete }) => {
  const [check, setCheck] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col md={10}>
          {" "}
          <Form.Label>{check ? <del>{item}</del> : item} </Form.Label>
          <Button className="removebtn" onClick={() => handleDelete(item)}>
            remove
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
