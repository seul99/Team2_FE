import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import chatbot from "/images/common/chatbotIcon.png";

const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
`;
// 네비게이셔 바
const NavBar = styled.nav`
  bottom: 0;
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: space-around;

  background-color: #fbe5e9;
  border-top: 1.5px solid #ffffffff;
  border-radius: 30px 30px 0px 0px;
  overflow: hidden;
`;

// 네비게이션 개별 메뉴
const NavItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #868da6;
  font-weight: bold;
  font-size: 12px;
`;

const ChatBotButton = styled.button`
  background-color: #fbe5e9;
  border-radius: 150px;
  border: 1px solid #ffffff;
  position: absolute;
  bottom: 50px;
  display: flex;
  width: 91px;
  height: 91px;

  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: "translateY(-15px)";
  z-index: 2;
  box-shadow: 1px 2px 5px 0 #69686887;
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      path: "/MainPage",
      label: "홈",
      icon: "/images/common/homeIcon.png",
    },
    {
      path: "/SavePage",
      label: "저장",
      icon: "/images/common/heartIcon.png",
    },
  ];

  return (
    <NavContainer>
      <ChatBotButton onClick={() => navigate("/ChatbotPage")}>
        <img
          src={chatbot}
          style={{
            width: "111px",
            height: "111px",
            objectFit: "cover",
            transform: "translateY(25px)",
          }}
        />
        <p
          style={{
            color: "#868da6",
            fontWeight: "bold",
            fontSize: "12px",
            marginTop: "15px",
          }}
        >
          챗봇
        </p>
      </ChatBotButton>
      <NavBar>
        {tabs.map((tab) => (
          <NavItem
            key={tab.path}
            active={location.pathname === tab.path}
            onClick={() => navigate(tab.path)}
          >
            <img
              src={tab.icon}
              style={{ width: "24px", marginBotton: "4px" }}
            />
            <text style={{ padding: "3px" }}>{tab.label}</text>
          </NavItem>
        ))}
      </NavBar>
    </NavContainer>
  );
};
export default NavigationBar;
