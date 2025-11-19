import { useEffect, useRef } from "react";
import { userManager } from "../../../oidc-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function OidcCallback() {
  const navigate = useNavigate();
  const isProcessing = useRef(false);

  useEffect(() => {
    if (isProcessing.current) return;
    isProcessing.current = true;

    userManager
      .signinRedirectCallback()
      .then(async (user) => {
        const idToken = user.id_token;

        try {
          // 2. 하드코딩된 주소 대신 환경 변수를 사용합니다.
          const res = await axios.post(`${API_BASE_URL}/api/auth/login`, null, {
            headers: {
              id_token: idToken,
            },
          });

          console.log("Backend Login Success:", res.data);

          localStorage.setItem("access", res.data.data.accessToken);
          localStorage.setItem("refresh", res.data.data.refreshToken);
          localStorage.getItem("userId", res.data.data.userId);
          localStorage.setItem("nickname", res.data.data.nickname);

          navigate("/WelcomePage");
        } catch (err) {
          console.error("Backend API Error:", err);
          alert("로그인 처리 중 오류가 발생했습니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("OIDC Callback Error:", err);
      });
  }, [navigate]);

  return <div>로그인 성공! 이동 중...</div>;
}
