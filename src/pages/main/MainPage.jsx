// 메인 페이지
import React, { useState } from "react";
import * as M from "../../styles/StyledMain";
import TopCardList from "./component/TopCardList";
import BottomCard from "./Component/BottomCard";
import { useNavigate } from "react-router-dom";
import { mock } from "./Component/mockData.js";

const MainPage = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const navigate = useNavigate();

  //상세페이지 이동
  const goToDetail = () => {
    navigate(`/detail/${data.desertionNo}`);
  };

  const goToSearch = () => {
    navigate("/SearchPage");
  };

  const tabList = [
    { key: "all", label: "전체" },
    { key: "dog", label: "강아지" },
    { key: "cat", label: "고양이" },
  ];

  const filterData =
    selectedTab === "all"
      ? mock
      : mock.filter((item) =>
          selectedTab === "dog"
            ? item.animalTypeName === "개"
            : item.animalTypeName === "고양이"
        );

  return (
    <M.Container>
      <M.Box>
        <TopCardList />
        {/* 탭바 */}
        <M.TapBar>
          {tabList.map((tab) => {
            return (
              <M.TapName
                key={tab.key}
                active={selectedTab === tab.key}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </M.TapName>
            );
          })}
        </M.TapBar>
        {/* 무한스크롤 카드 */}
        <M.BottomBox>
          <BottomCard data={filterData} />
        </M.BottomBox>
      </M.Box>
    </M.Container>
  );
};

export default MainPage;
