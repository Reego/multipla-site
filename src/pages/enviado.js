import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    const subText = frontmatter['sentDisplayText'];
    const displayImage = frontmatter['sentDisplayImage']

    return (
        <React.Fragment>
            <div className='mainDisplay'>
                <div className='subBox'>
                    <p className='text'>Obrigado</p>
                    <p className='subText'>{subText}</p>
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
            sentDisplayText
            sentDisplayImage
          }
        }
      }
    }
  }
}`;
