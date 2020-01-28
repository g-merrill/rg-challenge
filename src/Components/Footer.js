import React from 'react';
import './scss/Footer.scss';

const Footer = () => (
  <div className="Footer">
    <p className='Footer-txt'>Follow Us:</p>
    <div className="Footer-logo-ctnr">
      <img
        className='Footer-ig-svg'
        src="/images/instagram.svg"
        alt="instagram"
      />
      <img
        className='Footer-fb-svg'
        src="/images/facebook.svg"
        alt="facebook"
      />
    </div>
  </div>
);

export default Footer;
