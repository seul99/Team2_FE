// oidc-config.js
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const REST_API_KEY = "3ff884f156ae63cc815cd1bd5601b0e6";
const REDIRECT_URI = "http://localhost:5173/oidc-callback";

export const userManager = new UserManager({
  authority: "https://kauth.kakao.com",

  client_id: REST_API_KEY,
  redirect_uri: REDIRECT_URI,
  post_logout_redirect_uri: "http://localhost:5173/",

  response_type: "code", // OIDC 표준 code flow
  scope: "openid", // 이거 외에는 요청 불가 (profile, email 불가능)

  // 카카오는 OIDC Discovery 문서를 제공하지 않으므로 반드시 수동 설정
  metadata: {
    authorization_endpoint: "https://kauth.kakao.com/oauth/authorize",
    token_endpoint: "https://kauth.kakao.com/oauth/token",
    userinfo_endpoint: "https://kapi.kakao.com/v2/user/me",
  },

  // localStorage에 저장하도록 설정
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
