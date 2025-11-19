import React, { useState, useEffect } from "react";
import * as A from "../../styles/StyledAnimal";
import BottomCard from "../main/Component/BottomCard";
import API from "../../api/axiosInstance";

const AIRecommList = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  // api 호출
  useEffect(() => {
    const fetchRecommAnimals = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await API.get("/api/recommendations", {
          params: {
            userId: userId, // 요청 파라미터: 사용자 식별자
            top: 8, // 요청 파라미터: 반환할 개수 (기본 8)
          },
        });
        console.log("🔥 전체 응답 객체 (res):", res);
        console.log("📦 데이터 본문 (res.data):", res.data);
        console.log("추천 데이터 수신 완료 ", res.data.data);

        if (res.data.success && Array.isArray(res.data.data)) {
          setAnimals(res.data.data);
        } else {
          console.warn("올바르지 않은 데이터 형식:", res.data);
          setAnimals([]); // 데이터가 없거나 이상하면 빈 배열
        }
      } catch (err) {
        console.error("추천 API 호출 실패: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommAnimals();
  }, []);

  return (
    <A.Container>
      <A.Box>
        <A.Bottom>
          {animals.map((a) => (
            <BottomCard key={a.desertionNo} item={a} />
          ))}
        </A.Bottom>
      </A.Box>
    </A.Container>
  );
};

export default AIRecommList;
