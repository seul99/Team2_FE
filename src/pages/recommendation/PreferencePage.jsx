import React from "react";
import * as R from "../../styles/StyledRecommend";
import { useNavigate } from "react-router-dom";

const PreferenceAnalysis = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");

  return (
    <R.Container>
      <R.Box>
        {/* 상단 타이틀 */}
        <R.PageTitle>
          {nickname}님의 취향을 분석해보았어요!
        </R.PageTitle>

        {/* 대표 아이콘 / 일러스트 */}
        <R.Illustration src="/images/components/likedLogo.svg" />

        {/* 분석 결과 카드 */}
        <R.SummaryCard>
          <R.Title>분석완료!</R.Title>
          <R.InfoText>
            {nickname}님은 중성화된 어린 강아지들을 좋아하네요! 🐾
          </R.InfoText>
        </R.SummaryCard>

        {/* 요약 섹션 */}
        <R.SubHeading>나의 반려동물 취향 요약</R.SubHeading>

        <R.InfoList>
          <R.InfoItem>선호 동물 : 강아지 🐶 (말티즈, 비숑)</R.InfoItem>
          <R.InfoItem>평균 출생년도 : 2022년생 (2-3세)</R.InfoItem>
          <R.InfoItem>중성화 여부 : 대부분 완료 🌿</R.InfoItem>
        </R.InfoList>

        {/* 이동 버튼 (절대 스타일 수정 X) */}
        <R.GotoMainBtn onClick={() => navigate("/AIRecommList")}>
          AI 추천 동물 만나러 가기
          <img src="/images/components/rightBtn.svg" />
        </R.GotoMainBtn>

        {/* 네비게이션 영역 침범 방지 */}
        <R.BottomSpacer />
      </R.Box>
    </R.Container>
  );
};

export default PreferenceAnalysis;