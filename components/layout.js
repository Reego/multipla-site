import React from 'react';

import Header from './header';
import Footer from './footer';

const Main = ({ children }) => (
    <div className='main'>
        <div className='mainContent'>
            { children }
        </div>
    </div>
);

const Layout = ({ children }) => (
    <React.Fragment>
        <Header/>
        <Main>
            { children }
        </Main>
        <Footer/>
    </React.Fragment>
);

export default Layout;
