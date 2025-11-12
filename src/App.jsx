import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import MainPage from "./pages/main/MainPage";
import AuthPage from "./pages/auth/AuthPage";
import ChatbotPage from "./pages/chatbot/ChatbotPage";
import SearchPage from "./pages/search/searchPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ChatbotPage" element={<ChatbotPage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
