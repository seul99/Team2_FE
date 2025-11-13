// /
import React from "react";
import { Card, LoginButton } from "../../styles/StyledAuth";
import logo from "/images/auth/kakaoLogo.png";
import NavigationBar from "../../components/NavigationBar";

const AuthPage = () => {
  return (
    <div>
      <Card title="가입하기" subtitle="계정에 로그인을 해주세요.">
        <LoginButton>
          <img src={logo} style={{ width: "17px", marginRight: "9px" }} />
          카카오로 로그인
        </LoginButton>
      </Card>
    </div>
  );
};

export default AuthPage;
