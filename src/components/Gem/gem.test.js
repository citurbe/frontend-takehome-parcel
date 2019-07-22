import React from 'react';
import Gem from './Gem';
import renderer from 'react-test-renderer';

const gemInfo = {
  name: 'Test Gem',
  version: '2.5',
  project_uri: 'http://fakeurl.com'
};

test('gem display renders correctly', () => {
  const component = renderer.create(<Gem isSaved={false} {...gemInfo} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
