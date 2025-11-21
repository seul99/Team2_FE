// 메인 페이지
import React, { useEffect, useState } from "react";
import * as M from "../../styles/StyledMain";
import TopCardList from "./Component/TopCardList";
import BottomCard from "./Component/BottomCard";
import { useNavigate } from "react-router-dom";

import API from "../../api/axiosInstance";
import MainBtn from "../../components/MainBtn";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const navigate = useNavigate();

  const [bottomList, setBottomList] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  // 무한스크롤
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const bottomBoxRef = React.useRef(null);
  const bottomRef = React.useRef(null);

  // 스크롤
  const [hideTop, setHideTop] = useState(false);

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
      if (isLast) return;

      try {
        const res = await API.get("/api/animals", {
          params: {
            page,
            size: 20,
            isLatest: true,
          },
        });

        const newContent = res.data.data.content;

        // 중복 제거 포함해서 업데이트
        setBottomList((prev) => {
          const combined = [...prev, ...newContent];
          return Array.from(
            new Map(combined.map((item) => [item.desertionNo, item])).values()
          );
        });

        setIsLast(res.data.data.last);
      } catch (err) {
        console.error("BottomCard API error:", err);
      }
    };

    fetchBottomList();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLast) {
          setPage((prev) => prev + 1);
        }
      },
      {
        // root: bottomBoxRef.current,
        root: null,
        threshold: 1,
      }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [isLast]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
    <M.Container
      onScroll={(e) => {
        const y = e.target.scrollTop;
        setHideTop(y > 30);
      }}
    >
      <M.Box>
        <M.TopBox $hide={hideTop}>
          <TopCardList userLikes={userLikes} />
          <MainBtn />
        </M.TopBox>

        <M.StikyWrapper>
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

            <M.FilterBtn
              src="/images/components/filter.svg"
              alt="filter"
              onClick={() => navigate("/Filter")}
            />
          </M.TapBar>
        </M.StikyWrapper>
        {/* 무한스크롤 카드 */}
        <M.BottomBox ref={bottomBoxRef} $scroll={hideTop}>
          {filterData.map((item) => (
            <BottomCard
              key={item.desertionNo}
              item={item}
              userLikes={userLikes}
            />
          ))}
          <div ref={bottomRef} style={{ height: "1px" }} />
        </M.BottomBox>
      </M.Box>
    </M.Container>
  );
};

export default MainPage;
