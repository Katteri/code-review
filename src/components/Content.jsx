import React, { useState } from "react";
import { Col, Row } from "react-bootstrap"
import Message from "./Message";
import { useChat } from "./contexts/ChatContext";

const Content = () => {
  const { messages } = useChat();

  return (
    <Col
      className="w-100 border-bottom border-top bg-light"
    >
      <Row className="w-75 my-0 mx-auto">
        {messages.map(message => {<Message message={message}/>})}
      </Row>
    </Col>
  );
}

export default Content;