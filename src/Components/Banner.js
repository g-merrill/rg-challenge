import React from 'react';
import './scss/Banner.scss';

const Banner = () => (
  <div id='Banner' className="Banner">
    <img
      className='Banner-rg-logo-white'
      src="/images/logo-white.svg"
      alt="rooster grin"
    />
    <div className="Banner-content">
      <h1 className='Banner-welcome-txt'>WELCOME TO</h1>
      <h2 className='Banner-rg-text'>Rooster Grin</h2>
      <button
        className='Banner-btn'
        onClick={() => {
          document.getElementById('Hikers')
            .scrollIntoView({behavior: "smooth"});
        }}
      >
        <span>LEARN MORE</span>
      </button>
    </div>
    <img
      className='Banner-img'
      src='/images/hero.jpg'
      alt="bridge"
    />
  </div>
);

export default Banner;
