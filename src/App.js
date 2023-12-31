import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NavigationProvider } from './components/NavigationContext';
import Navigation from './components/Navigation';
import CenterContainer from './components/styledcomponents/CenterContainer';
import Reservations from './components/Reservations';
import Aeroplanes from './components/Aeroplanes';
import './App.css';
import Reserve from './components/Reserve';
import AddAeroplane from './components/AddAeroplane';
import DeleteAeroplane from './components/DeleteAeroplane';
import Login from './components/Login';
import Register from './components/Register';
import RequireAuth from './components/RequireAuth';
import AeroPlaneDetails from './components/AeroPlaneDetails';
import LoginStyle from './components/styledcomponents/LoginStyle';

const App = () => (
  <NavigationProvider>
    <div className="container-fluid main-height ">
      <div className="">
        <Navigation />
        <main className="col">
          <Routes>
            <Route
              path="/login"
              element={(
                <LoginStyle>
                  <Login />
                </LoginStyle>
              )}
            />
            <Route
              path="/register"
              element={(
                <LoginStyle>
                  <Register />
                </LoginStyle>
              )}
            />
            <Route element={<RequireAuth />}>
              <Route
                exact
                path="/"
                element={(
                  <CenterContainer>
                    <Aeroplanes />
                  </CenterContainer>
                )}
              />
              <Route
                path="/details"
                element={(
                  <CenterContainer>
                    <AeroPlaneDetails />
                  </CenterContainer>
                )}
              />
              <Route
                path="/reservations"
                element={(
                  <CenterContainer>
                    <Reservations />
                  </CenterContainer>
                )}
              />

              <Route
                path="/reserve"
                element={(
                  <CenterContainer>
                    <Reserve />
                  </CenterContainer>
                )}
              />

              <Route
                path="/add_aeroplane"
                element={(
                  <CenterContainer>
                    <AddAeroplane />
                  </CenterContainer>
                )}
              />
              <Route
                path="/delete_aeroplane"
                element={(
                  <CenterContainer>
                    <DeleteAeroplane />
                  </CenterContainer>
                )}
              />
            </Route>
          </Routes>
        </main>
      </div>
      <Toaster position="top-center" />
    </div>
  </NavigationProvider>
);

export default App;
