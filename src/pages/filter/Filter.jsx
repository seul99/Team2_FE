import React, { useState, useEffect } from "react";
import * as F from "../../styles/StyledFilter";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";

const filterConfig = {
  type: [
    { value: "all", label: "전체" },
    { value: "dog", label: "개" },
    { value: "cat", label: "고양이" },
  ],
  sex: [
    { value: "all", label: "전체" },
    { value: "female", label: "암컷" },
    { value: "male", label: "수컷" },
  ],
  neuter: [
    { value: "all", label: "전체" },
    { value: "yes", label: "중성화" },
    { value: "no", label: "중성화 안 함" },
  ],
};

const commonFilterList = [
  { key: "type", title: "축종 설정" },
  { key: "sex", title: "성별 설정" },
  { key: "neuter", title: "중성화" },
];

const Filter = ({ onSearch }) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    area: null,
    city: null,
    type: filterConfig.type[0],
    sex: filterConfig.sex[0],
    neuter: filterConfig.neuter[0],
  });

  const [provinceOptions, setProvinceOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checked, setChecked] = useState(false);

  // 기본 날짜: 오늘 ~ 한 달 뒤
  useEffect(() => {
    const today = new Date();
    const end = today.toISOString().slice(0, 10);

    const past = new Date();
    past.setMonth(past.getMonth() - 3);
    const start = past.toISOString().slice(0, 10);

    setStartDate(start);
    setEndDate(end);
  }, []);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await API.get("/api/animals/provinces");

        const list = res.data?.data || [];

        setProvinceOptions(
          list.map((p) => ({
            value: p,
            label: p,
          }))
        );
      } catch (err) {
        console.error("❌ 시/도 목록 조회 실패:", err);
      }
    };

    fetchProvinces();
  }, []);

  const handleAreaChange = async (v) => {
    setSelected((prev) => ({
      ...prev,
      area: v,
      city: null,
    }));

    if (!v?.value) {
      setCityOptions([]);
      return;
    }

    try {
      const res = await API.get("/api/animals/cities", {
        params: { province: v.value },
      });

      const list = res.data?.data || [];

      setCityOptions(
        list.map((c) => ({
          value: c,
          label: c,
        }))
      );
    } catch (err) {
      console.error(" 시/군/구 목록 조회 실패:", err);
    }
  };

  const handleCityChange = (v) => {
    setSelected((prev) => ({
      ...prev,
      city: v,
    }));
  };

  const goSearch = () => {
    navigate("/SearchPage", {
      state: {
        startDate,
        endDate,
        checked,
        ...selected,
      },
    });
  };

  return (
    <F.Container>
      <F.Box>
        <F.Toptitle>
          <F.TopText>검색조건 설정</F.TopText>
        </F.Toptitle>

        <F.FilterBox>
          {/* 기간 설정 */}
          <F.Filter>
            <F.Subtitle>기간 설정</F.Subtitle>
            <F.PeriodBox>
              <F.DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span>~</span>
              <F.DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </F.PeriodBox>
          </F.Filter>

          {/* 지역 설정 */}
          <F.Filter>
            <F.Subtitle>지역 설정</F.Subtitle>
            <F.SelectWrap>
              <F.StyledSelect
                classNamePrefix="react-select"
                options={provinceOptions}
                placeholder="시/도 선택"
                onChange={handleAreaChange}
                value={selected.area}
              />

              <F.StyledSelect
                classNamePrefix="react-select"
                placeholder="시/군/구"
                isDisabled={!selected.area}
                options={cityOptions}
                onChange={handleCityChange}
                value={selected.city}
              />
            </F.SelectWrap>
          </F.Filter>

          {/* 축종 / 성별 / 중성화 */}
          {commonFilterList.map((filter) => (
            <F.Filter key={filter.key}>
              <F.Subtitle>{filter.title}</F.Subtitle>
              <F.StyledSelect
                classNamePrefix="react-select"
                options={filterConfig[filter.key]}
                defaultValue={filterConfig[filter.key][0]}
                onChange={(v) =>
                  setSelected((prev) => ({
                    ...prev,
                    [filter.key]: v,
                  }))
                }
              />
            </F.Filter>
          ))}

          {/* 보호중만 */}
          <F.StatusFilter>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <F.StatusText>보호중만 보기</F.StatusText>
          </F.StatusFilter>
        </F.FilterBox>

        <F.SearchBtn onClick={goSearch}>검색하기</F.SearchBtn>
      </F.Box>
    </F.Container>
  );
};

export default Filter;
