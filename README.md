### [🏆간지톤 최우수상] RE:BORN 프론트엔드 Repository
<br>

# 🐾 유기동물 AI 추천 시스템
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white">
</div>


사용자의 관심사를 학습하여 최적의 유기동물을 추천하는 AI 기반 매칭 서비스


# 📌 프로젝트 소개
매년 약 **10만 마리**의 유기동물이 발생하지만, 입양률은 **30% 미만**입니다다.
입양희망자 입장에서

- “나랑 맞는 아이가 누굴까?”
- “보호소 정보가 왜 이렇게 제각각이야…?”
이런 문제가 너무 많습니다.

그래서 **RE:BORN**은 아래 두 가지 문제를 제대로 해결하는 데 집중했습니다.

### ✔ 1) AI 기반 개인 맞춤 추천
- 유저의 조회·상세 방문·즐겨찾기 등 행동 패턴을 임베딩으로 학습
- 나와 가장 잘 맞는 아이를 자동 추천
- “무지성 스와이프”가 아니라 내 취향 반영된 결과가 나옴

### ✔ 2) 전국 보호소 정보 통합 조회
- 지역·품종·성별·중성화 등 필터 조합
- 무한 스크롤 & 실시간 카테고리 반영
- 즐겨찾기(localStorage 유지)
- 반응형 모바일 UI (390px 기준)

# 🌟 주요 기능
#### 🔥 AI 추천
- 사용자 행동 데이터를 기반으로 AI가 similarity 계산
- 개인화된 유기동물 추천 리스트 제공

#### 🔍 유기동물 검색
- 지역/품종/성별/나이/중성화 등 상세 필터
- 서브 카테고리 반응 → UI 자동 변경
- 정렬: 최신순, 별점순, 혼잡도(population_ratio) 낮은 순

#### 🐶 상세 정보 조회
- 구조일, 보호소, 품종, 성별 등 모든 상세 정보
- 이미지 캐러셀
- 즐겨찾기 기능 (북마크)

#### 💛 즐겨찾기(찜)
- 북마크한 유기동물만 모아서 조회
- localStorage 반영 → 새로고침/재방문 유지

#### 🧭 네비게이션 & Routing
- React Router v6
- 메인/검색/필터/상세/찜 페이지 전체 흐름 연결
- Layout에서 배경·탭바·헤더 자동 스위칭

#### 🤖 입양 도움 챗봇 (RAG)
- 유기동물 입양 절차 / 준비물 / 지역별 규정
- 실제 보호소 데이터 기반 안내

#### 🟡 카카오 로그인
- Social OAuth
- 로그인 기반 사용자 행동 데이터 수집

#### 🧵 전역 예외 처리
- axios interceptors
- 네트워크 오류 / 인증 실패 / 서버 오류 통합 처리

# 🛠️ 기술 스택
### Frontend
| Category  | Tech                               |
| --------- | ---------------------------------- |
| Framework | **React + Vite**                   |
| Style     | **styled-components**, CSS Modules |
| Routing   | **React Router v6**                |
| API       | **axios**, custom axiosInstance    |
| State     | useState, useEffect, useCallback   |
| Other     | Infinite Scroll 구현, localStorage   |
| Deployment| Vercel (CI/CD 자동 배포, 환경변수 관리)|

# 📂 주요 폴더 구조
```
src/
 ├─ api/
 │   └─ axiosInstance.js
 ├─ components/
 ├─ pages/
 │   ├─ MainPage/
 │   ├─ SearchPage/
 │   ├─ Filter/
 │   ├─ Detail/
 │   └─ SavePage/
 ├─ styles/
 ├─ assets/
 └─ App.jsx
```

# UI/UX 포인트
- 390px 모바일 기준 UI로 설계
- safe-area-inset 대응
- TopCard / BottomCard 분리 구성
- Sticky Filter Bar + Infinite Scroll
- 스켈레톤 로딩 / 로딩 스피너 자체 제작

# 🏆 담당 (간지톤 Team2 – Frontend)
- React 구조 설계 (global style, common layout)
- 검색/필터/상세/찜 페이지 구현
- 카테고리/정렬/무한스크롤 담당
- Vercel 배포

# 발표자료 
![표지](https://github.com/user-attachments/assets/20590f1b-b280-47c9-aa74-b8d6df17953c)
![오버뷰](https://github.com/user-attachments/assets/f3b67cbe-4579-47d6-83b3-4a2617b9f636)
![데스크 리서치](https://github.com/user-attachments/assets/a335d49b-3f15-48f1-94c8-d1ed5c3a72a6)
![솔루션](https://github.com/user-attachments/assets/32989225-bffb-4da9-8747-83c6a583b4b5)
![ux플로우](https://github.com/user-attachments/assets/69b73a05-ce2a-43de-8c91-b386b9e8f936)
![메인-](https://github.com/user-attachments/assets/930bc894-ff8b-4135-9b84-399fc7dac9c4)
![상세페이지](https://github.com/user-attachments/assets/ae6b42ef-b972-4e53-a1d1-61e0e692ca9b)
![추천 (조회했던 페이지 + 저장한 목록 기반)](https://github.com/user-attachments/assets/bf68c67a-8663-45dd-afaf-18a5f3e19fb0)
![2차발표자료 - AI서비스 구현완성도](https://github.com/user-attachments/assets/16bd72a7-d266-45c1-92ce-73d7dcc33331)
![챗봇](https://github.com/user-attachments/assets/c128870d-f5e4-4009-a430-0520e86f274a)
![기대효과](https://github.com/user-attachments/assets/246ee87e-5388-4fb5-8181-cb482f2e7142)
![기술](https://github.com/user-attachments/assets/ada13cf9-74e7-456a-8812-9d705cb63d90)
![마무리](https://github.com/user-attachments/assets/01a005c6-24eb-44c2-b8bc-bda16c0e39ee)
