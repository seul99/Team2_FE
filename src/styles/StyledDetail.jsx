import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  // height: 100vh;
  overflow-y: auto;
  // padding-bottom: 200px;
  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;
export const Box = styled.div`
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
//헤더 별도선언
export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  margin-top: 20px;
`;
export const BackBtn = styled.img``;
export const LikeBtn = styled.img``;
// 이미지 보여주기
export const MainImg = styled.img`
  object-fit: cover;

  width: 100%;
  height: 350px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const ModalImg = styled.img`
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ModalContent = styled.div``;
// 정보박스
export const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// 기본정보
export const BagicInfo = styled.div`
  position: relative;
  z-index: 10;
  margin-top: -40px;
  border-radius: 40px 40px 0 0;
  background: #fff;

  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 5px;
`;
export const DesertionNo = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const DetailInfo = styled.div`
  color: #8c8098;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
export const Mark = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

//사각박스 정보
export const CheckList = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin: 0 auto;
  padding-top: 1.5vh;
`;
export const BoxInfo = styled.div`
  display: flex;
  padding: 1.6vh 1vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #ccc7d1;
  background: #fff;
  gap: 10px;
  color: #200e32;
  text-align: center;
  font-family: Pretendard;
  font-size: clamp(12px, 3.5vw, 15px);
  font-style: normal;
  font-weight: 500;
  line-height: 0%; /* 0 */
`;

// 건강, 성격, 메모 버튼 박스
export const BtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  align-items: center;
`;
export const BtnBox = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140.5%; /* 22.48px */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: ${({ open }) =>
    open ? "0 2px 20px 0 rgba(0, 0, 0, 0.25)" : "none"};
`;

//슬라이드 박스
export const SlideWrap = styled.div`
  // background: ${({ open }) => (open ? "#fff" : "transparent")};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${({ open }) => (open ? "20px 0" : "0")};

  margin-top: ${({ open, type }) =>
    open ? (type === "health" ? "-30px" : "0") : "0"};

  margin-bottom: ${({ open, type }) =>
    open ? (type === "health" ? "10px" : "20px") : "0"};

  margin-top: ${({ open, type }) =>
    open ? (type === "memo" ? "-20px" : "0") : "0"};

  margin-bottom: ${({ open, type }) =>
    open ? (type === "memo" ? "10px" : "20px") : "0"};
`;
export const SlideBox = styled.div`
  width: 350px;
  max-height: ${({ open }) => (open ? "500px" : "0")};
  margin-left: 20px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);

  border-radius: 12px;
  padding: ${({ open }) => (open ? "16px" : " 0 16px")};
  margin-top: 10px;

  max-height: ${({ open }) => (open ? "500px" : "0")};
  overflow: hidden;

  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
`;

// 문구
export const Text = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 24px */
`;
