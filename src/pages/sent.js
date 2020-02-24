import React from 'react';

import Layout from '../components/layout';

const Page = () => (
    <React.Fragment>
        <div className='mainDisplay'>
            <div className='subBox'>
                <p className='text'>Obrigado</p>
                <p className='subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </React.Fragment>
);

export default () => (
    <Layout>
        <Page/>
    </Layout>
);
