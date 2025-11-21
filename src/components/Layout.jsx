import React from "react";
import styled from "styled-components";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";

import Header from "./Header";
import NavigationBar from "./NavigationBar";
import loginBg from "/images/components/LoginBackground.png";
import defaultBg from "/images/components/Background.png";
import chatbotBg from "/images/components/ChatbotBackground.png";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  position: relative;
`;

const Box = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100dvh;
  height: 100dvh;
  max-width: 390px;
  max-height: 844px;
  background-image: url(${(props) => props.$backgroundImage});

  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  cursor: default;

  overflow-y: hidden;
  overflow-x: hidden;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;
const bgMap = {
  "/": loginBg,
  "/WelcomePage": loginBg,
  "/MainPage": defaultBg,
  "/detail/*": defaultBg, //변경필요
  "/SavePage": defaultBg, //변경필요
  "/SearchPage": defaultBg, // 변경 필요
  "/ChatbotPage": chatbotBg, // 변경 필요
  "/Filter": defaultBg, // 변경 필요
  "/Shelter": defaultBg, // 변경 필요
  "/AnimalList": defaultBg, // 변경 필요
  "/oidc-callback": defaultBg, // 변경 필요
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
