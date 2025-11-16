import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyles";
import MainPage from "./pages/main/MainPage";
import WelcomePage from "./pages/auth/WelcomePage";
import AuthPage from "./pages/auth/AuthPage";
import ChatbotPage from "./pages/chatbot/ChatbotPage";
import SearchPage from "./pages/search/searchPage";
import SavePage from "./pages/save/SavePage";
import Detail from "./pages/detail/Detail";
import OidcCallback from "./pages/auth/OidcCallback";

import Filter from "./pages/filter/Filter";
import Shelter from "./pages/detail/Shelter";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/oidc-callback" element={<OidcCallback />} />

        <Route element={<Layout />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ChatbotPage" element={<ChatbotPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/SavePage" element={<SavePage />} />
          {/* <Route path="/Detail/:id" element={<Detail />} /> */}
          <Route path="/detail/:desertionNo" element={<Detail />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Shelter" element={<Shelter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
