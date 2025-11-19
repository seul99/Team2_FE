import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { saveFavorite } from "../utils/favorites";

const Container = styled.div``;
const Box = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  // margin-top: 10px;
`;

const Logo = styled.img`
  width: 70px;
  // height: 12.467px;
  flex-shrink: 0;
`;

const BackBtn = styled.img`
  cursor: pointer;
`;

const FilterBtn = styled.img`
  width: 22px;
  cursor: pointer;
`;

const MentBox = styled.img`
  padding-left: 20px;
`;

const DetailText = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.2px;
  margin-left: 50%;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-left: 25%;
`;
const SaveText = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-left: 35%;
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

  return (
    <Container>
      <Box>
        {/* 헤더 로고버전 */}
        {type === "logo" && (
          <Logo src="../images/components/new_logo.svg" alt="logo" />
        )}
        {type === "logo" && (
          <MentBox
            src="../images/header_ment/ment1.svg"
            alt="ment"
            // onClick={() => navigate("/Filter")}
          />
        )}

        {/* 
        {type === "logo" && (
          <FilterBtn
            src="../images/components/filter.svg"
            alt="filter"
            onClick={() => navigate("/Filter")}
          />
        )} */}

        {/* 헤더 isOnlyBack  필터헤더 버전 */}
        {type === "onlyBack" && (
          <BackBtn
            src="../images/components/Backbtn.svg"
            alt="Backbtn"
            onClick={() => navigate(-1)}
          />
        )}
        {isFilterPage && <DetailText>상세페이지</DetailText>}
        {isAnimalPage && <Text>유기동물 리스트 조회</Text>}
        {isSavePage && <SaveText>저장 목록</SaveText>}
        {isAIRecommList && <AIText>AI 추천 목록</AIText>}
      </Box>
    </Container>
  );
};

export default Header;
