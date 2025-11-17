import { useEffect, useRef } from "react";
import { userManager } from "../../../oidc-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OidcCallback() {
  const navigate = useNavigate();

  const isProcessing = useRef(false);

  useEffect(() => {
    if (isProcessing.current) return;
    isProcessing.current = true;

    userManager
      .signinRedirectCallback()
      .then(async (user) => {
        console.log("Token received from Kakao:", user);

        const idToken = user.id_token;

        try {
          console.log("Sending idToken in HEADER:", idToken);

          const res = await axios.post(
            "http://localhost:8080/api/auth/login",
            null,
            {
              headers: {
                id_token: idToken,
              },
            }
          );

          console.log("Backend Login Success:", res.data);

          localStorage.setItem("access", res.data.data.accessToken);
          localStorage.setItem("refresh", res.data.data.refreshToken);
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
