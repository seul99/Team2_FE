import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
`;

const Logo = styled.img`
  width: 93px;
  height: 12.467px;
  flex-shrink: 0;
`;

const LikeBtn = styled.img`
  width: 30px;
  cursor: pointer;
`;

const BackBtn = styled.img`
  cursor: pointer;
`;

const Header = ({ type }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box>
        {type === "logo" && (
          <Logo src="../images/components/logo.svg" alt="logo" />
        )}
        {type === "back" && (
          <BackBtn
            src="../images/components/Backbtn.svg"
            alt="Backbtn"
            onClick={() => navigate("/mainPage")}
          />
        )}
        {type === "logo" && <SearchBar />}
        {type === "back" && (
          <LikeBtn src="../images/components/LikeBtn.svg" alt="LikeBtn" />
        )}
      </Box>
    </Container>
  );
};

export default Header;
