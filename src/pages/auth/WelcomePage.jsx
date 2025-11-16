import React from "react";
import {
  ImageWrapper,
  WelcomeWrapper,
  WelcomeName,
  WelcomeSub,
  GoToMainButton,
} from "../../styles/StyledAuth";
import ribbonPuppys from "/images/auth/RibbonPuppys.png";
import rightImg from "/images/auth/chevron-right.png";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");
  return (
    <div>
      <ImageWrapper>
        <img
          src={ribbonPuppys}
          style={{
            width: "246px",
          }}
        />
      </ImageWrapper>
      <WelcomeWrapper>
        <WelcomeName>{nickname ? `${nickname}님` : "username"}</WelcomeName>
        <WelcomeSub>가입을 환영합니다</WelcomeSub>
        <GoToMainButton onClick={() => navigate("/MainPage")}>
          🐾 동물 보러가기
          <img src={rightImg} style={{ width: "22px" }} />
        </GoToMainButton>
      </WelcomeWrapper>
    </div>
  );
};

export default WelcomePage;
