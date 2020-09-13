import { noteSaved } from 'State/actions/current-note';
import { initAction } from 'Utils/tests';
import importedReducer from './notes';

import type { AnyAction } from 'redux';

const reducer = (
  state?: ReturnType<typeof importedReducer>,
  action: AnyAction = initAction(),
) => importedReducer(state, action);

test('initial state to be an empty array', () => {
  expect(reducer()).toEqual([]);
});

describe(noteSaved.end, () => {
  const initState = ['the first note', 'the second note'];

  test('if a note passed with a new index, append it', () => {
    const value = 'the third note';
    const index = 2;
    const result = reducer(initState, noteSaved.end(value, index));

    expect(result).toEqual([...initState, value]);
  });

  test('if a note passed with an existing index, replace the note with the new one', () => {
    const value = 'the new first note';
    const index = 0;
    const result = reducer(initState, noteSaved.end(value, index));

    expect(result).toEqual([value, initState[1]]);
  });
});