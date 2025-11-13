import React, { useEffect, useRef } from "react";
import TopCard from "./TopCard";
import styled from "styled-components";
import { mock } from "./mockData";

const TopCardList = () => {
  const scrollRef = useRef(null);

  const infiniteData = [...mock, ...mock, ...mock, ...mock, ...mock];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.style.scrollBehavior = "auto";

    const cardWidth = container.clientWidth * 0.8 + 20;
    const middleIndex = mock.length * 2; 

    container.scrollLeft = cardWidth * middleIndex;

    setTimeout(() => {
      container.style.scrollBehavior = "smooth";
    }, 50);
  }, []);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollRef}>
        {infiniteData.map((item, idx) => (
          <CardWrapper key={`${idx}-${item.desertionNo}`}>
            <TopCard data={item} />
          </CardWrapper>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
};

export default TopCardList;

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
