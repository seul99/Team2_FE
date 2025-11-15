import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 220px;
  height: 40px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #f1b5c3;
  background: #fff;
  input {
    border: none;
    height: 35px;
    width: 180px;
    outline: none;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 4px;
    cursor: pointer;
  }
`;
const SearchBar = () => {
  return (
    <Container>
      <input type="text" placeholder="검색어를 입력하세요" />
      <img src="../images/components/serch.svg" alt="search" />
    </Container>
  );
};

export default SearchBar;
