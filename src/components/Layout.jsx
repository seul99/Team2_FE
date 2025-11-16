import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import loginBg from "/images/components/LoginBackground.png";
import defaultBg from "/images/components/Background.png";

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

const Layout = () => {
  const location = useLocation();
  const navPages = ["/MainPage", "/SavePage", "/SearchPage", "/ChatbotPage"];
  const isShowNav = navPages.includes(location.pathname);

  const backBtnPages = ["/detail"];

  const onlyBackPage = ["/Filter", "/Shelter"];

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

  const backgroundImage = isAuthPage ? loginBg : defaultBg;
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
