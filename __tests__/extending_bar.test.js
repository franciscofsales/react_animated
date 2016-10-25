import 'react-native';
import React from 'react';
import {ExtendingBar} from '../';

import renderer from 'react-test-renderer';
it('renders correctly', () => {
  const tree = renderer.create(
    <ExtendingBar />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});