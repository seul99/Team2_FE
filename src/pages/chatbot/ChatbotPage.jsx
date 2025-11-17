import React, { useState } from "react";
import * as C from "../../styles/StyledChat";
import pinkCircle from "/images/chatbot/pink-circle.png";
import chatbotCharacter from "/images/chatbot/boni-character.png";
import search from "/images/chatbot/search.png";
import mic from "/images/chatbot/mic.png";
import sparkleIcon from "/images/chatbot/sparkle-icon.png";

export default function ChatbotPage() {
  const nickname = localStorage.getItem("nickname") || "ME";
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);

  const BOT_DUMMY_REPLY =
    "네, 보호소 방문 가능합니다! 입양 전에는 해당 보호소의 전화 연결 버튼을 눌러 상담";

  const handleSend = () => {
    const text = inputValue.trim();
    if (text === "") return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      text: text,
    };

    const botReply = {
      id: messages.length + 2,
      sender: "bot",
      text: BOT_DUMMY_REPLY,
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage, botReply]);

    setIsChatStarted(true);
    setInputValue("");
  };

  return (
    <C.Container>
      <C.ContentArea>
        {isChatStarted ? (
          <C.MessageList>
            {messages.map((msg) => (
              <React.Fragment key={msg.id}>
                {msg.sender === "bot" ? (
                  <C.SenderName $isMine={false}>보니</C.SenderName>
                ) : (
                  <C.SenderName $isMine={true}>ME</C.SenderName>
                )}

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
          <>
            <C.GreetingText>안녕하세요, {nickname}님</C.GreetingText>

            <C.ImageOverlapContainer>
              <C.PinkCircleImage src={pinkCircle} alt="핑크색 원 배경" />
              <C.CharacterImage src={chatbotCharacter} alt="챗봇 캐릭터 보니" />
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
                  <C.Button>채팅하러 가기</C.Button>
                </C.FaqCard>
                <C.FaqCard>
                  <span>🐾 입양 전 방문이 가능한가요?</span>
                  <C.Button>채팅하러 가기</C.Button>
                </C.FaqCard>
              </C.Section>
              <C.Section>
                <C.SectionTitle>AI 기반 유기동물 추천</C.SectionTitle>
                <C.AiCard>
                  <span>
                    🔍 행동 기반 추천 AI를 이용해
                    <br />
                    {nickname}님에게 꼭 맞는 반려동물을 만나보세요!
                  </span>
                  <C.Button>추천 받으러 가기</C.Button>
                </C.AiCard>
              </C.Section>
            </C.SectionWrapper>
          </>
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
            <img src={search} style={{ width: "20px", height: "20px" }} />
          </C.SearchIcon>
        </C.InputArea>

        <C.MicInput>
          <img src={mic} style={{ width: "15px", height: "20px" }} />
        </C.MicInput>
      </C.InputWrapper>
    </C.Container>
  );
}
