import { findSaved } from './findSaved';

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

test('findSaved saves a gem', () => {
  const updated = findSaved('gem 1', gemList, savedGems);
  expect(updated.length).toEqual(2);
});

test('findSaved unsaves a gem', () => {
  const updated = findSaved('gem 2', gemList, savedGems);
  expect(updated.length).toEqual(0);
});
