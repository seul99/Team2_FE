import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as D from "../../styles/StyledDetail";
import { mock } from "../main/Component/mockData";

const Detail = () => {
  const { desertionNo } = useParams();

  const item = mock.find((v) => String(v.desertionNo) === String(desertionNo));

  //   API연결 코드, import, item 지우기
  //   const [item, setItem] = useState(null);   // 상세 데이터 저장
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //   const fetchDetail = async () => {
  //     const res = await axios.get(`/api/animals/${desertionNo}`);
  //     setItem(res.data);
  //   };
  //   fetchDetail();
  // }, [desertionNo]);
  //   if (loading) return <div>로딩중</div>;
  //   if (!item) return <div>데이터가 없음</div>;

  if (!item) {
    return <div>데이터가 없음</div>;
  }

  // 사진 크게 확대하기
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  // 슬라이드 정보 표시
  const [openHealth, setOpenHealth] = useState(false);
  const [openMemo, setOpenMemo] = useState(false);

  return (
    <D.Container bg={item.images}>
      <D.Box>
        {/* 이미지 */}
        <D.MainImg
          src={item.images}
          alt={item.breedName}
          onClick={() => {
            setSelectedImg(item.images);
            setIsOpen(true);
          }}
        />
        {isOpen && (
          <D.ModalOverlay onClick={() => setIsOpen(false)}>
            <D.ModalImg src={selectedImg} />
          </D.ModalOverlay>
        )}
        {/* 기본정보 표시 */}
        <D.DetailBox>
          <D.BagicInfo>
            <D.DesertionNo>보호번호 {item.desertionNo}</D.DesertionNo>
            <D.DetailInfo>
              {item.age} {item.weight} {item.foundDate} {item.shelterName}
            </D.DetailInfo>
            <D.Mark>{item.specialMark}</D.Mark>
            <D.CheckList>
              <D.BoxInfo>
                {item.animalTypeName === "개" ? "🐕" : "🐈"} {item.breedName}
              </D.BoxInfo>
              <D.BoxInfo>🌿 {item.neuterStatus}</D.BoxInfo>
              <D.BoxInfo>🛡️ {item.status}</D.BoxInfo> {/* 보호중 상태 표시?*/}
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
                <D.Text>건강정보 : {item.healthInfo}</D.Text>
                <D.Text>백신접종 : {item.vaccination}</D.Text>
                <D.Text>질병여부 : {item.vaccination}</D.Text> <br /> <br />{" "}
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
                {item.personality ? (
                  <>
                    <D.Text>{item.personality}</D.Text>
                    <br />
                    <br />
                    <br />
                  </>
                ) : null}
                <D.Text>*자세한 내용은 보호소로 전화문의 부탁드립니다.</D.Text>
              </D.SlideBox>
            </D.SlideWrap>

            {/* 보호소 페이지 바로가기 */}
            <D.BtnBox>
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
