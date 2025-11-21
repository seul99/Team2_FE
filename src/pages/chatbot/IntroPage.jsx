import { useNavigate } from "react-router-dom";
import * as C from "../../styles/StyledChat";
import InputBar from "./InputBar";
import boniImg from "/images/chatbot/boni-character.png";

const IntroPage = ({ inputValue, setInputValue, onSend }) => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  return (
    <C.IntroContainer>
      <C.VisualArea>
        <C.VisualTextTop>안녕하세요, {nickname}님</C.VisualTextTop>
        <C.VisualImage src={boniImg} alt="boni" />
        <C.VisualTextBottom>
          보니에게
          <br />
          무엇이든 물어보세요!
        </C.VisualTextBottom>
      </C.VisualArea>

      <C.TopSpacer />

      {/* FAQ + AI 영역 */}
      <C.QuickSection>
        <C.SectionWrapper>
          {/* FAQ */}
          <C.Section>
            <C.SectionTitle>자주 묻는 질문</C.SectionTitle>

            <C.FaqCard
              onClick={() => {
                setInputValue("유기동물 입양 절차 알려줘!");
                onSend();
              }}
            >
              🐾 유기동물 입양 절차 알려줘!
            </C.FaqCard>

            <C.FaqCard
              onClick={() => {
                setInputValue("입양 전 방문이 가능한가요?");
                onSend();
              }}
            >
              🐾 입양 전 방문이 가능한가요?
            </C.FaqCard>
          </C.Section>

          {/* AI 추천 */}
          <C.Section>
            <C.SectionTitle>AI 기반 유기동물 추천</C.SectionTitle>

            <C.AiCard onClick={() => navigate("/AIRecommPage")}>
              🔍 행동 기반 추천 AI로
              <br />
              나에게 맞는 반려동물 찾기
            </C.AiCard>
          </C.Section>
        </C.SectionWrapper>
      </C.QuickSection>

      {/* 하단 입력창 */}
      <C.InputWrapper>
        <InputBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={onSend}
        />
      </C.InputWrapper>
    </C.IntroContainer>
  );
};

export default IntroPage;
