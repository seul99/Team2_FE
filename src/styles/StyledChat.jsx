import styled from "styled-components";

/* =======================
   페이지 전체 레이아웃
   ======================= */

export const Container = styled.div`
  width: 100%;
  height: 100%; /* Layout.Box 안에서 꽉 채우기 */
  position: relative; /* 아래 absolute들의 기준 */
  display: flex;
`;

/* 위쪽 컨텐츠(보니, 카드, 채팅 메시지)가 들어가는 영역
   - Layout.Box 안에서
   - 위(top:0)부터, 아래에서 96px(채팅바 + 마진)까지 사용 */
export const ContentArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 96px; /* 👈 채팅바 영역만큼 비워두기 */

  padding: 32px 24px 0;
  box-sizing: border-box;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 인트로 래퍼 (처음 화면) */
export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 8px;
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
  padding: 0 2px 20px;
  margin-top: 8px;
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
  height: 67px;
  flex-shrink: 0;

  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.9;
  margin: 4px 4px 8px;
  padding: 14px;

  display: flex;
  align-items: center;

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
   하단 입력창 (Layout.Box 안 바닥 기준)
   ======================= */

export const InputWrapper = styled.div`
  position: absolute; 
  left: 24px;
  right: 24px;
  bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  z-index: 10;
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
  background-color: transparent;

  padding-left: 23px;
  padding-right: 40px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;

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
  min-width: 56px;
  min-height: 56px;

  border: none;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: transparent;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  box-sizing: border-box;
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
  padding-bottom: 30px;
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
    `
      : `
      align-self: flex-start;
    `}

  border-radius: 8px;
  border: 1px solid #f0b2c0;
  background: rgba(255, 255, 255, 0.5);

  color: #160211;
  font-family: Pretendard;
  font-size: 9px;
  font-weight: 400;
  word-break: break-word;
`;
