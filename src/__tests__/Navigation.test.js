import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navigation from '../components/Navigation';

jest.mock('../components/NavigationContext', () => ({
  ...jest.requireActual('../components/NavigationContext'),
  useNavigation: () => ({ isOpen: false }),
}));

test('renders Navigation component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
