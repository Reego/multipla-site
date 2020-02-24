import React from 'react';
import '../style/about.css';

import Layout from '../components/layout';

const Page = () => (
    <div className='mainContent'>
        <div className='aboutDescription'>
        <div className='aboutDescriptionImage'></div>
        </div>
        <div className='aboutBreak'></div>
        <h1 className='contentTitle'>Sobre nos</h1>
        <p className='contentDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);

export default () => (
    <Layout>
        <Page/>
    </Layout>
);
