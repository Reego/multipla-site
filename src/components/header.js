import React from 'react';

import { StaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/static/assets/services/"}}}) {
    edges {
      node {
        frontmatter {
          serviceName
        }
      }
    }
  }
}`;

const Header = (data) => {
    const services = data.allFile.edges;

    const servicesDropdownList = [];
    const servicesMobileDropdownList = [];

    for(let i = 0; i < services.length; i++) {
        const service = services[i].node.frontmatter.serviceName;

        servicesDropdownList.push(
            <Link to={'/#servico_' + i} key={i}>{ service }</Link>
        );

        servicesMobileDropdownList.push(
            <Link to={'/#servico_' + i} key={i} className='indent'>{ service }</Link>
        );
    }

  return (
  <div className='header'>
      <div className='headerLowerDiv'>
          <h1 className='bigfont siteTitle'><span><b>M</b>ULTIPLA</span></h1>
          <div className='navWrap right'>
              <Link className='navItem' to='/'>home</Link>
              <span className='navItem dropdownNav'>
                  <span className='navItem'>servi&#x00E7;os</span>
                  <div className='servicesDropdown'>
                      { servicesDropdownList }
                  </div>
              </span>
              <Link className='navItem' to='/sobre_nos'>sobre n&#xf3;s</Link>
              <Link className='navItem' to='/contato'>contato</Link>
          </div>
          <div className='dropdownWrap'>
              <div className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <input type='checkbox'/>
              <div className='dropdown'>
                  <Link to='/'>home</Link>
                  { servicesMobileDropdownList }
                  <Link to='/sobre_nos'>sobre n&#xf3;s</Link>
                  <Link to='/contato'>contato</Link>
              </div>
          </div>
      </div>
  </div>
  );
};


export default () => (
  <StaticQuery
    query={query}
    render={Header}
  />
)
