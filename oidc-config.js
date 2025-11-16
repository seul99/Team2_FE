import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const REDIRECT_URI = "http://localhost:5173/oidc-callback";

export const userManager = new UserManager({
  authority: "https://kauth.kakao.com",

  client_id: REST_API_KEY,
  redirect_uri: REDIRECT_URI,
  post_logout_redirect_uri: "http://localhost:5173/",

  response_type: "code",
  scope: "openid",

  metadata: {
    authorization_endpoint: "https://kauth.kakao.com/oauth/authorize",
    token_endpoint: "https://kauth.kakao.com/oauth/token",
    userinfo_endpoint: "https://kapi.kakao.com/v2/user/me",
  },

  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
