// 찜 페이지 (북마크)
import React, { useEffect, useState } from "react";
import * as S from "../../styles/StyledSave";
import { useLocation, useNavigate } from "react-router-dom";
import BottomCard from "../main/Component/BottomCard";
import { getFavorites } from "../../utils/favorites";

const SavePage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setList(getFavorites());
  }, [location]);
  return (
    <S.Container>
      <S.Box $hasItems={list.length > 0}>
        {list.length === 0 ? (
          <>
            <S.BgLogo src="/images/components/likedLogo.svg" />
            <S.Coment>저장된 목록이 없습니다.</S.Coment>
            <S.GotoMainBtn onClick={() => navigate("/AnimalList")}>
              💞 유기동물 보러가기
              <img src="/images/components/rightBtn.svg" />
            </S.GotoMainBtn>
          </>
        ) : (
          list.map((item) => <BottomCard key={item.desertionNo} item={item} />)
        )}
      </S.Box>
    </S.Container>
  );
};

export default SavePage;
