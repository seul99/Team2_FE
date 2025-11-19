import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;

export const Box = styled.div`
  width: 100%;
  //   min-height: 100vh;
  flex-direction: column;
  display: flex;
  padding-bottom: 100px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$hasItems &&
    `
    grid-template-columns: repeat(2, 1fr);
    padding: 0 10px;
  `}
`;

export const BgLogo = styled.img``;

export const Coment = styled.div`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-top: -70px;
`;

export const GotoMainBtn = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140.5%; /* 22.48px */
  display: inline-flex;
  padding: 8px 15px;
  widht: 50px;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  gap: 10px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
