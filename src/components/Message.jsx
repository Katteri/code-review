import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Row, Col } from "react-bootstrap";

const Message = ({ message }) => {
  const [classes, setClasses] = useState(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setClasses(cn("py-2", "px-4")); //ms-auto bg-dark text-white" for user
    // me-auto text-dark for assistant
    setStyle({
      width: "fit-content",
      borderRadius: "16px",
      background: "#F3F4F6"
    });
  }, [message]);

  return (
    <Row className="py-2 px-4 me-auto text-dark" style={style}>
      Message
    </Row>
  );
}

export default Message;