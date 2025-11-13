import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  margin-top: 50px;

  img {
    width: 18.745px;
    height: 18.745px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <Box>
        <div>로고자리</div>
        <img src="../images/components/serch.svg" alt="search" />
      </Box>
    </Container>
  );
};

export default Header;
