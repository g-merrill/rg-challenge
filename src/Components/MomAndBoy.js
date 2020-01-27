import React from 'react';
import './scss/MomAndBoy.scss';

const MomAndBoy = () => (
  <div className="MomAndBoy">
    <div className='MomAndBoy-txt-ctnr'>
      <h2 className="MomAndBoy-title purple-links-hdrs">LOREM IPSUM</h2>
      <button className='MomAndBoy-btn'>BUTTON BUTTON</button>
    </div>
    <img
      className='MomAndBoy-img'
      src="/images/banner-1.jpg"
      alt="mom and boy"
    />
  </div>
);

export default MomAndBoy;
