import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsCloud, BsCloudFill } from "react-icons/bs";
import { useChat } from "./contexts/ChatContext";

const Header = () => {
  const { messages, cleanMessages } = useChat();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Row 
      className="py-3 px-5 w-100"
      style={{height: '10%'}}
    >
      <Col className="d-flex flex-row justify-content-center align-items-center gap-2">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
          onClick={cleanMessages}
        >
          {isHovered ? (
            <BsCloudFill 
              className="pt-1"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
          ) : (
            <BsCloud 
              className="pt-1"
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
          )}
        </div>
        <p className="m-0">AI-assistant</p>
      </Col>
    </Row>
  );
}

export default Header;