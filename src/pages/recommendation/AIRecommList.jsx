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
        console.log("userId:", userId);

        if (!userId) {
          console.warn("userId가 없습니다. 로그인 후 이용해주세요.");
          setAnimals([]);
          return;
        }

        // 사용자 관심 임베딩 계산
        try {
          const embeddingRes = await API.post(
            `/api/admin/user-interests/${userId}/embedding`
          );
          console.log("사용자 임베딩 재계산 완료: ", embeddingRes.data);
        } catch (embedErr) {
          console.log("사용자 임베딩 재계산 실패: ", embedErr);
          // 여기서 바로 return 할지, 그냥 추천 API만 호출해볼지는 팀이랑 합의
        }

        const res = await API.get("/api/recommendations", {
          params: {
            userId: userId,
            top: 8,
          },
        });
        console.log("🔥 전체 응답 객체 (res):", res);
        console.log("📦 데이터 본문 (res.data):", res.data);

        if (res.data.success && Array.isArray(res.data.data)) {
          setAnimals(res.data.data);
        } else {
          console.warn("올바르지 않은 데이터 형식:", res.data);
          setAnimals([]);
        }
      } catch (err) {
        console.error("추천 API 호출 실패: ", err);
        setAnimals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommAnimals();
  }, []);

  return (
    <A.Container>
      <A.Box>
        {loading ? (
          <div style={{ padding: 16 }}>추천 목록을 불러오는 중입니다...</div>
        ) : animals.length === 0 ? (
          <div style={{ padding: 16 }}>
            아직 추천을 만들 만큼의 이용 기록이 없거나,
            <br />
            임베딩 계산 결과가 비어 있어요.
            <br />
            여러 유기동물 상세 페이지를 둘러보고 다시 와 주세요.
          </div>
        ) : (
          <A.Bottom>
            {animals.map((a) => (
              <BottomCard key={a.desertionNo} item={a} />
            ))}
          </A.Bottom>
        )}
      </A.Box>
    </A.Container>
  );
};

export default AIRecommList;
