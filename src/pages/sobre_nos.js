import React from 'react';
import { graphql } from 'gatsby';

import '../style/about.css';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    const displayImage = frontmatter['aboutDisplayImage'];
    const text = frontmatter['aboutText'];

    return (
    <div className='mainContent'>
        <div className='aboutDescription'>
        <div className='aboutDescriptionImage' style={{background:"url('" + displayImage + "')", backgroundSize:'cover'}}></div>
        </div>
        <div className='aboutBreak'></div>
        <h1 className='contentTitle'>Sobre n&#xf3;s</h1>
        <p className='contentDescription'>{ text }</p>
    </div>
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
            aboutDisplayImage
            aboutText
          }
        }
      }
    }
  }
}`;
