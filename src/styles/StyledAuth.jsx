import React from "react";
import { styled } from "styled-components";
import kakaoLogo from "/images/auth/kakaoLogo.png";
import textLogo from "/images/auth/TextLogo.png";
import introduction from "/images/auth/Introduction.png";

const PuppyImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 126px 0px 0px 0px;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

const KaKaoLoginButton = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 37px;
  background-color: #fee500;
  color: #000000;
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
function ImageWrapper({ children }) {
  return (
    <PuppyImageWrapper>
      {children}
      <Introduction></Introduction>
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
  <KaKaoButtonWrapper>{children}</KaKaoButtonWrapper>;
}

function LoginButton({ children }) {
  return <KaKaoLoginButton>{children}</KaKaoLoginButton>;
}

function CardInfo({ children }) {
  return <Text>{children}</Text>;
}
export {
  ImageWrapper,
  Card,
  CardWrapper,
  CardInfo,
  AppLogo,
  LoginButtonWrapper,
  LoginButton,
};
