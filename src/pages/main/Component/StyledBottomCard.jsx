import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Box = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  width: 150px;
  height: 225px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 3px 2px 6.6px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin-top: 25px;
  margin-bottom: 10px;
  //   background: #fcffe4ff;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-4px); /* 위로 4px 떠오름 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* 그림자 더 진하게 */
  }
`;
export const Img = styled.img`
  width: 130px;
  height: 140px;
  border-radius: 24px;
  object-fit: cover;
  object-position: center;
`;
export const Code = styled.div`
  overflow: hidden;
  color: var(--Neutral-Colors-500, #868da6);
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
`;
export const Info = styled.div`
  color: var(--Neutral-Colors-500, #868da6);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;
