import React, { useEffect, useRef, useState } from "react";
import TopCard from "./TopCard";
import styled from "styled-components";
// import { mock } from "./mockData";
import API from "../../../api/axiosInstance";

//  스타일
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 80%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const TopCardList = () => {
  const scrollRef = useRef(null);
  const [animals, setAnimals] = useState([]);

  // const infiniteData = [...mock, ...mock, ...mock, ...mock, ...mock];

  // useEffect(() => {
  //   const container = scrollRef.current;
  //   if (!container) return;

  //   container.style.scrollBehavior = "auto";

  //   const cardWidth = container.clientWidth * 0.8 + 20;
  //   const middleIndex = mock.length * 2;

  //   container.scrollLeft = cardWidth * middleIndex;

  //   setTimeout(() => {
  //     container.style.scrollBehavior = "smooth";
  //   }, 50);
  // }, []);

  useEffect(() => {
    const fetchRandomAnimals = async () => {
      try {
        // 1) 동물 리스트 200개 불러오기 (랜덤 뽑기용)
        const res = await API.get("/api/animals", {
          params: {
            page: 0,
            size: 200, // 데이터 많이 받을수록 랜덤 다양함
            isLatest: false, // 최신순 정렬 (옵션)
          },
        });

        const list = res.data.data.content;
        // 백엔드가 Page 형태로 줄 가능성 높음 (content 안에 리스트 있음)

        if (!list || list.length === 0) return;

        // 2) 랜덤 5개 선택
        const randomFive = list.sort(() => Math.random() - 0.5).slice(0, 5);

        // 3) 무한 슬라이드용 데이터 확장
        const repeated = [
          ...randomFive,
          ...randomFive,
          ...randomFive,
          ...randomFive,
          ...randomFive,
        ];

        setAnimals(repeated);

        // 4) 초기 스크롤 위치 세팅
        setTimeout(() => {
          const container = scrollRef.current;
          if (!container) return;

          container.style.scrollBehavior = "auto";

          const cardWidth = container.clientWidth * 0.8 + 20;
          const middleIndex = randomFive.length * 2;

          container.scrollLeft = cardWidth * middleIndex;

          setTimeout(() => {
            container.style.scrollBehavior = "smooth";
          }, 50);
        }, 0);
      } catch (err) {
        console.error("TopCard Random Error:", err);
      }
    };

    fetchRandomAnimals();
  }, []);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollRef}>
        {animals.map((item, idx) => (
          <CardWrapper key={`${idx}-${item.desertionNo}`}>
            <TopCard data={item} />
          </CardWrapper>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
};

export default TopCardList;
