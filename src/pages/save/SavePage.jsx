// 찜 페이지 (북마크)
import React, { useEffect, useState } from "react";
import * as S from "../../styles/StyledSave";
import { useLocation, useNavigate } from "react-router-dom";
import BottomCard from "../main/Component/BottomCard";
// import { getFavorites } from "../../utils/favorites";
import API from "../../api/axiosInstance";

const SavePage = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  // const location = useLocation();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (!userId) return;

    const fetch = async () => {
      try {
        const res = await API.get(`/api/admin/user-likes/${userId}`);
        // res.data.data = ["12345", "99999"] 구조번호 배열
        const desertionList = res.data.data;

        // 각 구조번호마다 동물 상세 불러오기
        const animalPromises = desertionList.map((no) =>
          API.get(`/api/animals/${no}`)
        );

        const results = await Promise.all(animalPromises);
        setList(results.map((r) => r.data.data));
      } catch (e) {
        console.error(e);
      }
    };

    fetch();
  }, [userId]);

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
