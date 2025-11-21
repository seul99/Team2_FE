import React, { useState } from "react";
import IntroPage from "./IntroPage";
import ChatPage from "./ChatPage";

export default function ChatbotPage() {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [autoSend, setAutoSend] = useState("");

  // IntroPage에서 질문을 받으면 ChatPage로 전환
  const startChat = (text) => {
    if (!text || !text.trim()) return;

    setAutoSend(text);
    setInputValue("");
    setIsChatStarted(true);
  };

  return (
    <>
      {!isChatStarted ? (
        <IntroPage
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSend={startChat}
        />
      ) : (
        <ChatPage
          messages={messages}
          setMessages={setMessages}
          inputValue={inputValue}
          setInputValue={setInputValue}
          autoSend={autoSend}
        />
      )}
    </>
  );
}
