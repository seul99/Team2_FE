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
  background-image: url(${(props) => props.backgroundImage});
  display: flex;
  flex-direction: column;
  cursor: default;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const Layout = () => {
  const location = useLocation();
  const backgroundMap = {
    "/": loginBg,
    "/WelcomePage": loginBg,
    "/MainPage": defaultBg,
  };
  return (
    <Container>
      <Box backgroundImage={backgroundMap[location.pathname]}>
        {location.pathname != "/" || ("WelecomePage" && <Header />)}
        <Outlet />
        {location.pathname != "/" || ("WelecomePage" && <NavigationBar />)}
      </Box>
    </Container>
  );
};

export default Layout;
