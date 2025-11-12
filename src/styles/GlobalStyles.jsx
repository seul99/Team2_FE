import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit */
  }

  @font-face {
    font-family: 'GangwonEduOTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff')
      format('woff');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'GangwonEduAll';
    src: url('/fonts/GangwonEduAll-Light.woff') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cafe24Ohsquare';
    src: url('/fonts/Cafe24Ohsquare-v2.0.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'SeoulAlrim';
    src: url('/fonts/SeoulAlrimTTF-Heavy.woff2') format('woff2'),
      url('/fonts/SeoulAlrimTTF-Heavy.woff') format('woff'),
      url('/fonts/SeoulAlrimTTF-Heavy.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Great Vibes';
    src: url('/fonts/GreatVibes-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  body {
    background-color: #f0f0f0;
    height: 100%;
    font-family: 'GangwonEduAll', 'Pretendard Variable', Pretendard,
      -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Pyeojin Gothic', 'Cafe24Ohsquare', 'SeoulAlrim', sans-serif,
      'GangwonEduOTF';
    font-weight: 400;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
