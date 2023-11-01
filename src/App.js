import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/NavigationContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Aeroplane from './components/Aeroplanes';

function App() {
  return (
    <NavigationProvider>
      <div className="container-fluid">
        <div className="">
          <Navigation />
          <main className="col">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/reserve" element={<Reservations />} />
              <Route path="/aeroplanes" element={<Aeroplane />} />
              <Route path="/add_aeroplane" element={<Aeroplane />} />
              <Route path="/delete_aeroplane" element={<Aeroplane />} />
            </Routes>
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
