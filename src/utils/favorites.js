// localStorage 저장함수
// 저장 키 이름
const KEY = "favoriteAnimals";

// 좋아요 저장
export const saveFavorite = (item) => {
  const saved = JSON.parse(localStorage.getItem(KEY)) || [];

  const exists = saved.some((v) => v.desertionNo === item.desertionNo);
  if (!exists) {
    const thumbnail = Array.isArray(item.images)
      ? item.images[0] // 배열이면 첫 번째 이미지
      : item.thumbnailImage || item.images || ""; // 백엔드가 준 썸네일 있으면 그거

    saved.push({
      ...item,
      thumbnailImage: thumbnail,
    });

    localStorage.setItem(KEY, JSON.stringify(saved));
  }
};

// 모든 저장된 항목 가져오기
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

// 특정 항목 삭제
export const removeFavorite = (desertionNo) => {
  const saved = JSON.parse(localStorage.getItem(KEY)) || [];
  const filtered = saved.filter((v) => v.desertionNo !== desertionNo);
  localStorage.setItem(KEY, JSON.stringify(filtered));
};
