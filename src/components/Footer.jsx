import React from "react";
import { Row, Form, Button, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="py-3 px-5 w-100">
      <InputGroup >
        <Form.Control
          placeholder="Write a message..."
          className="py-3 px-4"
        />
        <Button
          variant="outline-primary"
          className="px-4"
        >
          Send
        </Button>
      </InputGroup>      
    </Row>
  );
}

export default Footer;