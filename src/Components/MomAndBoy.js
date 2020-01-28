import React from 'react';
import './scss/MomAndBoy.scss';

const MomAndBoy = () => (
  <div className='MomAndBoy'>
    <div className='MomAndBoy-txt-ctnr'>
      <h2 className='MomAndBoy-title purple-links-hdrs'>LOREM IPSUM</h2>
      <button
        className='MomAndBoy-btn'
        onClick={() => {
          document.getElementById('Choices')
            .scrollIntoView({behavior: 'smooth'});
        }}
      >
        <span>WHAT WE OFFER</span>
      </button>
    </div>
    <img
      className='MomAndBoy-img'
      src='/rg-challenge/images/banner-1.jpg'
      alt='mom and boy'
    />
  </div>
);

export default MomAndBoy;
