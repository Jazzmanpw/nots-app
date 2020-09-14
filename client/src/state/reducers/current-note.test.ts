import { noteChanged, noteSelected } from 'State/actions/current-note';
import { initAction } from 'Utils/tests';
import importedReducer from './current-note';

import type { AnyAction } from 'redux';

const reducer = (
  state?: ReturnType<typeof importedReducer>,
  action: AnyAction = initAction(),
) => importedReducer(state, action);

describe('index', () => {
  test('initial state to be 0', () => {
    expect(reducer().index).toBe(0);
  });

  test(noteSelected.type, () => {
    const index = 2;
    expect(reducer(undefined, noteSelected('any value', index)).index).toBe(index);
  });
});

describe('value', () => {
  test('initial state to be an empty string', () => {
    expect(reducer().value).toBe('');
  });

  test(noteChanged.type, () => {
    const value = 'some value'
    expect(reducer(undefined, noteChanged(value)).value).toBe(value);
  });

  test(noteSelected.type, () => {
    const value = 'selected value';
    expect(reducer(undefined, noteSelected(value, 4)).value).toBe(value);
  });
});
