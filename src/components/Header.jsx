import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsCloud } from "react-icons/bs";
import { useChat } from "./contexts/ChatContext";

const Header = () => {
  const { messages, cleanMessages } = useChat();

  return (
    <Row className="py-3 px-5 w-100 h-25">
      <Col className="d-flex flex-row justify-content-center align-items-center gap-2">
        <BsCloud 
          className="pt-1"
          style={{ width: "1.8rem", height: "1.8rem" }}
          role="button"
          onClick={cleanMessages}
        />
        <p className="m-0">AI-assistant</p>
      </Col>
    </Row>
  );
}

export default Header;