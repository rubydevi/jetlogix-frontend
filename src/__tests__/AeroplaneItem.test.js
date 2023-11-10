import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AeroplaneItem from '../components/AeroplaneItem';

test('renders AeroplaneItem component correctly', () => {
  const aeroplaneData = {
    id: 1,
    image: 'some-image-url',
    name: 'Aeroplane 1',
    description: 'Description of Aeroplane 1',
  };

  const classNamesData = {
    button: 'some-button-class',
    aeroplaneBody: 'some-aeroplane-body-class',
    imageContainer: 'some-image-container-class',
    image: 'some-image-class',
    title: 'some-title-class',
    description: 'some-description-class',
  };

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <AeroplaneItem aeroplane={aeroplaneData} classNames={classNamesData} />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
