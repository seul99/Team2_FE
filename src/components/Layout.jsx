import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

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
  background: url("../images/components/Background.png");
  display: flex;
  flex-direction: column;
  cursor: default;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Layout = () => {
  const location = useLocation();

  const navPages = ["/MainPage", "/SavePage", "/SearchPage", "/ChatbotPage"];
  const isShowNav = navPages.includes(location.pathname);
  return (
    <Container>
      <Box>
        <Header />
        <Outlet />
        {isShowNav && <NavigationBar />}
      </Box>
    </Container>
  );
};

export default Layout;
