import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Row, Col } from "react-bootstrap";

const Message = ({ message }) => {
  const [classes, setClasses] = useState(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const { role } = message;

    const newClasses = cn("py-2", "px-4", {
      // for role user
      'ms-auto': role === 'user',
      'bg-dark': role === 'user',
      'text-white': role === 'user',
      // for role assistant
      'me-auto': role === 'assistant',
      'text-dark': role === 'assistant',
      'border': role === 'assistant',
    });
    const newStyle = {
      whiteSpace: 'pre-wrap',
      // width: "fit-content",
      wordBreak: 'break-word', 
      maxWidth: '70%',
      borderRadius: "16px",
      background: role === 'assistant'? "#F3F4F6" : "black"
    };

    setClasses(newClasses);
    setStyle(newStyle);
  }, [message]);

  return (
    <Row className={classes} style={style}>
      {message.content}
    </Row>
  );
}

export default Message;