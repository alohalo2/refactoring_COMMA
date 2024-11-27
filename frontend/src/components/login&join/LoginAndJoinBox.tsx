import React from 'react';
import { Outlet } from 'react-router-dom';
import { LJ_Box, LJ_Box_First, LJ_Box_Second } from '../../css/LoginAndJoinBox.css';

const LoginAndJoinBox: React.FC = () => {
    return (
        <div className={LJ_Box}>
            <div className={LJ_Box_First}>
                <img src='/images/LoginAndJoinBox_image.png' alt="Logo" />
            </div>
            <div className={LJ_Box_Second}>
                <img alt="Sub Logo" />
                <h3>COMMA</h3>
                <Outlet /> {/* React Router가 자식 라우트를 렌더링 */}
            </div>
        </div>
    );
};

export default LoginAndJoinBox;