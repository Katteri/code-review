import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hello! How can I help you?'
  }]);
  const [input, setInput] = useState('');
  
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const cleanMessages = () => {
    setMessages([]);
  }

  const updateInput = (newInput) => {
    setInput(newInput);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, cleanMessages, input, updateInput }}>
      {children}
    </ChatContext.Provider>
  );
};