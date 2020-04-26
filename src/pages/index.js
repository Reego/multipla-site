import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const {
        homeDisplayTitle,
        homeDisplayText,
        homeDisplayImage,
        homeServicesTitle,
        homeServicesTitleActive,
        homeServicesDescription,
        homeServicesDescriptionActive,

    } = data.config.edges[0].node.childMarkdownRemark.frontmatter;

    const services = data.services.edges;

    const serviceComponents = [];

    for(let i = 0; i < services.length; i++) {
        const { serviceName, shortDescription } = services[i].node.frontmatter;
        serviceComponents.push(
            <div id={'servico_' + i} key={i} className='serviceBox'>
                <h1 className={
                    (i % 2 === 0) ? 'left' : 'right'
                }>{ serviceName }</h1>
                <p>{ shortDescription }</p>
            </div>
        );
    }
    return (
    <React.Fragment>
        <div className='mainDisplay'>
            <div className='subBox' style={{background:"url('" + homeDisplayImage + "')", backgroundSize:'cover'}}>
                { homeServicesTitleActive &&
                    <p className='text'>{ homeDisplayTitle }</p> }
                { homeServicesDescriptionActive &&
                    <p className='subText'>{ homeDisplayText }</p> }
                <div className='button'><Link to='/#servicos'>Servi&#x00E7;os</Link></div>
            </div>
        </div>
        <div style={{'marginTop':'70px'}}></div>
        <div className='mainContent'>
            <h1 id='servicos' className='contentTitle'>{ homeServicesTitle }</h1>
            <p className='contentDescription'>{ homeServicesDescription }</p>
            <div className='mainContentServices'>
                { serviceComponents }
            </div>
        </div>
    </React.Fragment>
    );
};

export default ({ data }) => (
    <Layout>
        <SEO>
            <title>Multipla</title>
        </SEO>
        <Page data={data}/>
    </Layout>
);

export const query = graphql`
{
  config: allFile(filter: {name: {eq: "config"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
            homeDisplayTitle
            homeDisplayText
            homeDisplayImage
            homeServicesTitle
            homeServicesTitleActive
            homeServicesDescription
            homeServicesDescriptionActive
          }
        }
      }
    }
  }
  services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/static/assets/services/"}}) {
    edges {
        node {
            frontmatter {
                serviceName
                shortDescription
            }
        }
    }
  }
}`;
