import reducer from './notes';

import type { AnyAction } from 'redux';

test('initial state to be an empty array', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual([]);
});