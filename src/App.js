import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Nutritions from './components/Nutritions';
import Workout from './components/Workout';
import Charts from './components/Charts';
// import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Jumbotron />
      <Cards />
      <Nutritions />
      <Workout />
      <Charts />
      {/* <FAQ /> */}
      <Newsletter />
      {/* <Youtube /> */}
      <Footer />
    </div>
  );
}

export default App;