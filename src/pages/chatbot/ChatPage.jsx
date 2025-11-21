import React, { useEffect, useRef } from "react";

import axios from "axios";
import InputBar from "./InputBar";
import * as C from "../../styles/StyledChat";
import sparkle from "../../../public/images/chatbot/sparkle-icon.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ChatPage({
  messages,
  setMessages,
  inputValue,
  setInputValue,
  autoSend, 
}) {
  const lastAutoSentRef = useRef(null);

  const sendMessage = async (text) => {
    if (!text || !text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
    };
    setMessages((prev) => [...prev, userMsg]);

    setInputValue("");

    try {

      const accessToken = localStorage.getItem("access");

      const res = await axios.post(
        `${API_BASE_URL}/api/rag/query`,
        { query: text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // ← ★ 여기 추가됨
            "Content-Type": "application/json",
          },
        }
      );

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: res.data.data.answer,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("❌ Chat API Error:", err);
      const errorMsg = {
        id: Date.now() + 2,
        sender: "bot",
        text: "오류가 발생했어요. 다시 시도해주세요 😭",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

 
  useEffect(() => {
    if (!autoSend || !autoSend.trim()) return;
    if (lastAutoSentRef.current === autoSend) return; 

    lastAutoSentRef.current = autoSend;
    sendMessage(autoSend);
  }, [autoSend]);

  return (
    <C.ChatContainer>
      <C.ChatScrollArea>
        {messages.map((msg) => {
          const isMine = msg.sender === "user";

          return (
            <C.MessageGroup key={msg.id} $isMine={isMine}>
              <C.SenderName $isMine={isMine}>
                {isMine ? "ME" : "보니"}
              </C.SenderName>

              <C.BubbleRow $isMine={isMine}>
                <C.MessageBubble $isMine={isMine}>
                  {!isMine && (
                    <img
                      src={sparkle}
                      alt="sparkle"
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 6,
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <C.MessageText>{msg.text}</C.MessageText>
                </C.MessageBubble>
              </C.BubbleRow>
            </C.MessageGroup>
          );
        })}
      </C.ChatScrollArea>

      <C.ChatInputArea>
        <InputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={() => sendMessage(inputValue)} // ⭐ 돋보기/엔터 모두 실행됨
        />
      </C.ChatInputArea>
    </C.ChatContainer>
  );
}
