import { noteSaved } from 'Features/current-note/actions';
import { noteSelected, noteDeleted } from 'Features/notes/actions'
import reducer from 'Features/notes/state';
import { initAction, testAction } from 'Utils/tests';

describe('actions', () => {
  const value = 'some value';
  const index = 4;

  testAction(noteSelected(value, index), { value, index });

  testAction(noteDeleted(index), index);
});

describe('reducer', () => {
  const initState = ['the first note', 'the second note'];

  test('initial state to be an empty array', () => {
    expect(reducer(undefined, initAction())).toEqual([]);
  });

  describe(noteSaved.done, () => {
    test('replace the note with the new one', () => {
      const value = 'the new first note';
      const index = 0;
      const result = reducer(initState, noteSaved.done(value, index));

      expect(result).toEqual([value, initState[1]]);
    });
  });

  describe(noteSelected, () => {
    test('if note passed with an index that is in the state, return state unchanged', () => {
      const index = 1;
      const result = reducer(initState, noteSelected('any value', index));
      expect(result).toBe(initState);
    });

    test('if note passed with an index that should be the next in the state, append its value', () => {
      const value = 'some new value';
      const result = reducer(initState, noteSelected(value, initState.length));
      expect(result).toEqual([...initState, value])
    });
  });

  describe(noteDeleted, () => {
    test('remove note with the passed index from the state', () => {
      expect(reducer(initState, noteDeleted(0))).toEqual([initState[1]]);
    });
  });
});