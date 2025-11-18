import React, { useState, useEffect } from "react";
import * as S from "../../styles/StyledSearch";
import BottomCard from "../main/Component/BottomCard";
import { useLocation } from "react-router-dom";
// import { mock } from "../main/Component/mockData";
import API from "../../api/axiosInstance";

const SearchPage = () => {
  const { state } = useLocation();

  const { startDate, endDate, checked, area, city, type, sex, neuter } =
    state || {};

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const filteredData = mock.filter((item) => {
  //   console.log("---- CHECKING ITEM ----");
  //   console.log("province:", item.province);
  //   console.log("city:", item.city);
  //   console.log("type:", item.animalTypeName);
  //   console.log("sex:", item.sex);
  //   console.log("neuter:", item.neuterStatus);
  //   console.log("status:", item.status);
  //   console.log(
  //     "start:",
  //     item.noticeStartDate,
  //     ">= ",
  //     startDate?.replace(/-/g, "")
  //   );
  //   console.log("end:", item.noticeEndDate, "<= ", endDate?.replace(/-/g, ""));
  //   // 지역 조건
  //   const matchProvince =
  //     area?.value && area.value !== "all"
  //       ? item.province.includes(area.label)
  //       : true;

  //   const matchCity =
  //     city?.value && area?.value !== "all"
  //       ? item.city.includes(city.label)
  //       : true;

  //   // 축종
  //   const matchType =
  //     type?.value !== "all" ? item.animalTypeName === type.label : true;

  //   // 성별
  //   const matchSex = sex?.value !== "all" ? item.sex === sex.label : true;

  //   // 중성화
  //   const matchNeuter =
  //     neuter?.value !== "all" ? item.neuterStatus.includes(neuter.label) : true;

  //   // 보호중
  //   const matchProtection = checked ? item.status === "보호중" : true;

  //   // 날짜 범위
  //   const start = startDate?.replace(/-/g, "");
  //   const end = endDate?.replace(/-/g, "");

  //   const matchStart = start ? item.noticeStartDate >= start : true;
  //   const matchEnd = end ? item.noticeEndDate <= end : true;

  //   return (
  //     matchProvince &&
  //     matchCity &&
  //     matchType &&
  //     matchSex &&
  //     matchNeuter &&
  //     matchProtection &&
  //     matchStart &&
  //     matchEnd
  //   );
  // });

  // console.log("STATE:", state);
  // console.log("MOCK:", mock);
  // console.log("FILTERED:", filteredData);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await API.get("/api/animals", {
          params: {
            // 날짜 yyyy-MM-dd → yyyyMMdd
            startDate: startDate?.replace(/-/g, ""),
            endDate: endDate?.replace(/-/g, ""),

            // 지역
            province: area?.label || null,
            city: city?.label || null,

            // 축종
            animalType:
              type?.value === "dog"
                ? "DOG"
                : type?.value === "cat"
                ? "CAT"
                : null,

            // 성별
            sex:
              sex?.label === "암컷"
                ? "FEMALE"
                : sex?.label === "수컷"
                ? "MALE"
                : null,

            // 중성화
            neuterStatus:
              neuter?.label === "중성화"
                ? "YES"
                : neuter?.label === "중성화 안 함"
                ? "NO"
                : null,

            // 보호중만
            onlyProtecting: checked || false,

            // 최신순
            isLatest: true,
          },
        });

        setData(res.data.data.content);
      } catch (err) {
        console.error("검색 결과 조회 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [startDate, endDate, area, city, type, sex, neuter, checked]);

  if (loading) return <div>로딩중...</div>;

  return (
    <S.Container>
      <S.Box>
        {data.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          data.map((item) => <BottomCard key={item.desertionNo} item={item} />)
        )}
      </S.Box>
    </S.Container>
  );
};

export default SearchPage;
