import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Aeroplane from './components/Aeroplanes';

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/aeroplane" component={Aeroplane} />

      </Routes>
    </main>
  );
}

export default App;
