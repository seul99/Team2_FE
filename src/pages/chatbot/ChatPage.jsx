import React from "react";
import InputBar from "./InputBar";
import * as C from "../../styles/StyledChat";

const nickname = localStorage.getItem("nickname");
export default function ChatPage({
  messages,
  inputValue,
  setInputValue,
  onSend,
}) {
  return (
    <C.ChatContainer>
      <C.MessageList>
        {messages.map((msg) => (
          <React.Fragment key={msg.id}>
            <C.SenderName $isMine={msg.sender === "user"}>
              {msg.sender === "bot" ? "보니" : nickname}
            </C.SenderName>
            <C.MessageBubble $isMine={msg.sender === "user"}>
              {msg.text}
            </C.MessageBubble>
          </React.Fragment>
        ))}
      </C.MessageList>

      <C.InputBottomSpace />
      <C.InputWrapper>
        <InputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={onSend}
        />
      </C.InputWrapper>
    </C.ChatContainer>
  );
}
