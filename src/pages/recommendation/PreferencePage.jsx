import React, { useState, useEffect } from "react";
import * as R from "../../styles/StyledRecommend";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";
import LoadingSpinner from "../../components/LoadingSpinner";

const PreferencePage = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  const [summary1, setSummary1] = useState("");
  const [summary2, setSummary2] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await API.get(`/api/recommendations/summary`);
        console.log("요약 분석:", res.data);

        if (res.data?.success) {
          setSummary1(res.data.data.data1 || "");
          setSummary2(res.data.data.data2 || "");
        }
      } catch (e) {
        console.error("취향 요약 로딩 실패:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  // 로딩 화면
  if (loading)
    return (
      <R.Container>
        <R.Box>
          <R.LoadingWrapper>
            <LoadingSpinner />
            취향 분석중..
          </R.LoadingWrapper>
        </R.Box>
      </R.Container>
    );

  // 결과 화면
  return (
    <R.Container>
      <R.Box>
        <R.PageTitle>{nickname}님의 취향을 분석해보았어요!</R.PageTitle>

        <R.Illustration src="/images/components/likedLogo.svg" />

        <R.SummaryCard>
          <R.Title>분석완료!</R.Title>
          <R.InfoText>{summary1}</R.InfoText>
        </R.SummaryCard>

        <R.SubHeading>나의 반려동물 취향 요약</R.SubHeading>

        <R.InfoList>
          {summary2.split("\n").map((line, idx) => (
            <R.InfoItem key={idx}>{line}</R.InfoItem>
          ))}
        </R.InfoList>

        <R.GotoMainBtn onClick={() => navigate("/AIRecommList")}>
          AI 추천 동물 만나러 가기
          <img src="/images/components/rightBtn.svg" />
        </R.GotoMainBtn>

        <R.BottomSpacer />
      </R.Box>
    </R.Container>
  );
};

export default PreferencePage;
