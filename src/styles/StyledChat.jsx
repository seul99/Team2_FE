import styled from "styled-components";

// --- 페이지 전체 레이아웃 ---

// 페이지 전체를 감싸는 컨테이너
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// 하단 입력창을 제외한 스크롤 영역
export const ContentArea = styled.div`
  padding: 50px;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%; /* 부모(ContentArea)의 공간을 꽉 채움 */
`;

// --- 상단 컨텐츠 (인사말, 이미지, 카드) ---

export const GreetingText = styled.h1`
  color: #000;

  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const ImageOverlapContainer = styled.div`
  position: relative;
  width: 230px;
  height: 200px;
  margin-top: 20px;
  display: flex; /* 내부 아이템 중앙 정렬용 */
  justify-content: center;
  align-items: center;
`;

export const CharacterImage = styled.img`
  position: absolute; /* ImageOverlapContainer에 겹쳐지게 */
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정확히 중앙에 배치 */
  width: 250px; /* 강아지 이미지 크기 */
  height: 250px; /* 강아지 이미지 크기 */
  object-fit: contain;
`;

export const CtaText = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.236%; /* 24.703px */
  margin-top: 10px;
`;

export const SectionWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 11px;

  width: 100%;
`;

export const SectionTitle = styled.h3`
  color: #000;
  text-align: left;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.236%; /* 17.841px */
  margin-top: 100px;
  margin-left: 12px;
`;

export const FaqCard = styled.div`
  width: 165px;
  height: 67px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.7;
  margin: 8px;
  display: flex;
  flex-direction: column;
  padding: 14px;
  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

export const AiCard = styled.div`
  width: 165px;
  height: 99px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid #fff;
  opacity: 0.7;
  margin: 8px;
  padding: 14px;
  background: rgba(255, 248, 207, 0.9);
  box-shadow: 1px 2px 7.8px 1px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 14px */
`;

export const Button = styled.button`
  display: flex;
  width: 80px;
  height: 21px;
  padding: 8px 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  box-shadow: 0 0 0 1px #fbe5e9;
  background: #fff;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;

  align-self: flex-end;

  &:hover {
    background-color: #ffdde3ff;
  }
`;
// --- 하단 고정 입력창 ---

export const InputWrapper = styled.div`
  /* Layout의 Box 하단에 고정 */
  position: relative;

  display: flex;
  justify-content: space-between;
  margin-right: 25px;
  margin-left: 25px;
  bottom: 44px;
`;

export const InputArea = styled.div`
  position: relative; /* 돋보기 아이콘을 겹치기 위함 */
`;

export const ChatInput = styled.input`
  width: 278px;
  height: 48px;
  border-radius: 80px;
  border: none;

  box-shadow: 0 0 0 1px #f0b2c0;

  background-color: transparent;

  padding-left: 23px;
  align-items: center;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #000000; /* 플레이스홀더 색상 */
  }
  &:focus {
    outline: none;
  }
`;

export const MicInput = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: transparent;
  cursor: pointer;
  outline: none;

  /* 이미지 정렬 */
  display: flex;

  justify-content: center;

  /* 이미지(자식)에 padding을 주기 위해 padding을 버튼으로 이동 */
  padding: 12px;
  box-sizing: border-box;
  outline: none;

  &:active {
    outline: none;
  }
`;

export const SearchIcon = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 13px;
  background: transparent;
  border: none;
  /* 이미지 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- 채팅 메시지 리스트 ---
export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-bottom: 30px; /* 하단 입력창 높이만큼 여백 */
`;

export const SenderName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 11px;
  font-weight: 600;
  color: #555;

  ${(props) =>
    props.$isMine
      ? `
      align-self: flex-end; /* (ME) 오른쪽 정렬 */
    `
      : `
      align-self: flex-start; /* (BOT) 왼쪽 정렬 */
    `}
`;

export const SparkleIcon = styled.img`
  width: 24px; /* 스크린샷에 맞게 크기 조절 */
  height: 24px;
  flex-shrink: 0;
  margin-right: 8px; /* 아이콘과 텍스트 사이 간격 */
  /* 필요시 align-self: flex-start; 추가 */
`;

export const MessageText = styled.div`
  word-break: break-word; /* 텍스트가 길어지면 줄바꿈 */
`;

// 채팅 말풍선
export const MessageBubble = styled.div`
  display: flex;
  width: fit-content;
  max-width: 90%;
  padding: 10px 14px;
  line-height: 1.5;

  /* 내 말풍선 (ME) */
  ${(props) =>
    props.$isMine
      ? `
      align-self: flex-end;
      border-radius: 8px;
      border: 1px solid #F0B2C0;
      background: rgba(255, 255, 255, 0.50);
    `
      : /* 봇 말풍선 (보니) */
        `
      align-self: flex-start;
      border-radius: 8px;
      border: 1px solid #F0B2C0;
      background: rgba(255, 255, 255, 0.50);
    `}

  color: #160211;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;

  word-break: break-word;
`;
