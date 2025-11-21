import React from "react";
import * as C from "../../styles/StyledChat";
import InputBar from "./InputBar";
import boniImg from "/images/chatbot/boni-character.png";

const IntroPage = ({ inputValue, setInputValue, onSend }) => {
  // FAQ 클릭, 바로 ChatPage로 전환 + 메시지 자동 전송
  const handleFaqClick = (text) => {
    onSend(text);
  };

  // InputBar에서 전송, 바로 ChatPage로 전환 + 메시지 자동 전송
  const handleIntroSend = (text) => {
    onSend(text);
  };

  return (
    <C.IntroContainer>
      {/* 상단 이미지 영역 (너의 기존 디자인 기준) */}
      <C.VisualArea>
        <C.VisualTextTop>안녕하세요</C.VisualTextTop>

        <C.VisualImage src={boniImg} alt="boni" />

        <C.VisualTextBottom>
          보니에게
          <br />
          무엇이든 물어보세요!
        </C.VisualTextBottom>
      </C.VisualArea>

      {/* FAQ 영역 */}
      <C.QuickSection>
        <C.SectionWrapper>
          <C.Section>
            <C.SectionTitle>자주 묻는 질문</C.SectionTitle>

            <C.FaqCard
              onClick={() => handleFaqClick("유기동물 입양 절차 알려줘!")}
            >
              🐾 유기동물 입양 절차 알려줘!
            </C.FaqCard>

            <C.FaqCard
              onClick={() => handleFaqClick("입양 전 방문이 가능한가요?")}
            >
              🐾 입양 전 방문이 가능한가요?
            </C.FaqCard>
          </C.Section>

          <C.Section>
            <C.SectionTitle>AI 기반 유기동물 추천</C.SectionTitle>

            <C.AiCard onClick={() => navigate("/RecommPage")}>
              🔍 AI를 활용한 맞춤 추천 보러가기
            </C.AiCard>
          </C.Section>
        </C.SectionWrapper>
      </C.QuickSection>

      {/* 아래 InputBar */}
      <InputBar
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSend={handleIntroSend}
      />
    </C.IntroContainer>
  );
};

export default IntroPage;
