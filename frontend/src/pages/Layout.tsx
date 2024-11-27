import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from 'react-router-dom';
import { Layout_Box, Layout_Contents } from '../css/Layout.css';

const Layout: React.FC = () => {
    return (
    <div className={Layout_Box}>
        <Sidebar/>
        <div className={Layout_Contents}>
            <Outlet/>
        </div>
    </div>
    );
};

export default Layout;
