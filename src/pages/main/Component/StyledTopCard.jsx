import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
`;
export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  width: 310px;
  aspect-ratio: 16 / 7; /* 16:10 비율 유지 */
  object-fit: cover;
  background: #fff8cf65;
  border: 1px solid #b7c0d2;
  border-radius: 25px;
  display: flex;
  padding: 15px 15px;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  object-fit: cover;
`;
export const Info = styled.div`
  font-family: "Pretendard", sans-serif;
  color: #200e32;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 10px;
  right: 5px;
`;

export const Name = styled.div`
  font-weight: 700;
`;
export const Code = styled.div`
  font-size: 11px;
`;
export const ShelterName = styled.div`
  font-size: 11px;
  color: #8c8098;
`;
export const Date = styled.div`
  color: #f86f8e;
  border: 1px solid #f0b2c0;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 540;
  padding: 1px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin-left: 10px;
`;
export const GotoDetail = styled.div`
  width: 90px;
  height: 20px;
  border: 1px solid #f86f8e;
  color: #f86f8e;
  border-radius: 50px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  padding: 15px 10px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }
`;
