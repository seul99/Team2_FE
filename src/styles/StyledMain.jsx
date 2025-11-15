import styled from "styled-components";

export const Container = styled.div``;

export const Box = styled.div``;

export const TapBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 5px 24px;
  border-bottom: 1px solid #f0b2c0;
  position: relative;
`;

export const TapName = styled.div`
  cursor: pointer;
  color: ${({ active }) => (active ? "#868da6" : "#b7c0d2")};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: ${({ active }) => (active ? "#FF5E82" : "transparent")};
    transition: all 0.2s ease;
    border-radius: 80px;
  }

  &:hover {
    color: var(--Neutral-Colors-500, #868da6);
  }

  &:hover::after {
    // background: #ff5e82;
  }
`;

export const BottomBox = styled.div`
  height: 400px;
  padding-bottom: 20%;
  overflow-y: auto;
  scroll-behavior: smooth;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Optional: iOS smooth */
  -webkit-overflow-scrolling: touch;
`;
