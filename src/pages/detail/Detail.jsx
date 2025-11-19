import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDetail";
import LoadingSpinner from "../../components/LoadingSpinner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import API from "../../api/axiosInstance";

const Detail = () => {
  const { desertionNo } = useParams();
  const navigate = useNavigate();

  // 사진 크게 확대하기
  const [isOpen, setIsOpen] = useState(false);

  // 슬라이드 정보 표시
  const [openHealth, setOpenHealth] = useState(false);
  const [openMemo, setOpenMemo] = useState(false);

  // 찜하기
  const [isLiked, setIsLiked] = useState(false);

  // 상세 데이터 & 로딩
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 사진 여러장 넘기기
  const images = Array.isArray(data?.images)
    ? [...new Set(data.images.filter((img) => img && img.trim() !== ""))]
    : [];

  // 북마크 기능용 userId
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    console.log("받은 이미지 데이터:", data?.images);
  }, [data]);

  // 상세 조회
  useEffect(() => {
    const fetchDetail = async () => {
      const startTime = Date.now();
      try {
        const res = await API.get(`/api/animals/${desertionNo}`);
        setData(res.data.data);
      } catch (err) {
        console.error("Detail API Error:", err);
      } finally {
        const elapsed = Date.now() - startTime;
        const minTime = 400; // 최소 로딩 표시 시간(ms)
        const delay = Math.max(0, minTime - elapsed);

        setTimeout(() => {
          setLoading(false);
        }, delay);
      }
    };

    fetchDetail();
  }, [desertionNo]);

  // 페이지 방문 관심 로그 전송
  useEffect(() => {
    if (!desertionNo || !userId) return;

    const sendInterest = async () => {
      try {
        await API.post(`/api/admin/user-interests/${userId}`, {
          desertionNo,
          dwellTimeSeconds: 25,
        });
        console.log("관심 로그 전송 완료");
      } catch (err) {
        console.error("관심 로그 전송 실패:", err);
      }
    };

    sendInterest();
  }, [desertionNo, userId]);

  // 북마크 초기 상태 조회
  useEffect(() => {
    const fetchUserLike = async () => {
      if (!userId) return;

      try {
        const res = await API.get(`/api/admin/user-likes/${userId}`);
        const likedList = res.data.data; // ["12345", ...]
        setIsLiked(likedList.includes(String(desertionNo)));
      } catch (err) {
        console.error("UserLike GET Error:", err);
      }
    };

    fetchUserLike();
  }, [userId, desertionNo]);

  return (
    <D.Container $bg={data?.images}>
      {loading ? (
        <D.LoadingWrapper>
          <LoadingSpinner />
        </D.LoadingWrapper>
      ) : !data ? (
        <div>데이터 없음</div>
      ) : (
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
                  ? "/images/components/likeBtnFill.svg"
                  : "/images/components/LikeBtn.svg"
              }
              alt="likeBtn"
              onClick={async () => {
                try {
                  await API.post(`/api/admin/user-likes/${userId}`, {
                    desertionNo: data.desertionNo,
                    liked: !isLiked, // true → 북마크 / false → 취소
                  });
                  setIsLiked(!isLiked);
                } catch (err) {
                  console.error("POST Like Error:", err);
                }
              }}
            />
          </D.Header>

          {/* 메인 이미지 */}
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

          {/* 이미지 모달 */}
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

          {/* 상세 정보 */}
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
                <D.BoxInfo>🛡️ {data.status}</D.BoxInfo>
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
                  <D.Text>질병여부 : {data.healthCheck}</D.Text>
                  <br />
                  <br />
                  <br />
                  <D.Text>
                    *자세한 내용은 보호소로 전화문의 부탁드립니다.
                  </D.Text>
                </D.SlideBox>
              </D.SlideWrap>

              {/* 성격 메모 */}
              <D.SlideWrap open={openMemo} type="memo">
                <D.BtnBox
                  open={openMemo}
                  onClick={() => setOpenMemo(!openMemo)}
                >
                  💕 성격 메모{" "}
                  <img src="../images/components/rightBtn.svg" />
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
                  <D.Text>
                    *자세한 내용은 보호소로 전화문의 부탁드립니다.
                  </D.Text>
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
      )}
    </D.Container>
  );
};

export default Detail;