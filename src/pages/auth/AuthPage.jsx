import React from "react";
import {
  ImageWrapper,
  Introduction,
  Card,
  AppLogo,
  CardInfo,
  LoginButton,
} from "../../styles/StyledAuth";
import { userManager } from "../../../oidc-config";

import ribbonPuppys from "/images/auth/RibbonPuppys.png";

const AuthPage = () => {
  const handleKakaoLogin = () => {
    userManager.signinRedirect();
  };

  return (
    <div>
      <ImageWrapper>
        <img src={ribbonPuppys} style={{ width: "246px" }} />
      </ImageWrapper>

      <Introduction />

      <Card>
        <AppLogo />
        <CardInfo>계정에 로그인을 해주세요.</CardInfo>

        <LoginButton onClick={handleKakaoLogin}>카카오 로그인</LoginButton>
      </Card>
    </div>
  );
};

export default AuthPage;
