import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";

import MainPage from "@/pages/Mainpage";
import GoodsListPage from "@/pages/GoodsListPage";
import MyPage from "@/pages/MyPage";
import NotFound from "@/pages/NotFound";

import useSessionStorage from "@/hooks/useSessionStorage";
import { IUserInfo } from "@/modules/UserModule";
import UserService from "@/services/UserService";

function App() {
  const [userSessionStorage, setUserSessionStorage] =
    useSessionStorage<IUserInfo>("user", {
      id: null,
      name: null,
      rank: null,
      profile: null,
      token: null,
    });

  useEffect(() => {
    async function getUserInfo() {
      const resData = await UserService.getUser();
      const userInfo: IUserInfo = {
        id: resData.id,
        name: resData.name,
        profile: resData.profile,
        rank: resData.rank,
        token: resData.token,
      };
      setUserSessionStorage(userInfo);
    }
    getUserInfo();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
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
