import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin-top: 18px;
  position: relative;
`;

const Logo1 = styled.img`
  width: 50px;
`;
const Logo2 = styled.img`
  width: 80px;
`;

const BackBtn = styled.img`
  cursor: pointer;
`;

const CenterText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

const AIText = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-left: 35%;
`;

const Header = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFilterPage = location.pathname.startsWith("/Filter");
  const isAnimalPage = location.pathname.startsWith("/AnimalList");
  const isSavePage = location.pathname.startsWith("/SavePage");
  const isAIRecommList = location.pathname.startsWith("/AIRecommList");
  const isSearchPage = location.pathname.startsWith("/SearchPage");

  return (
    <Container>
      <Box>
        {/* 헤더 로고버전 */}
        {type === "logo" && (
          <Logo1 src="../images/components/new_logo.svg" alt="logo" />
        )}
        {type === "logo" && (
          <Logo2 src="../images/components/TextLogo.svg" alt="logo" />
        )}

        {/* 헤더 isOnlyBack  필터헤더 버전 */}
        {type === "onlyBack" && (
          <BackBtn
            src="../images/components/Backbtn.svg"
            alt="Backbtn"
            onClick={() => navigate(-1)}
          />
        )}
        {isFilterPage && <CenterText>상세페이지</CenterText>}
        {isAnimalPage && <CenterText>유기동물 리스트 조회</CenterText>}
        {isSavePage && <CenterText>저장 목록</CenterText>}
         {isAIRecommList && <AIText>AI 추천 목록</AIText>}
        {isSearchPage && <CenterText>검색 결과</CenterText>}
      </Box>
    </Container>
  );
};

export default Header;
