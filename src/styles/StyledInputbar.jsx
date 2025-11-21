import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 24px 20px;
  display: flex;
  gap: 12px;
  background: rgba(251, 246, 255, 0.95);
  flex-shrink: 0;
`;

export const InputArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 80px;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 1);
  padding: 0 16px 0 23px;
`;

export const ChatInput = styled.input`
  flex: 1;
  height: 56px;
  border: none;
  outline: none;
  background: transparent;
  font-family: Inter;
  font-size: 13px;
`;

export const SearchIcon = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const MicInput = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 0 1px #f0b2c0;
  background: rgba(251, 246, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
