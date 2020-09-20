import reducer, {
  noteSaved,
  noteChanged,
  currentNoteIndexSelector,
  currentNoteValueSelector,
  noteSelectedSelector,
} from 'Features/current-note';
import { noteDeleted, noteSelected } from 'State/actions/notes';
import type { ReduxState } from 'State/store';
import { initAction, testAction } from 'Utils/tests';

describe('actions', () => {
  const value = 'some value';
  const index = 5;

  testAction(noteSaved.started());

  testAction(noteSaved.done(value, index), { value, index });

  testAction(noteChanged(value), value);
});

describe('reducer', () => {
  describe('index', () => {
    test('initial state to be -1', () => {
      expect(reducer(undefined, initAction()).index).toBe(-1);
    });

    test(noteSelected.type, () => {
      const index = 2;
      expect(reducer(undefined, noteSelected('any value', index)).index).toBe(index);
    });

    test(noteDeleted.type, () => {
      expect(reducer({ index: 4, value: 'some note' }, noteDeleted(4)).index).toBe(-1);
    });
  });

  describe('value', () => {
    test('initial state to be an empty string', () => {
      expect(reducer(undefined, initAction()).value).toBe('');
    });

    test(noteChanged.type, () => {
      const value = 'some value'
      expect(reducer(undefined, noteChanged(value)).value).toBe(value);
    });

    test(noteSelected.type, () => {
      const value = 'selected value';
      expect(reducer(undefined, noteSelected(value, 4)).value).toBe(value);
    });

    test(noteDeleted.type, () => {
      expect(reducer({ index: 4, value: 'some note' }, noteDeleted(4)).value).toBe('');
    })
  });
});

describe('selectors', () => {
  function mockCurrentNoteState(currentNote: ReturnType<typeof reducer>) {
    return { currentNote } as ReduxState;
  }

  test('currentNoteIndexSelector', () => {
    const state = mockCurrentNoteState({ index: 5, value: '' });
    expect(currentNoteIndexSelector(state)).toBe(state.currentNote.index);
  });

  test('currentNoteValueSelector', () => {
    const state = mockCurrentNoteState({ index: -1, value: 'the value'});
    expect(currentNoteValueSelector(state)).toBe(state.currentNote.value);
  })

  describe('noteSelectedSelector', () => {
    test('if note index is -1, return false', () => {
      const state = mockCurrentNoteState({ index: -1, value: '' });
      expect(noteSelectedSelector(state)).toBe(false);
    });

    test('if note index is more than -1, return true', () => {
      const state = mockCurrentNoteState({ index: 2, value: '' });
      expect(noteSelectedSelector(state)).toBe(true);
    });
  });
});