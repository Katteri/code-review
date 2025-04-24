import React from "react";
import { Col, Row } from "react-bootstrap"

const Content = () => {
  return (
    <Col
      className="w-100 border-bottom border-top"
      style={{ background: "#f8f8fa" }}
    >
      <Row className="w-100">
        Hello!
      </Row>
    </Col>
  );
}

export default Content;