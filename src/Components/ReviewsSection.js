import React, { Component } from 'react';
import './scss/ReviewsSection.scss';

class ReviewsSection extends Component {
  // state = {
  //   reviewNum: 2
  // }
  // toggleHidden = (num) => {
  //   document.getElementById(`rev${num}`).classList.toggle('Reviews-review-hidden');
  //   document.getElementById(`rev${num + 1}`).classList.toggle('Reviews-review-hidden');
  // }
  // toggleDot = (num) => {
  //   document.getElementById(`dot${num}`).classList.toggle('active-dot');
  //   document.getElementById(`dot${num + 1}`).classList.toggle('active-dot');
  // }
  // handleLeftClick = e => {
  //   switch (this.state.reviewNum) {
  //     case 3:
  //       this.toggleHidden(2);
  //       this.toggleDot(2);
  //       this.setState({ reviewNum: 2 });
  //       break;
  //     case 2:
  //       this.toggleHidden(1);
  //       this.toggleDot(1);
  //       this.setState({ reviewNum: 1 });
  //       break;
  //     default:
  //       return;
  //   }
  // }
  // handleRightClick = e => {
  //   switch (this.state.reviewNum) {
  //     case 1:
  //       this.toggleHidden(1);
  //       this.toggleDot(1);
  //       this.setState({ reviewNum: 2 });
  //       break;
  //     case 2:
  //       this.toggleHidden(2);
  //       // document.getElementById('name3').classList.toggle('slide-left');
  //       // document.getElementById('rev3').classList.toggle('slide-left');
  //       this.toggleDot(2);
  //       this.setState({ reviewNum: 3 });
  //       break;
  //     default:
  //       return;
  //   }
  // }
  render() {
    return (
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
          <div
            id="myCarousel"
            className="carousel slide Reviews-txt-ctnr"
            data-ride="carousel"
          >
            <a
              className="carousel-control-prev Reviews-slide-btn"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left Reviews-chevron"></i>
            </a>
            <div className="carousel-inner Reviews-review-ctnr">
              <div className="carousel-item active Reviews-review">
                <h3 className="Reviews-review-name purple-links-hdrs">J'on Do 08/08/2018</h3>
                <p className="Reviews-review-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="carousel-item Reviews-review">
                <h3 className="Reviews-review-name purple-links-hdrs">John Doe 08/08/2019</h3>
                <p className="Reviews-review-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="carousel-item Reviews-review">
                <h3 className="Reviews-review-name purple-links-hdrs">Zhiawn Deaux 08/08/2020</h3>
                <p className="Reviews-review-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <a
              className="carousel-control-next Reviews-slide-btn"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fas fa-chevron-right Reviews-chevron"></i>
            </a>
            <ol className="Reviews-slider-dots carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
              ></li>
              <li
                data-target="#myCarousel"
                data-slide-to="1"
                className="active"
              ></li>
              <li
                data-target="#myCarousel"
                data-slide-to="2"
              ></li>
            </ol>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewsSection;
