import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import ReservationCard from '../components/ReservationCard';

test('renders ReservationCard component correctly', () => {
  const aeroplane = {
    name: 'Dragon 1',
    reserved_date: '2023-9-9',
    start_time: '10:00',
    end_time: '11:00',
    start_location: 'Lagos',
    destination: 'Abuja',
    id: 1,
  };

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ReservationCard aeroplane={aeroplane} />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
