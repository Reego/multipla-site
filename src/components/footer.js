import React from 'react';

export default () => (
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
              <p>Multipla e um companhia que oferece servicios financeros e de investimento para que voce possa realizar os seus sonhos sem surpresas</p>
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
          <p>Copyright Multipla 2020</p>
      </div>
  </div>
);
