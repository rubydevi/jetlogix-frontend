import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddAeroplane from '../components/AddAeroplane';

test('renders AddAeroplane component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <AddAeroplane />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
