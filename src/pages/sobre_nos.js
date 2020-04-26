import React from 'react';
import { graphql } from 'gatsby';

import '../style/about.css';

import SEO from '../components/seo';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const { aboutDisplayImage, aboutText } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    return (
    <div className='mainContent'>
        <div className='aboutDescription'>
        <div className='aboutDescriptionImage' style={{background:"url('" + aboutDisplayImage + "')", backgroundSize:'cover'}}></div>
        </div>
        <div className='aboutBreak'></div>
        <h1 className='contentTitle'>Sobre n&#xf3;s</h1>
        <p className='contentDescription aboutContentDescription' dangerouslySetInnerHTML={{ __html: aboutText }}/>
    </div>
    );
};

export default ({ data }) => (
    <Layout>
        <SEO>
          <title>Sobre n&#xf3;s</title>
        </SEO>
        <Page data={data}/>
    </Layout>
);

export const query = graphql`
{
  allFile(filter: {name: {eq: "sobre"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
            aboutDisplayImage
            aboutText
          }
        }
      }
    }
  }
}`;
