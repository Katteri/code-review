import React, { useEffect, useRef } from "react";
import { Row, Form, Button, InputGroup } from "react-bootstrap";
import { useChat } from "./contexts/ChatContext";
import mockOpenAIChatCompletion from "../mockOpenAI";

const Footer = () => {
  const { input, updateInput, addMessage, messages } = useChat();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [messages]);

  const handleInput = (e) => {
    updateInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    
    const userMessage = {
      role: "user",
      content: input,
    };

    updateInput('');

    addMessage(userMessage);

    const completion = await mockOpenAIChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        ...messages, userMessage
      ]
    });

    addMessage(completion.choices[0].message);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  }

  return (
    <Row className="py-3 px-5 w-100 d-flex justify-content-center align-items-center">
      <InputGroup >
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write a message..."
          className="py-3 px-4"
          ref={inputRef}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          style={{resize: 'none'}}
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