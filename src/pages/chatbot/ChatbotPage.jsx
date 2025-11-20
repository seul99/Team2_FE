// src/pages/chat/ChatbotPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/StyledChat";
import boniImg from "/images/chatbot/boni-character.png";
import search from "/images/chatbot/search.png";
import mic from "/images/chatbot/mic.png";
import sparkleIcon from "/images/chatbot/sparkle-icon.png";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ChatbotPage() {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname") || "ME";
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text) return;

    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setIsChatStarted(true);
    setInputValue("");

    try {
      const accessToken = localStorage.getItem("access");
      const res = await axios.post(
        `${API_BASE_URL}/api/rag/query`,
        { query: text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: res.data.data.answer,
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: "죄송합니다. 답변을 가져오는데 오류가 발생했습니다. 다시 시도해주세요. 😭",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleRecommendClick = () => {
    navigate("/RecommPage");
  };

  return (
    <C.Container>
      <C.ContentArea>
        {isChatStarted ? (
          <C.MessageList>
            {messages.map((msg) => (
              <React.Fragment key={msg.id}>
                <C.SenderName $isMine={msg.sender === "user"}>
                  {msg.sender === "bot" ? "보니" : "ME"}
                </C.SenderName>

                <C.MessageBubble $isMine={msg.sender === "user"}>
                  {msg.sender === "bot" && (
                    <C.SparkleIcon src={sparkleIcon} alt="sparkle" />
                  )}
                  <C.MessageText>{msg.text}</C.MessageText>
                </C.MessageBubble>
              </React.Fragment>
            ))}
          </C.MessageList>
        ) : (
          <C.IntroWrapper>
            <C.GreetingText>안녕하세요, {nickname}님</C.GreetingText>

            <C.ImageOverlapContainer>
              <C.CharacterImage src={boniImg} alt="챗봇 캐릭터 보니" />
            </C.ImageOverlapContainer>

            <C.CtaText>
              보니에게
              <br />
              무엇이든 물어보세요!
            </C.CtaText>

            <C.SectionWrapper>
              <C.Section>
                <C.SectionTitle>자주 묻는 질문</C.SectionTitle>
                <C.FaqCard>
                  <span>🐾 유기동물 입양 절차 알려줘!</span>
                </C.FaqCard>
                <C.FaqCard>
                  <span>🐾 입양 전 방문이 가능한가요?</span>
                </C.FaqCard>
              </C.Section>

              <C.Section>
                <C.SectionTitle>AI 기반 유기동물 추천</C.SectionTitle>
                <C.AiCard onClick={handleRecommendClick}>
                  <span>
                    🔍 행동 기반 추천 AI를 이용해
                    <br />
                    {nickname}님에게 꼭 맞는 반려동물을 만나보세요!
                  </span>
                </C.AiCard>
              </C.Section>
            </C.SectionWrapper>
          </C.IntroWrapper>
        )}
      </C.ContentArea>

      <C.InputWrapper>
        <C.InputArea>
          <C.ChatInput
            placeholder="무엇이든 물어보세요."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <C.SearchIcon onClick={handleSend}>
            <img src={search} style={{ width: 20, height: 20 }} />
          </C.SearchIcon>
        </C.InputArea>

        <C.MicInput>
          <img src={mic} style={{ width: 20, height: 26 }} />
        </C.MicInput>
      </C.InputWrapper>
    </C.Container>
  );
}
