import React from 'react';
import './scss/ReviewsSection.scss';

const ReviewsSection = () => (
  <>
    <div className="Reviews-title-section">
      <h2 className="Reviews-title">LOREM IPSUM DOLOR SIT AMET</h2>
      <div className="Reviews-stars">
        <span className="Reviews-star">&#9733;</span>
        <span className="Reviews-star">&#9733;</span>
        <span className="Reviews-star">&#9733;</span>
        <span className="Reviews-star">&#9733;</span>
        <span className="Reviews-star">&#9733;</span>
      </div>
    </div>
    <div className="Reviews-txt-section">
      <div className="Reviews-txt-ctnr">
        <div className="Reviews-slide-left-btn">
          <div className="Reviews-left-upper-tick"></div>
          <div className="Reviews-left-lower-tick"></div>
        </div>
        <div className="Reviews-review">
          <h3 className="Reviews-review-name purple-links-hdrs">John Doe 08/08/2019</h3>
          <p className="Reviews-review-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="Reviews-slider-dots">
            <div className="Reviews-slider-dot"></div>
            <div className="Reviews-slider-dot active-dot"></div>
            <div className="Reviews-slider-dot"></div>
          </div>
        </div>
        <div className="Reviews-slide-right-btn">
          <div className="Reviews-right-upper-tick"></div>
          <div className="Reviews-right-lower-tick"></div>
        </div>
      </div>
    </div>
  </>
);

export default ReviewsSection;
