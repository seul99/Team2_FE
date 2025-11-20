import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "../styles/StyledNav";
import chatbot from "/images/common/chatbotIcon.png";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    {
      path: "/MainPage",
      label: "홈",
      icon: "/images/common/homeIcon.png",
      fill_icon: "/images/common/homeIconFilled.png",
    },
    {
      path: "/RecommPage",
      label: "추천",
      icon: "/images/common/recommIcon.png",
      fill_icon: "/images/common/recommIconFilled.png",
    },
    {
      path: "/SavePage",
      label: "저장",
      icon: "/images/common/heartIcon.png",
      fill_icon: "/images/common/heartIconFilled.png",
    },
    {
      label: "마이페이지",
      icon: "/images/common/userIcon.png",
      fill_icon: "/images/common/userIconFilled.png",
    },
  ];

  return (
    <N.NavContainer>
      <N.NavBar>
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;

          return (
            <N.NavItem
              key={tab.path}
              $active={isActive}
              onClick={() => navigate(tab.path)}
            >
              <N.NavIcon
                src={isActive ? tab.fill_icon : tab.icon}
                alt={tab.label}
              />
              <N.NavLabel>{tab.label}</N.NavLabel>
            </N.NavItem>
          );
        })}
      </N.NavBar>
    </N.NavContainer>
  );
};
export default NavigationBar;
