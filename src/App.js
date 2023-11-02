import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/NavigationContext';
import Navigation from './components/Navigation';
import CenterContainer from './components/styledcomponents/CenterContainer';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Aeroplanes from './components/Aeroplanes';
import './App.css';
import Reserve from './components/Reserve';
import AddAeroplane from './components/AddAeroplane';
import DeleteAeroplane from './components/DeleteAeroplane';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <NavigationProvider>
      <div className="container-fluid">
        <div className="">
          <Navigation />
          <main className="col">
            <Routes>
              <Route
                path="/login"
                element={
                  <CenterContainer>
                    <Login />
                  </CenterContainer>
                }
              />
              <Route
                path="/register"
                element={
                  <CenterContainer>
                    <Register />
                  </CenterContainer>
                }
              />

              <Route
                exact
                path="/"
                element={
                  <CenterContainer>
                    <Home />
                  </CenterContainer>
                }
              />
              <Route
                path="/reservations"
                element={
                  <CenterContainer>
                    <Reservations />
                  </CenterContainer>
                }
              />
              <Route
                path="/reserve"
                element={
                  <CenterContainer>
                    <Reserve />
                  </CenterContainer>
                }
              />
              <Route
                path="/aeroplanes"
                element={
                  <CenterContainer>
                    <Aeroplanes />
                  </CenterContainer>
                }
              />
              <Route
                path="/add_aeroplane"
                element={
                  <CenterContainer>
                    <AddAeroplane />
                  </CenterContainer>
                }
              />
              <Route
                path="/delete_aeroplane"
                element={
                  <CenterContainer>
                    <DeleteAeroplane />
                  </CenterContainer>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
