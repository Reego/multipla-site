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
                      <p><span>a</span>email<span>@domain</span><span>.com.br</span></p>
                      <p><span>a</span><span>email@domain</span><span>.com.br</span></p>
                      <p><span>+00 00</span> 000<span>00-0000</span></p>
                      <p><span>+00 0</span><span>0 000</span><span>00-0000</span></p>
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
