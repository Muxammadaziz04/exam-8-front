import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import style from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={style.layout}>
            <Navbar />
                {children}
            <Footer />
        </div>
    );
}

export default Layout;
