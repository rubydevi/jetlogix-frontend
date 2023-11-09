import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Register from '../components/Register';

test('renders Register component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
