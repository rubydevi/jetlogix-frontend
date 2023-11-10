import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AeroPlaneDetails from '../components/AeroPlaneDetails';

test('renders AeroPlaneDetails component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <AeroPlaneDetails />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
