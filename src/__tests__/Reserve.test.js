import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Reserve from '../components/Reserve';

test('renders Reserve component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Reserve />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
