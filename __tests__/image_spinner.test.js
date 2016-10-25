import 'react-native';
import React from 'react';
import {ImageSpinner} from '../';

import renderer from 'react-test-renderer';
it('renders correctly', () => {
  const tree = renderer.create(
    <ImageSpinner />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});