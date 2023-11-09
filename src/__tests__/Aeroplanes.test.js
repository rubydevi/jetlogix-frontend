import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Aeroplanes from '../components/Aeroplanes';

test('renders Aeroplanes component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Aeroplanes />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
