import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div``;
const Ment = styled.div`
  color: #868da6;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  //   line-height: 150%; /* 21px */
  margin: 0 30px;
  margin-bottom: 13px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 5px 0;
`;
const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  width: 150px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 2px solid #f1b3c1;
  //   background: #fff;
  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-4px); /* 위로 4px 떠오름 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* 그림자 더 진하게 */
  }

  background: radial-gradient(
    circle,
    rgba(240, 178, 192, 0.36) 0%,
    rgba(206, 5, 5, 0) 70%
  );
`;
const MainImg = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  //   line-height: 140%; /* 12.6px */
`;
const GoBtn = styled.div`
  display: flex;
  width: 98px;
  height: 21px;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #fbe5e9;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.45rem;
  font-style: normal;
  font-weight: 400;
  //   line-height: 100%; /* 8px */
  margin-top: 10px;
  cursor: pointer;
`;
const MainBtn = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Ment> 나에게 꼭 맞는 기능을 이용해보세요 </Ment>
      <Box>
        <BtnWrap>
          <MainImg src="/images/main/GotoChatImg.svg" alt="Btn" />
          <Text>
            궁금한점은 보니에게
            <br />
            편하게 물어보세요!
          </Text>
          <GoBtn onClick={() => navigate("/ChatbotPage")}>
            챗봇 보니 사용하기
          </GoBtn>
        </BtnWrap>
        <BtnWrap>
          <MainImg src="/images/main/GotoRecomBrn.svg" alt="Btn" />
          <Text>
            저장한 동물들을 기반으로 나에게 딱
            <br />
            맞는 반려동물을 만나보세요!
          </Text>
          <GoBtn onClick={() => navigate("/RecommPage")}>
            반려동물 추천받기
          </GoBtn>
        </BtnWrap>
      </Box>
    </Container>
  );
};

export default MainBtn;
