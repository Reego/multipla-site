import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    const displayTitle = frontmatter['homeDisplayTitle'];
    const displayText = frontmatter['homeDisplayText'];
    const displayImage = frontmatter['homeDisplayImage'];

    const servicesTitle = frontmatter['homeServicesTitle'];
    const servicesDescription = frontmatter['homeServicesDescription'];

    const services = [];

    for(let i = 0; i < frontmatter['services'].length; i++) {
        const service = frontmatter['services'][i];
        services.push(
            <div id={'servico_' + i} key={i} className='serviceBox'>
                <h1 className={
                    (i % 2 === 0) ? 'left' : 'right'
                }>{ service['serviceTitle'] }</h1>
                <p>{ service['serviceDescription'] }</p>
            </div>
        );
    }
    // alert("url('" + displayImage + "");
    return (
    <React.Fragment>
        <div className='mainDisplay'>
            <div className='subBox' style={{background:"url('" + displayImage + "')", backgroundSize:'cover'}}>
                <p className='text'>{ displayTitle }</p>
                <p className='subText'>{ displayText }</p>
                <div className='button'>Servi&#x00E7os</div>
            </div>
        </div>
        <div style={{'marginTop':'70px'}}></div>
        <div className='mainContent'>
            <h1 className='contentTitle'>{ servicesTitle }</h1>
            <p className='contentDescription'>{ servicesDescription }</p>
            <div className='mainContentServices'>
                { services }
            </div>
        </div>
    </React.Fragment>
    );
};

export default ({ data }) => (
    <Layout>
        <Page data={data}/>
    </Layout>
);

export const query = graphql`
{
  allFile(filter: {name: {eq: "config"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
            homeDisplayTitle
            homeDisplayText
            homeDisplayImage
            homeServicesTitle
            homeServicesDescription
            services {
                serviceTitle
                serviceDescription
            }
          }
        }
      }
    }
  }
}`;
