import React, { useEffect, useRef } from "react";
import { Row, Form, Button, InputGroup } from "react-bootstrap";
import { useChat } from "./contexts/ChatContext";

const Footer = () => {
  const { input, updateInput, addMessage, messages } = useChat();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [messages]);

  const handleInput = (e) => {
    updateInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    updateInput('');    
    addMessage({
      role: "user",
      content: input,
    });
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <Row
      className="py-3 px-5 w-100 d-flex justify-content-center align-items-center"
      style={{height: '15%'}}
    >
      <InputGroup >
        <Form.Control
          placeholder="Write a message..."
          className="py-3 px-4"
          ref={inputRef}
          value={input}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="outline-primary"
          className="px-4"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </InputGroup>      
    </Row>
  );
}

export default Footer;