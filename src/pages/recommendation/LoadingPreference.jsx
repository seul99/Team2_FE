import React, { useEffect } from "react";
import styled from "styled-components";
import LoadingSpinner from "../../components/LoadingSpinner";
import API from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  margin-top: 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const LoadingPreference = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await API.get(`/api/recommendations/summary`);
        console.log("요약 분석 완료:", res.data);
      } catch (e) {
        console.error("취향 분석 실패:", e);
      } finally {
        navigate("/PreferencePage"); // 분석 완료 후 이동
      }
    };

    fetchSummary();
  }, []);

  return (
    <Wrapper>
      <LoadingSpinner />
      <Message>취향 분석 중...</Message>
    </Wrapper>
  );
};

export default LoadingPreference;
