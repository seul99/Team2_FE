import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  padding: 35px 0px 35px 0px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  color: black;
  border-radius: 30px;
  border: 1px solid #ebeff6;
  box-shadow: 4px 4px 8px 0 #edededff, 0 6px 15px 0 #f9f9f9ff;
`;

const Title = styled.text`
  font-size: 28px;
  font-weight: bold;
`;
const SubTitle = styled.text`
  margin: 5px;
  pading: 15px;
`;

const KaKaoLoginButton = styled.button`
  width: 300px;s
  height: 45px;
  margin-top: 50px;
  background-color: #fee500;
  color: #000000;
`;


function Card({ children, title, subtitle }) {
  return (
    <StyledCard>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {children}
    </StyledCard>
  );
}

function LoginButton({ children }) {
  return <KaKaoLoginButton>{children}</KaKaoLoginButton>;
}
export { Card, LoginButton };
