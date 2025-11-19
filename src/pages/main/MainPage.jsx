// 메인 페이지
import React, { useEffect, useState } from "react";
import * as M from "../../styles/StyledMain";
import TopCardList from "./Component/TopCardList";
import BottomCard from "./Component/BottomCard";
import { useNavigate } from "react-router-dom";

import API from "../../api/axiosInstance";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const navigate = useNavigate();

  const [bottomList, setBottomList] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  useEffect(() => {
    const fetchUserLikes = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;
      const res = await API.get(`/api/admin/user-likes/${userId}`);
      setUserLikes(res.data.data);
    };
    fetchUserLikes();
  }, []);

  useEffect(() => {
    const fetchBottomList = async () => {
      try {
        const res = await API.get("/api/animals", {
          params: {
            page: 0,
            size: 20,
            isLatest: true, // 최신순으로 20개 가져오기
          },
        });

        setBottomList(res.data.data.content);
      } catch (err) {
        console.error("BottomCard API error:", err);
      }
    };

    fetchBottomList();
  }, []);

  const tabList = [
    { key: "all", label: "전체" },
    { key: "dog", label: "강아지" },
    { key: "cat", label: "고양이" },
  ];

  const filterData =
    selectedTab === "all"
      ? bottomList
      : bottomList.filter((item) =>
          selectedTab === "dog"
            ? item.animalTypeName === "개"
            : item.animalTypeName === "고양이"
        );

  return (
    <M.Container>
      <M.Box>
        <TopCardList userLikes={userLikes} />
        {/* 탭바 */}
        <M.TapBar>
          {tabList.map((tab) => {
            return (
              <M.TapName
                key={tab.key}
                $active={selectedTab === tab.key}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </M.TapName>
            );
          })}
        </M.TapBar>
        {/* 무한스크롤 카드 */}
        <M.BottomBox>
          {filterData.map((item) => (
            <BottomCard
              key={item.desertionNo}
              item={item}
              userLikes={userLikes}
            />
          ))}
        </M.BottomBox>
      </M.Box>
    </M.Container>
  );
};

export default MainPage;
