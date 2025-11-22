import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import NavigationBar from "./NavigationBar";
import loginBg from "/images/components/LoginBackground.png";
import defaultBg from "/images/components/Background.png";
import chatbotBg from "/images/components/ChatbotBackground.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: #f0f0f0;
  overflow: hidden;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  max-width: 390px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  cursor: default;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
`;

const bgMap = {
  "/": loginBg,
  "/WelcomePage": loginBg,
  "/MainPage": defaultBg,
  "/detail/*": defaultBg,
  "/SavePage": defaultBg,
  "/SearchPage": defaultBg,
  "/ChatbotPage": chatbotBg,
  "/Filter": defaultBg,
  "/Shelter": defaultBg,
  "/AnimalList": defaultBg,
  "/oidc-callback": defaultBg,
};

const getBackgroundImage = (pathname) => {
  if (bgMap[pathname]) return bgMap[pathname];
  if (pathname.startsWith("/detail")) return defaultBg;
  return defaultBg;
};

const Layout = () => {
  const location = useLocation();

  const navPages = [
    "/MainPage",
    "/SavePage",
    "/SearchPage",
    "/Shelter",
    "/AnimalList",
    "/RecommPage",
    "/PreferencePage",
    "/AIRecommList",
    "/MyPage",
  ];

  const isShowNav = navPages.includes(location.pathname);
  const backBtnPages = ["/detail"];
  const onlyBackPage = [
    "/Filter",
    "/Shelter",
    "/ChatbotPage",
    "/SavePage",
    "/SearchPage",
    "/AnimalList",
    "/PreferencePage",
    "/RecommPage",
    "/AIRecommList",
    "/MyPage",
  ];

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/WelcomePage";

  let headerType = "logo";

  if (onlyBackPage.some((path) => location.pathname.startsWith(path))) {
    headerType = "onlyBack";
  } else if (backBtnPages.some((path) => location.pathname.startsWith(path))) {
    headerType = "back";
  }

  const backgroundImage = getBackgroundImage(location.pathname);

  return (
    <Container>
      <Box $backgroundImage={backgroundImage}>
        {!isAuthPage && !location.pathname.startsWith("/detail") && (
          <Header type={headerType} />
        )}
        <Outlet />
        {isShowNav && <NavigationBar />}
      </Box>
    </Container>
  );
};

export default Layout;
