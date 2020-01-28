import React from 'react';
import './scss/App.scss';
import Banner from './Components/Banner';
import Hikers from './Components/Hikers';
import MomAndBoy from './Components/MomAndBoy';
import ChoicesBtnSection from './Components/ChoicesBtnSection';
import Girl from './Components/Girl';
import ReviewsSection from './Components/ReviewsSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='App'>
      <Banner />
      <Hikers />
      <MomAndBoy />
      <ChoicesBtnSection />
      <Girl />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
