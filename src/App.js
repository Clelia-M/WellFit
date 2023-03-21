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




function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Jumbotron />
      <Cards />
      <Nutritions />
      <Workout />
      <Bmr />
      <Bmi />
      <Charts />
      <FAQ />
      <Newsletter />
      <Youtube />
      <Footer />
    </div>
  );
}

export default App;