import React, { useEffect, useState, useRef } from "react";
import { Col } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Message from "./Message";
import { useChat } from "./contexts/ChatContext";

const Content = () => {
  const { messages } = useChat();
  const [content, setContent] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 10);
  }, [messages]);

  useEffect(() => {
    const newContent = [];
    messages.map(message => newContent.push(<Message message={message} key={uuidv4()}/>));
    setContent(newContent);
  }, [messages]);

  return (
    <Col
      ref={containerRef}
      className="w-100 h-75 border-bottom border-top bg-light overflow-y-scroll"
    >
      <div className="w-75 my-3 mx-auto d-flex flex-column gap-3">
        {content}
      </div>
    </Col>
  );
}

export default Content;