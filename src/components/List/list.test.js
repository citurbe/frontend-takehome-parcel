import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';

const gemList = [
  {
    name: 'gem 1',
    version: '2.0',
    project_uri: 'http://test1.org'
  },
  {
    name: 'gem 2',
    version: '5.6',
    project_uri: 'http://test2.org'
  },
  {
    name: 'gem 3',
    version: '1.9.2',
    project_uri: 'http://test3.org'
  }
];

const savedGems = [
  {
    name: 'gem 2',
    version: '5.6',
    project_uri: 'http://test2.org'
  }
];

test('List renders correctly', () => {
  const component = renderer.create(
    <List gemList={gemList} savedGems={savedGems} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
