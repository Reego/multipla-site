import React from 'react';

import { StaticQuery, graphql, Link } from 'gatsby';

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
                  <Link to='/'><li>home</li></Link>
                  <br/>
                  <Link to='/sobre_nos'><li>sobre nos</li></Link>
                  <br/>
                  <Link to='/contato'><li>contato</li></Link>
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
                      <p><span>apen</span>na<span>@apmultip</span><span>la.com.br</span></p>
                      <p><span>cferra</span><span>z@apmultipl</span><span>a.com.br</span></p>
                      <p><span>+55 21</span> 988<span>99-4832</span></p>
                      <p><span>+55 2</span><span>1 999</span><span>88-3140</span></p>
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
