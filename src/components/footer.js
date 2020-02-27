import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
{
  allFile(filter: {name: {eq: "config"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
              footerText
          }
        }
      }
    }
  }
}`;

const Footer = (data) => {
  const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  const text = frontmatter['footerText'];

  return (
  <div className='footer'>
      <div className='footerUpperDiv'>
          <div className='footerColumn'>
              <h1>Quick Links</h1>
              <ul>
                  <li>home</li>
                  <br/>
                  <li>sobre nos</li>
                  <br/>
                  <li>contato</li>
              </ul>
          </div>
          <div className='footerColumn'>
              <p>{text}</p>
          </div>
          <div className='footerBottom'>
              <div className='footerContact'>
                  <h1>Contato</h1>
                  <div className='labels'>
                      <p>email</p>
                      <p className='hiddenText'>a</p>
                      <p>telefone</p>
                  </div>
                  <div className='data'>
                      <p>apenna@apmultipla.com.br</p>
                      <p>cferraz@apmultipla.com.br</p>
                      <p>+55 21 98899-4832</p>
                      <p>+55 21 99988-3140</p>
                  </div>
              </div>
          </div>
      </div>
      <div className='footerLowerDiv'>
          <p>Copyright © 2020 Multipla Todos os direitos reservados.</p>
      </div>
  </div>
  );
};

export default () => (
  <StaticQuery
    query={query}
    render={Footer}
  />
)
