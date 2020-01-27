import React from 'react';
import './scss/Banner.scss';

const Banner = () => (
  <div className="Banner">
    <img
      className='rg-logo-white'
      src="/images/logo-white.svg"
      alt="rooster grin"
    />
    <div className="banner-content">
      <h1 className='welcome-txt'>WELCOME TO</h1>
      <h2 className='rg-text'>Rooster Grin</h2>
      <button className='banner-btn'>BUTTON BUTTON</button>
    </div>
    <img
      className='Banner-img'
      src='/images/hero.jpg'
      alt="bridge"
    />
  </div>
);

export default Banner;
