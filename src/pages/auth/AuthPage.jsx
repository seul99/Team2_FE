// /
import React from "react";
import {
  ImageWrapper,
  Card,
  AppLogo,
  CardInfo,
  LoginButton,
} from "../../styles/StyledAuth";
import kakaoLogo from "/images/auth/kakaoLogo.png";
import ribbonPuppys from "/images/auth/RibbonPuppys.png";

const AuthPage = () => {
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
      <Card>
        <AppLogo />
        <CardInfo>계정에 로그인을 해주세요.</CardInfo>

        
          <LoginButton>카카오 로그인</LoginButton>
        
      </Card>
    </div>
  );
};

export default AuthPage;
