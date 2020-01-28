import React from 'react';
import './scss/Footer.scss';

const Footer = () => (
  <div className='Footer'>
    <p className='Footer-txt'>Follow Us:</p>
    <div className='Footer-logo-ctnr'>
      <img
        className='Footer-ig-svg'
        src='/rg-challenge/images/instagram.svg'
        alt='instagram'
      />
      <img
        className='Footer-fb-svg'
        src='/rg-challenge/images/facebook.svg'
        alt='facebook'
      />
    </div>
  </div>
);

export default Footer;
