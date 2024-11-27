import React from 'react';
import { LO_sidebar_box, LO_sidebar_first, LO_sidebar_second, LO_sidebar_third } from "../../css/Sidebar.css";

interface SidebarProps {
    className?: string; // 올바른 타입
}

const toTravelInformation = () => {
    window.location.href = '/travelInformation';
};

const toCardBoard = () => {
    window.location.href = '/cardBoard';
};

const toMyPage = () => {
    window.location.href = '/myPage';
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
    <div className={LO_sidebar_box}>
        <div className={LO_sidebar_first}>
            <img src="/images/commaLogo.svg" alt="Comma Logo"></img>
            <h2>COMMA</h2>
        </div>
        <div className={LO_sidebar_second}>
            <ul>
                <li onClick={toTravelInformation}>Travel Information</li>
                <li onClick={toCardBoard}>Card Board</li>
                <li onClick={toMyPage}>My Page</li>
                <li>Login</li>
            </ul>
        </div>
        <div className={LO_sidebar_third}>
            <div>
                <ul>
                    <li>Tel. 000-0000-0000</li>
                    <li>Fax. 00-0000-0000</li>
                    <li>E-mail. comma@naver.com</li>
                    <li>Addr. Seoul, Korea</li>
                    <li>Hosting by COMMA</li>
                </ul>
                <div>
                    <strong>
                        &copy;2024 <span>COMMA</span>
                    </strong>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sidebar;