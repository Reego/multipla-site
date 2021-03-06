import React from 'react';

import SiteHead from './head';
import Header from './header';
import Footer from './footer';

import '../style/content.css';

import '../style/smallPhone.css';
import '../style/largePhone.css';
import '../style/tablet.css';
import '../style/smallDesktop.css';
import '../style/desktop.css';

const Main = ({ children }) => (
    <div className='main'>
        { children }
    </div>
);

const Layout = ({ children }) => (
    <React.Fragment>
        <SiteHead/>
        <Header/>
        <Main>
            { children }
        </Main>
        <Footer/>
    </React.Fragment>
);

export default Layout;
