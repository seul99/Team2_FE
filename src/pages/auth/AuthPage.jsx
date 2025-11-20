// AuthPage.jsx
import React from "react";
import {
  AuthPageWrapper,
  ImageWrapper,
  Introduction,
  ImageContainer,
  Card,
  AppLogo,
  CardInfo,
  LoginButton,
} from "../../styles/StyledAuth";
import { userManager } from "../../../oidc-config";

const AuthPage = () => {
  const handleKakaoLogin = () => {
    userManager.signinRedirect();
  };

  return (
    <AuthPageWrapper>
      {/* 상단 영역: 일러스트 + 소개 문구 */}
      <ImageContainer>
        <ImageWrapper />
        <Introduction />
      </ImageContainer>

      {/* 하단 카드 영역 */}
      <Card>
        <AppLogo />
        <CardInfo>계정에 로그인을 해주세요.</CardInfo>

        <LoginButton onClick={handleKakaoLogin}>카카오 로그인</LoginButton>
      </Card>
    </AuthPageWrapper>
  );
};

export default AuthPage;
