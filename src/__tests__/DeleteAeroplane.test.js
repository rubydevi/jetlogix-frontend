import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import DeleteAeroplane from '../components/DeleteAeroplane';

test('renders DeleteAeroplane component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DeleteAeroplane />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
