import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: 'GangwonEduOTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff')
      format('woff');
    font-weight: 400;
    font-display: swap;
  }
  
  body {
    background-color: #f0f0f0;
    font-family: 'GangwonEduAll', 'Pretendard Variable', Pretendard,
      -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Pyeojin Gothic', 'Cafe24Ohsquare', 'SeoulAlrim', sans-serif,
      'GangwonEduOTF';
    font-weight: 400;
  }
`;

export default GlobalStyle;
