import { noteChanged } from 'State/actions/current-note';
import { initAction } from 'State/actions/test-actions';
import importedReducer from './current-note';

import type { AnyAction } from 'redux';

const reducer = (
  state?: ReturnType<typeof importedReducer>,
  action: AnyAction = initAction(),
) => importedReducer(state, action);

describe('index', () => {
  test('initial state to be -1', () => {
    expect(reducer().index).toBe(-1);
  });
});

describe('value', () => {
  test('initial state to be an empty string', () => {
    expect(reducer().value).toBe('');
  });

  test(`${noteChanged}`, () => {
    const value = 'some value'
    expect(reducer(undefined, noteChanged(value)).value).toBe(value);
  });
});
