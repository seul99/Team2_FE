// src/styles/StyledChat.jsx
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`;

/* 상단 ~ 카드/메시지까지 스크롤 되는 영역 */
export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;

  padding: 32px 24px 8px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 70px;
`;

/* =======================
   상단 컨텐츠
   ======================= */

export const GreetingText = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 32px;
`;

export const ImageOverlapContainer = styled.div`
  position: relative;
  width: 220px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

export const CharacterImage = styled.img`
  position: absolute;
  object-fit: contain;
`;

export const CtaText = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.37;
  margin: 0 0 40px;
`;

/* =======================
   카드 영역 (FAQ / AI 추천)
   ======================= */

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  margin-top: 100px;
  padding: 0 2px 4px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.37;
  margin: 0 0 12px 4px;
`;

export const FaqCard = styled.div`
  width: 100%;
  max-width: 170px;
  flex-shrink: 0;

  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.9;
  margin: 4px 4px 8px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
`;

export const AiCard = styled.div`
  width: 100%;
  max-width: 170px;
  height: 99px;
  flex-shrink: 0;

  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.9;
  margin: 4px 4px 8px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);

  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;

  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  width: 80px;
  height: 21px;
  padding: 8px 10px;
  margin-top: 6px;

  justify-content: center;
  align-items: center;
  align-self: flex-end;

  border-radius: 100px;
  box-shadow: 0 0 0 1px #fbe5e9;
  background: #fff;
  border: none;

  color: #000;
  font-family: Pretendard;
  font-size: 8px;

  &:hover {
    background-color: #ffdde3ff;
  }
`;

/* =======================
   하단 입력창 (네비바처럼 고정)
   ======================= */

export const InputWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  max-width: 390px; /* Layout Box와 동일 폭 */
  margin: 0 auto;

  padding: 12px 24px 20px;
  box-sizing: border-box;

  background: rgba(251, 246, 255, 0.88);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  z-index: 20;
`;

export const InputArea = styled.div`
  position: relative;

  flex: 1;
`;

export const ChatInput = styled.input`
  width: 100%;
  height: 56px;
  min-height: 56px;
  border-radius: 80px;
  border: none;

  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 1);

  padding-left: 23px;
  padding-right: 40px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;

  flex-shrink: 0;

  &::placeholder {
    color: #000000;
  }
  &:focus {
    outline: none;
  }
`;

export const MicInput = styled.button`
  width: 56px;
  height: 56px;

  border: none;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 0.88);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  box-sizing: border-box;

  &:active {
    outline: none;
  }
`;

export const SearchIcon = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 18px;
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* =======================
   채팅 메시지 리스트
   ======================= */

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const SenderName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  font-weight: 600;

  ${(props) =>
    props.$isMine ? `align-self: flex-end;` : `align-self: flex-start;`}
`;

export const SparkleIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const MessageText = styled.div`
  word-break: break-word;
`;

export const MessageBubble = styled.div`
  display: flex;
  width: fit-content;
  max-width: 90%;
  padding: 10px 14px;
  line-height: 1.5;

  ${(props) =>
    props.$isMine
      ? `
      align-self: flex-end;
      border-radius: 8px;
      border: 1px solid #F0B2C0;
      background: rgba(255, 255, 255, 0.5);
    `
      : `
      align-self: flex-start;
      border-radius: 8px;
      border: 1px solid #F0B2C0;
      background: rgba(255, 255, 255, 0.5);
    `}

  color: #160211;
  font-family: Pretendard;
  font-size: 9px;
  font-weight: 400;
  word-break: break-word;
`;
