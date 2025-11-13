import React from "react";
import * as B from "./StyledBottomCard";
import { useNavigate } from "react-router-dom";

const BottomCard = ({ data }) => {
  const navigate = useNavigate();

  // 버튼 클릭 시 상세페이지로 이동
  const handleClick = () => {
    navigate(`/detail/${data.desertionNo}`);
  };

  return (
    <B.Container>
      {data.map((item) => (
        <B.Box key={item.desertionNo} onClick={handleClick}>
          <B.Img src={item.images} alt={item.breedName} />
          <B.Code>
            보호번호 <br />
            {item.desertionNo}
          </B.Code>
          <B.Info>
            {item.breedName} {item.age} {item.sex}
          </B.Info>
        </B.Box>
      ))}
    </B.Container>
  );
};

export default BottomCard;
