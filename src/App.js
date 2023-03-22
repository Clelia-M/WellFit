import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Nutritions from './components/Nutritions';
import Workout from './components/Workout';
import Bmr from './components/Bmr';
import Bmi from './components/Bmi';
import Charts from './components/Charts';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Youtube from './components/Youtube';
import Footer from './components/Footer';
import Fitness from './components/Fitness';




function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Jumbotron />
      <Cards />
      <div className="container" id="trackers">
        <div id="component1"> <Nutritions /></div>
        <div id="component2"> <Bmr /></div>
      </div>
      <Fitness />
      <div className="container" id="wcalculator">
        <div id="component1">  <Bmi /></div>
        <div id="component2"> <Workout /></div>
      </div>      
      <Charts />
      <FAQ />
      <Newsletter />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;