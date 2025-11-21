import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  background: linear-gradient(180deg, #fff 0%, #fff9fb 100%);
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px 120px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0 18px;
`;

export const BackIcon = styled.div`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const IconWrap = styled.div`
  margin: 24px 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SummaryCard = styled.div`
  width: 90%;
  max-width: 420px;
  background: linear-gradient(180deg, rgba(255, 245, 249, 0.9), #fff);
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: 0 6px 18px rgba(15, 8, 20, 0.06);
  box-sizing: border-box;
`;

export const Title = styled.div`
  color: #200e32;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const InfoText = styled.div`
  margin-top: 8px;
  color: #333;
  font-family: Pretendard;
  font-size: 14px;
  line-height: 1.6;
`;

export const ActionButton = styled.button`
  width: 90%;
  max-width: 420px;
  margin-top: 22px;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  background: linear-gradient(90deg, #ffdbe6 0%, #fff1f6 100%);
  border: 1px solid rgba(226, 160, 183, 0.6);
  color: #200e32;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const BottomSpacer = styled.div`
  height: 90px; /* reserve space for bottom nav */
`;

export const SmallNote = styled.div`
  margin-top: 12px;
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 13px;
  text-align: center;
`;

export default {};
