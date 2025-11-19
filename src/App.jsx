import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyles";
import MainPage from "./pages/main/MainPage";
import WelcomePage from "./pages/auth/WelcomePage";
import AuthPage from "./pages/auth/AuthPage";
import ChatbotPage from "./pages/chatbot/ChatbotPage";
import SearchPage from "./pages/search/SearchPage";
import SavePage from "./pages/save/SavePage";
import Detail from "./pages/detail/Detail";
import OidcCallback from "./pages/auth/OidcCallback";
import RecommPage from "./pages/recommendation/RecommPage";
import AIRecommList from "./pages/recommendation/AIRecommList";
import Filter from "./pages/filter/Filter";
import Shelter from "./pages/detail/Shelter";
import AnimalList from "./pages/save/AnimalList";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ChatbotPage" element={<ChatbotPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/SavePage" element={<SavePage />} />
          {/* <Route path="/Detail/:id" element={<Detail />} /> */}
          <Route path="/RecommPage" element={<RecommPage />} />
          <Route path="/AIRecommList" element={<AIRecommList />} />
          <Route path="/detail/:desertionNo" element={<Detail />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Shelter" element={<Shelter />} />
          <Route path="/AnimalList" element={<AnimalList />} />
          <Route path="/oidc-callback" element={<OidcCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
