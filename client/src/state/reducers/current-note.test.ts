import { noteChanged, noteSaved } from 'State/actions/current-note';
import { initAction } from 'Utils/tests';
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

  test(noteSaved.end.type, () => {
    const index = 3;
    expect(reducer(undefined, noteSaved.end('any value', index)).index).toBe(index);
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
});
