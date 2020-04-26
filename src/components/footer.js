import React from 'react';

import { StaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
{
  allFile(filter: {name: {eq: "footer"}}) {
    edges {
      node {
        frontmatter {
            footerText
            footerEmailA
            footerPhoneA
            footerEmailB
            footerPhoneB
        }
      }
    }
  }
}`;

const Footer = (data) => {

  const {
    footerText,
    footerEmailA,
    footerPhoneA,
    footerEmailB,
    footerPhoneB,
  } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

  return (
  <div className='footer'>
      <div className='footerUpperDiv'>
          <div className='footerColumn'>
              <h1>Quick Links</h1>
              <ul>
                  <Link to='/'><li>home</li></Link>
                  <br/>
                  <Link to='/sobre_nos'><li>sobre nos</li></Link>
                  <br/>
                  <Link to='/contato'><li>contato</li></Link>
              </ul>
          </div>
          <div className='footerColumn'>
              <p>{ footerText }</p>
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
                      <p>{ footerEmailA }</p>
                      <p>{ footerEmailB }</p>
                      <p>{ footerPhoneA }</p>
                      <p>{ footerPhoneB }</p>
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
