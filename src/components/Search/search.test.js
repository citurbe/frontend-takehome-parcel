import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';

test('Search renders correctly', () => {
  const component = renderer.create(<Search searchText="test search text" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
