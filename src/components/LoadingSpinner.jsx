import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2%;
  position: relative;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;

  animation: spin 1s linear infinite;
  z-index: 2;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Img2 = styled.img`
  position: absolute;
  top: 48.5%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정확히 가운데로 */
  z-index: 1; /* 아래에 위치 */
  width: 50px;
  height: 50px;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 58%; /* 10.44px */
`;

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Img src="/images/components/loding.svg" alt="loading" />
      <Img2 src="/images/main/GotoRecomBrn.svg" alt="loading2" />
      <Text>로딩중</Text>
    </Wrapper>
  );
};

export default LoadingSpinner;
