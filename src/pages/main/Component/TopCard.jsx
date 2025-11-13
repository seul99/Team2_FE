import React from "react";
import { useNavigate } from "react-router-dom";
import * as T from "./StyledTopCard";

const TopCard = ({ data }) => {
  // {images, breedName, age, sex, noticeEndDate, desertionNo, shelterName}
  const navigate = useNavigate();

  // 버튼 클릭 시 상세페이지로 이동
  const handleClick = () => {
    navigate(`/detail/${data.desertionNo}`);
  };

  const formatDate = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}.${month}.${day}`;
  };

  return (
    <T.Container>
      <T.Box>
        <T.TopBox>
          <T.Img src={data.images} alt={data.breedName} />
          <T.Info>
            <T.Name>
              {data.breedName} {data.age} {data.sex}
            </T.Name>
            <T.Code>보호번호 {data.desertionNo}</T.Code>
            <T.ShelterName>{data.shelterName}</T.ShelterName>
          </T.Info>
        </T.TopBox>
        <T.BottomBox>
          <T.Date>{formatDate(data.noticeEndDate)}</T.Date>
          <T.GotoDetail onClick={handleClick}>보러가기</T.GotoDetail>
        </T.BottomBox>
      </T.Box>
    </T.Container>
  );
};

export default TopCard;
