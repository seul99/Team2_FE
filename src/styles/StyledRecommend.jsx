import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
`;

/* ✔ Box는 MainPage(Box) 구조처럼 column + center alignment */
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 20px 100px;
  box-sizing: border-box;

  max-width: 390px;
  margin: 0 auto;

  /* 작은 기기(SE 등) 대응 */
  @media (max-height: 700px) {
    padding: 20px 16px 70px;
  }
`;

export const BgLogo = styled.img``;

export const Coment = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  margin-top: -70px;

  @media (max-height: 700px) {
    font-size: 16px;
    margin-top: -40px;
  }
`;

export const GotoMainBtn = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 140.5%;
  display: inline-flex;
  padding: 8px 15px;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  gap: 10px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;

  @media (max-height: 700px) {
    padding: 6px 12px;
    font-size: 14px;
    margin-top: 18px;
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0 18px;

  @media (max-height: 700px) {
    padding: 4px 0 14px;
  }
`;

export const BackIcon = styled.div`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  @media (max-height: 700px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconWrap = styled.div`
  margin: 24px 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-height: 700px) {
    margin: 18px 0 6px;
  }
`;

export const SummaryCard = styled.div`
  display: flex;
  width: 288px;
  flex-direction: column;
  align-items: flex-start;

  padding: 24px 32px;
  gap: 16px;

  border-radius: 12px;
  background: #fff4f6;
  box-shadow: 0 6px 10px rgba(101, 101, 101, 0.25);

  margin-top: -1vh; /* 기존보다 확실하게 위로 당김 */
  margin-bottom: 3vh; /* 아래 텍스트와 간격 유지 */

  position: relative;
  z-index: 5; /* 이미지보다 항상 위 */

  @media (max-height: 700px) {
    margin-top: -0.5vh; /* 작은 폰에서 적당히 */
    margin-bottom: 2.4vh;
  }
`;

export const Title = styled.div`
  align-self: stretch;
  color: var(--dark, #26293f);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;

  @media (max-height: 700px) {
    font-size: 15px;
  }
`;

export const InfoText = styled.div`
  align-self: stretch;
  color: var(--dark, #26293f);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;

  @media (max-height: 700px) {
    font-size: 13px;
  }
`;

export const ActionButton = styled.button`
  width: 90%;
  max-width: 420px;
  margin-top: 22px;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  background: linear-gradient(90deg, #ffdbe6 0%, #fff1f6 100%);
  border: 1px solid rgba(226, 160, 183, 0.6);
  color: #200e32;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  @media (max-height: 700px) {
    padding: 10px 12px;
    font-size: 14px;
    margin-top: 18px;
  }
`;

export const BottomSpacer = styled.div`
  height: 80px;

  @media (max-height: 700px) {
    height: 50px;
  }
`;

export const SmallNote = styled.div`
  margin-top: 12px;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 13px;
  text-align: center;

  @media (max-height: 700px) {
    margin-top: 8px;
    font-size: 12px;
  }
`;

export const PageTitle = styled.div`
  width: 100%;
  text-align: center;
  color: #200e32;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;

  margin-top: 2vh; /* 화면 높이에 비례해 조절됨 */
  margin-bottom: -1.5vh; /* 텍스트를 이미지 쪽으로 끌어당김 */

  position: relative;
  z-index: 3;
`;

export const Illustration = styled.img`
  width: 22vh; /* 피그마 비율 기반 → 화면 높이에 비례해서 커짐/작아짐 */
  max-width: 260px; /* 큰 폰에서는 과도 확장 방지 */
  height: auto;

  position: relative;
  z-index: 1; /* 말풍선 위에 나오지 않게 */

  margin-top: 0;
  margin-bottom: 2vh;

  transform: scale(1.3);
  transform-origin: center top;

  filter: drop-shadow(0 8px 25px rgba(226, 170, 186, 0.2));
`;

export const SubHeading = styled.div`
  width: 100%;
  max-width: 480px;
  margin-top: 18px;
  text-align: center;
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;

  @media (max-height: 700px) {
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const InfoList = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;

  @media (max-height: 700px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;

export const InfoItem = styled.div``;

export const LoadingWrapper = styled.div`
  width: 100%;

  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;
