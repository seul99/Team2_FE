import { styled } from "styled-components";
import kakaoLogo from "/images/auth/kakaoLogo.png";
import textLogo from "/images/auth/TextLogo.png";
import introduction from "/images/auth/Introduction.png";
import ribbonPuppys from "/images/auth/RibbonPuppys.png";

export const AuthPageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const PuppyImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 393px;
  height: 372px;
  flex-shrink: 0;

  border-radius: 40px 40px 0px 0px;
  border: 1px solid #ebeff6; /* var(--Neutral-Colors-300, #EBEFF6) */
  background: #fff; /* var(--Neutral-Colors-100, #FFF) */
  box-shadow: 0 8px 28px 0 rgba(109, 117, 143, 0.16); /* Overlay 01 */

  /* 내부 레이아웃 */
  padding: 71px 0px 246px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const RebornLogo = styled.img`
  width: 170px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 13px;
  margin-top: 4px;
  margin-bottom: 37px;
  color: #868da6;
`;

const KaKaoButtonWrapper = styled.div`
  margin-top: 37px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const KaKaoLoginButton = styled.button`
  width: 300px;
  flex-shrink: 0;
  aspect-ratio: 20/3;

  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 170px;
  align-items: center;

  background-color: #fee500;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

/* ===== WelcomePage 스타일 (기존 그대로) ===== */

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const WelcomeName = styled.p`
  color: var(--Neutral-Colors-500, #868da6);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.5px;
`;

export const WelcomeSub = styled.p`
  color: var(--Neutral-Colors-500, #868da6);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const GoToMainButton = styled.button`
  display: inline-flex;
  padding: 12px 12px 12px 16px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
  margin: 26px;
  color: black;
  border-radius: 8px;
  border: 0.7px solid #d3d3d3;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

/* ===== 컴포넌트 함수들 ===== */

function Introduction() {
  return (
    <IntroductionWrapper>
      <img
        src={introduction}
        style={{ width: "min(189px, 60vw)", marginBottom: "8px" }}
      />
    </IntroductionWrapper>
  );
}

function ImageWrapper() {
  return (
    <PuppyImageWrapper>
      <img
        src={ribbonPuppys}
        style={{ width: "min(260px, 330vw)" }}
        alt="리본 강아지"
      />
    </PuppyImageWrapper>
  );
}

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

function AppLogo() {
  return <RebornLogo src={textLogo} alt="RE-BONE 로고" />;
}

function LoginButtonWrapper({ children }) {
  return <KaKaoButtonWrapper>{children}</KaKaoButtonWrapper>;
}

function LoginButton({ children, ...props }) {
  return (
    <KaKaoLoginButton {...props}>
      <img
        src={kakaoLogo}
        style={{
          width: "18px",
          position: "absolute",
          left: "20px",
        }}
        alt="카카오 아이콘"
      />
      {children}
    </KaKaoLoginButton>
  );
}

function CardInfo({ children }) {
  return <Text>{children}</Text>;
}

export {
  ImageWrapper,
  Introduction,
  Card,
  CardInfo,
  AppLogo,
  LoginButtonWrapper,
  LoginButton,
};
