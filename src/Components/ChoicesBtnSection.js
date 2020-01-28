import React from 'react';
import './scss/ChoicesBtnSection.scss';

const ChoicesBtnSection = () => (
  <>
    <div id='Choices' className="Choices-txt-section">
      <h2 className="Choices-title">LOREM IPSUM DOLOR SIT AMET</h2>
      <p className="Choices-txtcontent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla nunc, tincidunt quis enim blandit, sodales bibendum lectus. Nam egestas feugiat sapien sed fermentum.
      </p>
      <a href="/" className="Choices-link purple-links-hdrs">> Lorem Ipsum</a>
    </div>
    <div className="Choices-btns">
      <div className="Choices-btn-wrapper">
        <div className='Choices-svg-wrapper'>
          <img
            className='Choices-svg'
            src="/images/home-expertise.svg"
            alt="expertise"
          />
        </div>
        <p className='Choices-btn-txt'>LOREM</p>
      </div>
      <div className="Choices-btn-wrapper">
        <div className='Choices-svg-wrapper'>
          <img
            className='Choices-svg'
            src="/images/home-hygiene.svg"
            alt="hygiene"
          />
        </div>
        <p className='Choices-btn-txt'>LOREM IPSUM</p>
      </div>
      <div className="Choices-btn-wrapper">
        <div className='Choices-svg-wrapper'>
          <img
            className='Choices-svg'
            src="/images/home-lab.svg"
            alt="lab"
          />
        </div>
        <p className='Choices-btn-txt'>LOREM IPSUM</p>
      </div>
      <div className="Choices-btn-wrapper">
        <div className='Choices-svg-wrapper'>
          <img
            className='Choices-svg'
            src="/images/home-retention.svg"
            alt="retention"
          />
        </div>
        <p className='Choices-btn-txt'>LOREM</p>
      </div>
    </div>
  </>
);

export default ChoicesBtnSection;
