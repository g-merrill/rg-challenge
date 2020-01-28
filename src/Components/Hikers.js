import React from 'react';
import './scss/Hikers.scss';

const Hikers = () => (
  <>
    <div id='Hikers' className="Hikers-txt-section">
      <h2 className="Hikers-title purple-links-hdrs">LOREM IPSUM</h2>
      <p className="Hikers-txtcontent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla nunc, tincidunt quis enim blandit, sodales bibendum lectus. Nam egestas feugiat sapien sed fermentum. Proin placerat suscipit ex, vel condimentum est cursus ac. Praesent a arcu in ipsum elementum dapibus eget et augue. In hac habitasse platea dictumst. Phasellus rhoncus ultricies urna quis pretium. Donec placerat, enim quis vestibulum volutpat, est ex vehicula felis, finibus finibus lectus turpis ut nisi. Praesent quis dignissim urna. Duis nulla tortor, laoreet tincidunt dictum id, suscipit vitae est. Nullam placerat congue mauris, in ultrices purus cursus et.
      </p>
      <a
        href="/rg-challenge"
        className="Hikers-link purple-links-hdrs"
      >
        > Lorem Ipsum
      </a>
    </div>
    <img
      className="Hikers-img"
      src="/rg-challenge/images/img-1.jpg"
      alt="hikers"
    />
  </>
);

export default Hikers;
