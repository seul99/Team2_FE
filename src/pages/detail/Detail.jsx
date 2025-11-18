import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as D from "../../styles/StyledDetail";
// import { mock } from "../main/Component/mockData";
import { useNavigate } from "react-router-dom";
import { saveFavorite } from "../../utils/favorites";
import { removeFavorite } from "../../utils/favorites";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import API from "../../api/axiosInstance";

const Detail = () => {
  const { desertionNo } = useParams();
  const navigate = useNavigate();

  // 사진 크게 확대하기
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  // 슬라이드 정보 표시
  const [openHealth, setOpenHealth] = useState(false);
  const [openMemo, setOpenMemo] = useState(false);

  // 찜하기
  const [isLiked, setIsLiked] = useState(false);

  // API연결 코드, import, item 지우기
  const [data, setData] = useState(null); // 상세 데이터 저장
  const [loading, setLoading] = useState(true);

  // 사진 여러장 넘기기
  const images = Array.isArray(data?.images)
    ? [...new Set(data.images.filter((img) => img && img.trim() !== ""))]
    : [];

  useEffect(() => {
    console.log("받은 이미지 데이터:", data?.images);
  }, [data]);

  //  api연결
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await API.get(`/api/animals/${desertionNo}`);
        setData(res.data.data); // data 안으로 접근
      } catch (err) {
        console.error("Detail API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [desertionNo]);

  // 찜하기
  useEffect(() => {
    if (!data) return;
    const saved = JSON.parse(localStorage.getItem("favoriteAnimals")) || [];
    const exists = saved.some((v) => v.desertionNo === data.desertionNo);
    setIsLiked(exists);
  }, [data]);

  // 사진 넘기기
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <div>로딩중</div>;
  if (!data) return <div>데이터가 없음</div>;

  return (
    <D.Container $bg={data.images}>
      <D.Box>
        <D.Header>
          <D.BackBtn
            src="/images/components/Backbtn.svg"
            alt="BackBtn"
            onClick={() => navigate(-1)}
          />
          <D.LikeBtn
            src={
              isLiked
                ? "/images/components/likeBtnFill.svg" // 꽉 찬 하트
                : "/images/components/LikeBtn.svg" // 빈 하트
            }
            alt="likeBtn"
            onClick={() => {
              if (isLiked) {
                removeFavorite(data.desertionNo);
              } else {
                saveFavorite(data);
              }
              setIsLiked(!isLiked);
            }}
          />
        </D.Header>
        {/* 이미지 */}

        {images.length === 1 ? (
          <D.MainImg
            src={images[0]}
            alt={data.breedName}
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            style={{ width: "100%", borderRadius: "10px" }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <D.MainImg src={img} onClick={() => setIsOpen(true)} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* 모달창 */}
        {isOpen && (
          <D.ModalOverlay onClick={() => setIsOpen(false)}>
            <Swiper slidesPerView={1} pagination={{ clickable: true }}>
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <D.ModalImg src={img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </D.ModalOverlay>
        )}
        {/* 기본정보 표시 */}
        <D.DetailBox>
          <D.BagicInfo>
            <D.DesertionNo>보호번호 {data.desertionNo}</D.DesertionNo>
            <D.DetailInfo>
              {data.age} {data.weight} {data.foundDate} {data.shelterName}
            </D.DetailInfo>
            <D.Mark>{data.specialMark}</D.Mark>
            <D.CheckList>
              <D.BoxInfo>
                {data.animalTypeName === "개" ? "🐕" : "🐈"} {data.breedName}
              </D.BoxInfo>
              <D.BoxInfo>🌿 {data.neuterStatus}</D.BoxInfo>
              <D.BoxInfo>🛡️ {data.status}</D.BoxInfo> {/* 보호중 상태 표시?*/}
            </D.CheckList>
          </D.BagicInfo>

          <D.BtnWrapper>
            {/* 건강 정보 상태 */}
            <D.SlideWrap open={openHealth} type="health">
              <D.BtnBox
                open={openHealth}
                onClick={() => setOpenHealth(!openHealth)}
              >
                💊 건강 정보 상태{" "}
                <img src="../images/components/rightBtn.svg" />
              </D.BtnBox>
              <D.SlideBox open={openHealth}>
                <D.Text>건강정보 : {data.healthInfo}</D.Text>
                <D.Text>백신접종 : {data.vaccination}</D.Text>
                <D.Text>질병여부 : {data.vaccination}</D.Text> <br /> <br />{" "}
                <br />
                <D.Text>*자세한 내용은 보호소로 전화문의 부탁드립니다.</D.Text>
              </D.SlideBox>
            </D.SlideWrap>

            {/* 성격 메모 */}

            <D.SlideWrap open={openMemo} type="memo">
              <D.BtnBox open={openMemo} onClick={() => setOpenMemo(!openMemo)}>
                💕 성격 메모 <img src="../images/components/rightBtn.svg" />
              </D.BtnBox>
              <D.SlideBox open={openMemo}>
                {data.personality ? (
                  <>
                    <D.Text>{data.personality}</D.Text>
                    <br />
                    <br />
                    <br />
                  </>
                ) : null}
                <D.Text>*자세한 내용은 보호소로 전화문의 부탁드립니다.</D.Text>
              </D.SlideBox>
            </D.SlideWrap>

            {/* 보호소 페이지 바로가기 */}
            <D.BtnBox
              onClick={() =>
                navigate("/Shelter", {
                  state: {
                    shelterName: data.shelterName,
                    shelterTel: data.shelterTel,
                    shelterAddress: data.shelterAddress.split("(")[0],
                    province: data.province,
                    city: data.city,
                  },
                })
              }
            >
              🎀 보호소 페이지 바로가기{" "}
              <img src="../images/components/rightBtn.svg" />
            </D.BtnBox>
          </D.BtnWrapper>
        </D.DetailBox>
      </D.Box>
    </D.Container>
  );
};

export default Detail;
