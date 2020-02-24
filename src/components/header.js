import React from 'react';

import { Link } from 'gatsby';

export default () => (
  <div className='header'>
      <div className='headerUpperDiv'>
          <div>
              <span>login</span>
              <span>logout</span>
          </div>
      </div>
      <div className='headerLowerDiv'>
          <h1 className='bigfont siteTitle'><span><b>M</b>ULTIPLA</span></h1>
          <div className='navWrap right'>
              <Link className='navItem' to='/'>home</Link>
              <span className='navItem dropdownNav'>
                  <span className='navItem'>servicos</span>
                  <div className='servicesDropdown'>
                      <p>protecao patrimonial</p>
                      <p>financeiros</p>
                      <p>vida</p>
                      <p>saude</p>
                  </div>
              </span>
              <Link className='navItem' to='/about'>sobre nos</Link>
              <Link className='navItem' to='/contact'>contato</Link>
          </div>
          <div className='dropdownWrap'>
              <input type='checkbox'/>
              <div className='dropdown'>
                  <span>home</span>
                  <span className='indent'>protecao patrimonial</span>
                  <span className='indent'>financeiros</span>
                  <span className='indent'>vida</span>
                  <span className='indent'>saude</span>
                  <span>sobre nos</span>
                  <span>contato</span>
              </div>
          </div>
      </div>
  </div>
);
