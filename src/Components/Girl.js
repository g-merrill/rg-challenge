import React from 'react';
import './scss/Girl.scss';

const Girl = () => (
  <div className="Girl">
    <div className='Girl-txt-ctnr'>
      <h2 className="Girl-title purple-links-hdrs">LOREM IPSUM</h2>
      <p className="Girl-txtcontent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla nunc, tincidunt quis enim blandit, sodales bibendum lectus. Nam egestas feugiat sapien sed fermentum.
      </p>
      <button
        className='Girl-btn'
        onClick={() => {
          document.getElementById('Banner')
            .scrollIntoView({behavior: "smooth"});
        }}
      >
        <span>RETURN TO TOP</span>
      </button>
    </div>
    <img className='Girl-img' src="/images/banner-2.jpg" alt="girl"/>
  </div>
);

export default Girl;
