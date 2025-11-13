import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyles";
import MainPage from "./pages/main/MainPage";
import AuthPage from "./pages/auth/AuthPage";
import ChatbotPage from "./pages/chatbot/ChatbotPage";
import SearchPage from "./pages/search/searchPage";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ChatbotPage" element={<ChatbotPage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
