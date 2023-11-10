import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NavBarMobile from '../components/NavBarMobile';

test('renders NavBarMobile component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBarMobile />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
