import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Nutritions from './components/Nutritions';
import Workout from './components/Workout';
import Bmi from './components/Bmi';
import Charts from './components/Charts';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Cards />
      <Nutritions />
      <Workout />
      <Bmi />
      <Charts />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;