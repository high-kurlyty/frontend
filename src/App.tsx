import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";

import MainPage from "@/pages/Mainpage";
import GoodsListPage from "@/pages/GoodsListPage";
import MyPage from "@/pages/MyPage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/goods-list" element={<GoodsListPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
