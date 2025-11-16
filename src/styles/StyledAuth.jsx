import React from "react";
import { styled } from "styled-components";
import kakaoLogo from "/images/auth/kakaoLogo.png";
import textLogo from "/images/auth/TextLogo.png";
import introduction from "/images/auth/Introduction.png";
import ribbonPuppys from "/images/auth/RibbonPuppys.png";

const PuppyImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 126px 0px 0px 0px;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const StyledCardWrapper = style.div`
//     height: 449px;
// `;

const StyledCard = styled.div`
  display: flex;
  height: 390px;
  padding: 0px 0px 30px 0px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  background-color: white;
  border-radius: 30px;
  border: 1px solid #ebeff6;
  box-shadow: 0 8px 28px 0 rgba(109, 117, 143, 0.16);
  z-index: 10;
`;
const RebornLogo = styled.img`
  width: 170px;
  margin-top: 71px;
  margin-bottom: 7px;
`;
const Text = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 13px;
  margin-top: 7px;
  color: #868da6;
`;
const KaKaoButtonWrapper = styled.div`
  margin-top: 3px;
  display: flex;
`;

const KaKaoLoginButton = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 37px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fee500;
  color: #000000;
`;

// WelcomePage style
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
  line-height: 120%; /* 24px */
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
  line-height: 150%; /* 22.5px */
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

function Introduction() {
  return (
    <IntroductionWrapper>
      <img
        src={introduction}
        style={{ width: "189px", marginBottom: "73px" }}
      />
    </IntroductionWrapper>
  );
}
function ImageWrapper() {
  return (
    <PuppyImageWrapper>
      <img
        src={ribbonPuppys}
        style={{
          width: "246px",
        }}
      />
    </PuppyImageWrapper>
  );
}
function CardWrapper({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

function AppLogo() {
  return <RebornLogo src={textLogo} />;
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
  CardWrapper,
  CardInfo,
  AppLogo,
  LoginButtonWrapper,
  LoginButton,
};
