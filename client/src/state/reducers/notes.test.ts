import { noteSaved } from 'State/actions/current-note';
import { initAction } from 'State/actions/test-actions';
import importedReducer from './notes';

import type { AnyAction } from 'redux';

const reducer = (
  state?: ReturnType<typeof importedReducer>,
  action: AnyAction = initAction(),
) => importedReducer(state, action);

test('initial state to be an empty array', () => {
  expect(reducer()).toEqual([]);
});

describe(`${noteSaved}`, () => {
  const initState = ['the first note', 'the second note'];

  test('if a note with a new index added, append it to the state', () => {
    const value = 'the third note';
    const index = 2;
    const result = reducer(initState, noteSaved(value, index));
  });

  test('if a note with an existing index added, replace the previous note', () => {
    //
  });
});