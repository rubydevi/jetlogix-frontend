import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NavFooter from '../components/NavFooter';

test('renders NavFooter component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NavFooter />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
