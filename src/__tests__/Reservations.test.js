import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Reservations from '../components/Reservations';

test('renders Reservations component correctly', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
      </Provider>,
    );
  });
});
