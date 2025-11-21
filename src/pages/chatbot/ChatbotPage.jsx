import React, { useState } from "react";
import IntroPage from "./IntroPage";
import ChatPage from "./ChatPage";

export default function ChatbotPage() {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const nickname = localStorage.getItem("useId");

  const handleSendFromIntro = () => {
    if (!inputValue.trim()) return;

   
    setIsChatStarted(true);

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: inputValue },
    ]);

    setInputValue("");
  };

  return (
    <>
      {!isChatStarted ? (
        <IntroPage
          nickname={nickname}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSend={handleSendFromIntro}
        />
      ) : (
        <ChatPage
          nickname={nickname}
          messages={messages}
          setMessages={setMessages}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </>
  );
}
