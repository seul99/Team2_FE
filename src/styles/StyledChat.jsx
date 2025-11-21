import styled from "styled-components";

export const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

/* 상단 전체 영역 (그림 + 텍스트 + 문구) */
export const TopVisual = styled.div`
  padding-top: 20px;
`;

export const VisualArea = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const VisualImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const VisualTextTop = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  color: #000;
  position: absolute;
  top: 30px;
  z-index: 2;
`;

export const VisualTextBottom = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.6;
  color: #000;
  position: absolute;
  bottom: 30px;
  z-index: 2;
`;

/* 캐릭터 이미지 wrapper */
export const CharacterWrapper = styled.div`
  width: 45%;
  max-width: 180px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const QuickSection = styled.div`
  padding: 20px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const TopSpacer = styled.div`
  flex: 1;
  min-height: 20px;
`;

export const TopContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 32px;
  padding-bottom: 20px;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GreetingText = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 32px;
`;

export const ImageOverlapContainer = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const CharacterImage = styled.img`
  object-fit: contain;
`;

export const CtaText = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.37;
  text-align: center;
  margin: 0 0 32px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

export const SectionTitle = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 4px 8px;
`;

/* FAQ 카드 & AI 카드 공유 스타일 */
const BaseCard = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 248, 207, 0.85);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  font-family: Pretendard;
  font-size: 11px;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FaqCard = styled(BaseCard)`
  min-height: 60px;
  font-weight: 400;
`;

export const AiCard = styled(BaseCard)`
  min-height: 120px;
  justify-content: center;
  font-weight: 400;
  line-height: 1.6;
`;

/* =========================== 채팅 메시지 =========================== */
export const MessageList = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SenderName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  font-weight: 600;
  ${(props) =>
    props.$isMine ? "align-self: flex-end;" : "align-self: flex-start;"}
`;

export const MessageBubble = styled.div`
  display: flex;
  max-width: 90%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #f0b2c0;
  background: rgba(255, 255, 255, 0.5);
  ${(props) =>
    props.$isMine ? "align-self: flex-end;" : "align-self: flex-start;"}
  color: #160211;
  font-family: Pretendard;
  font-size: 9px;
  line-height: 1.5;
  word-break: break-word;
`;

export const SparkleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: transparent;
  box-sizing: border-box;
`;

export const InputArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 80px;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 1);
  padding: 0 20px;
  height: 56px;
`;

export const ChatInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: Inter;
  font-size: 13px;

  &::placeholder {
    color: #000;
    opacity: 0.6;
  }
`;

export const SearchIcon = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const MicInput = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`;
