import styled from "styled-components";

export const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fbe5e9;
  border-top: 1.5px solid #ffffffff;
  overflow: hidden;
`;

// 개별 탭
export const NavItem = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  padding-bottom: 25px;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => ($active ? "#FF5E82" : "#868DA6")};
  font-weight: 500;
  font-size: 9px;
`;

// 아이콘
export const NavIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
`;

// 라벨(텍스트)
export const NavLabel = styled.p`
  margin: 0;

  color: inherit; // NavItem의 color 따라감
  text-align: center;

  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 9.9px */

  font-feature-settings: "liga" off, "clig" off;
`;

export const ChatBotButton = styled.button`
  background-color: #fbe5e9;
  border-radius: 150px;
  border: 1px solid #ffffff;
  position: absolute;
  bottom: 50px;

  width: 91px;
  height: 91px;

  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transform: translateY(-15px);
  z-index: 2;
  box-shadow: 1px 2px 5px 0 #69686887;
`;
