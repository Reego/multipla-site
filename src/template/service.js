import React from 'react';

import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';

import Layout from '../components/layout';

const Page = ({ serviceName, body, image}) => (
    <React.Fragment>
        <div className='mainDisplay'>
            <div className='subBox' style={{background:"url('" + image + "')", backgroundSize:'cover'}}>
                <p className='text Light'>{ serviceName }</p>
                <div className='button'><Link to='/#servicos'>Servi&#x00E7;os</Link></div>
            </div>
        </div>
        <div style={{'marginTop':'70px'}}></div>
        <div className='mainContent'>
            <p className='contentDescription' dangerouslySetInnerHTML={{ __html: body }}/>
        </div>
    </React.Fragment>
);

export default ({ data }) => (
    <Layout>
        <SEO>
            <title>{ 'Multipla - ' + data.serviceName }</title>
        </SEO>
        <Page data={data}/>
    </Layout>
);