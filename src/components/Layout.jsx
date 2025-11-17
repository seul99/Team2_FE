import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import loginBg from "/images/components/LoginBackground.png";
import defaultBg from "/images/components/Background.png";
import chatbotBg from "/images/components/ChatbotBackground.png";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  background-image: url(${(props) => props.$backgroundImage});

  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  cursor: default;

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
  "/Detail": defaultBg, //변경필요
  "/SavePage": defaultBg, //변경필요
  "/SearchPage": defaultBg, // 변경 필요
  "/ChatbotPage": chatbotBg, // 변경 필요
};

const getBackgroundImage = (pathname) => {
  return bgMap[pathname];
};

const Layout = () => {
  const location = useLocation();

  const navPages = [
    "/MainPage",
    "/SavePage",
    "/SearchPage",
    "/ChatbotPage",
    "/Shelter",
  ];

  const isShowNav = navPages.includes(location.pathname);

  const backBtnPages = ["/detail"];

  const onlyBackPage = ["/Filter", "/Shelter", "/ChatbotPage"];

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/WelcomePage";

  // const isBackPage = backBtnPages.some((path) =>
  //   location.pathname.startsWith(path)
  // );

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
        {!isAuthPage && <Header type={headerType} />}
        <Outlet />
        {isShowNav && <NavigationBar />}
      </Box>
    </Container>
  );
};

export default Layout;
