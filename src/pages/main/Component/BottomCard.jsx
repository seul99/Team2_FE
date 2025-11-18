import React from "react";
import * as B from "./StyledBottomCard";
import { useNavigate } from "react-router-dom";

const BottomCard = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;
  return (
    <B.Container>
      <B.Box onClick={() => navigate(`/detail/${item.desertionNo}`)}>
        <B.Img
          src={
            item.thumbnailImage ||
            (Array.isArray(item.images) ? item.images[0] : item.images) ||
            "/images/default.png"
          }
          alt={item.breedName}
        />
        <B.Code>
          보호번호 <br />
          {item.desertionNo}
        </B.Code>
        <B.Info>
          {item.breedName} {item.age} {item.sex}
        </B.Info>
      </B.Box>
    </B.Container>
  );
};

export default BottomCard;
