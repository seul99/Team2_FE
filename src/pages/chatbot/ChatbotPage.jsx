import React, { useState } from "react";
import * as C from "../../styles/StyledChat";
import chatbotCharacter from "/images/chatbot/boni-character.png";
import search from "/images/chatbot/search.png";
import mic from "/images/chatbot/mic.png";
import sparkleIcon from "/images/chatbot/sparkle-icon.png";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ChatbotPage() {
  const nickname = localStorage.getItem("nickname") || "ME";
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);

  // const BOT_DUMMY_REPLY =
  //   "네, 보호소 방문 가능합니다! 입양 전에는 해당 보호소의 전화 연결 버튼을 눌러 상담";

  const handleSend = async () => {
    const text = inputValue.trim();
    if (text === "") return;

    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
    };

    // 기존 메시지에 사용자 메시지 추가
    setMessages((prev) => [...prev, newUserMessage]);
    setIsChatStarted(true);
    setInputValue("");

    try {
      // 저장된 토큰 가져오기
      const accessToken = localStorage.getItem("access");
      console.log("현재 토큰 값:", accessToken);
      // API 요청
      const res = await axios.post(
        `${API_BASE_URL}/api/rag/query`,
        {
          query: text,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // 토큰을 헤더에 포함해서 인증
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Chat Response:", res.data);

      const botResponseText = res.data.data.answer;

      const botReply = {
        id: Date.now() + 1,
        sender: "bot",
        text: botResponseText,
      };

      // 봇 응답 메시지도 추가
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("API 에러 발생했습니다 ㅠㅠ: ", error);

      // 에러 메시지 표시
      const errorMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: "죄송합니다. 답변을 가져오는데 오류가 발생했습니다... 다시 시도 해주세요.😭",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // 로딩 끝
    }
    console.log(messages);
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
          <C.IntroWrapper>
            <C.GreetingText>안녕하세요, {nickname}님</C.GreetingText>

            <C.ImageOverlapContainer>
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
