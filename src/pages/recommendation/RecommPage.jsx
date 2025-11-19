import React, { useEffect, useState } from "react";
import * as R from "../../styles/StyledRecommend";
import { useLocation, useNavigate } from "react-router-dom";

const RecommPage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <R.Container>
      <R.Box $hasItems={list.length > 0}>
        <R.BgLogo src="/images/components/likedLogo.svg" />
        <R.Coment>
          행동 기반 추천 AI를 이용하여 <br />
          나에게 딱 맞는 반려동물을 만나보세요!
        </R.Coment>

        <R.GotoMainBtn onClick={() => navigate("/AIRecommList")}>
          나에게 맞는 반려동물 찾기
          <img src="/images/components/rightBtn.svg" />
        </R.GotoMainBtn>
      </R.Box>
    </R.Container>
  );
};

export default RecommPage;
