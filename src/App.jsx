import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ChatProvider } from "./components/contexts/ChatContext";

const App = () => {
  return (
    <>
      <ChatProvider>
        <Header/>
        <Content/>
        <Footer/>
      </ChatProvider>
    </>
  );
}

export default App;