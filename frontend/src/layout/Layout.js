import React from 'react';
// import commaLogo from '../../public/images/commaLogo.svg';

const Layout = () => {
    return (
        <div className='LO_sidebar_box'>
            <div className='LO_sidebar_first'>
                <img src='/images/commaLogo.svg'></img>
                <h2>COMMA</h2>
            </div>
            <div className='LO_sidebar_second'>
                <ul>
                    <li>Travel Information</li>
                    <li>Card Board</li>
                    <li>My Page</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='LO_sidebar_third'>
                <div>
                    <ul>
                        <li>Tel. 000-0000-0000</li>
                        <li>Fax. 00-0000-0000</li>
                        <li>E-mail. comma@naver.com</li>
                        <li>Addr. Seoul, Korea</li>
                        <li>Hosting by COMMA</li>
                    </ul>
                    <div>
                        <strong>&copy;2024 <span>COMMA</span></strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;