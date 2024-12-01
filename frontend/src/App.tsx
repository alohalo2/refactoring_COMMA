import React from "react";
import logo from "./logo.svg";
import { App_Style
} from "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TravelInformation from "./pages/TravelInformation";
import CardBoard from "./pages/CardBoard";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Join from "./pages/Join";
import LoginAndJoinBox from "./components/login&join/LoginAndJoinBox";

function App() {
    return (
      <div className={App_Style}>
        <Routes>
            <Route path="/login" element={<LoginAndJoinBox />}>
              <Route index element={<Login />} /> {/* 기본 경로에서 Login 렌더링 */}
              <Route path="join" element={<Join />} /> {/* /login/join에서 Join 렌더링 */}
            </Route>
            <Route path="/" element={<Layout />}>
              <Route path="/travelInformation" element={<TravelInformation />} />
              <Route path="/CardBoard" element={<CardBoard />} />
              <Route path="/MyPage" element={<MyPage />} />
            </Route>
        </Routes>
      </div>
    );
}

export default App;
