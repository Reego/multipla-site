import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const { sentDisplayText, sentDisplayImage } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    return (
        <React.Fragment>
            <div className='mainDisplay'>
                <div className='subBox' style={{background:"url('" + sentDisplayImage + "')", backgroundSize:'cover'}}>
                    <p className='text'>Obrigado</p>
                    <p className='subText'>{ sentDisplayText }</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ({ data }) => (
    <Layout>
        <SEO>
          <title>Enviado</title>
        </SEO>
        <Page data={data}/>
    </Layout>
);

export const query = graphql`
{
  allFile(filter: {name: {eq: "contato"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
            sentDisplayText
            sentDisplayImage
          }
        }
      }
    }
  }
}`;
