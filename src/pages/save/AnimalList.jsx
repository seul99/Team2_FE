//유기동물 보러가기
import React, { useState, useEffect } from "react";
import * as A from "../../styles/StyledAnimal";
import BottomCard from "../main/Component/BottomCard";
// import { mock } from "../main/Component/mockData";
import API from "../../api/axiosInstance";

const AnimalList = ({ item }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const tabList = [
    { key: "all", label: "전체" },
    { key: "dog", label: "강아지" },
    { key: "cat", label: "고양이" },
  ];

  // api 호출
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await API.get("/api/animals", {
          params: {
            page: 0,
            size: 100, // 넉넉하게 받기
            isLatest: true,
          },
        });

        setAnimals(res.data.data.content);
      } catch (err) {
        console.error("AnimalList API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const filterData =
    selectedTab === "all"
      ? animals
      : animals.filter((item) =>
          selectedTab === "dog"
            ? item.animalTypeName === "개"
            : item.animalTypeName === "고양이"
        );
  return (
    <A.Container>
      <A.Box>
        {/* 탭바 */}
        <A.TapBar>
          {tabList.map((tab) => {
            return (
              <A.TapName
                key={tab.key}
                $active={selectedTab === tab.key}
                onClick={() => setSelectedTab(tab.key)}
              >
                {tab.label}
              </A.TapName>
            );
          })}
        </A.TapBar>
        <A.Bottom>
          {filterData.map((animal) => (
            <BottomCard key={animal.desertionNo} item={animal} />
          ))}
        </A.Bottom>
      </A.Box>
    </A.Container>
  );
};

export default AnimalList;
