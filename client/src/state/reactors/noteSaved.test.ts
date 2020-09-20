import { currentNoteIndexSelector, currentNoteValueSelector, noteSaved } from 'Features/current-note';
import { uploadNotes } from 'State/actions/apiCall';
import { notesCountSelector } from 'Features/notes';
import { mockDispatch, mockState } from 'Utils/tests';
import reactor from './noteSaved';

import type { ReduxState } from 'State/store';

jest
  .mock('Features/current-note')
  .mock('Features/notes')
;

// somehow ts decides that this selector returns never instead of number
const indexSelector = currentNoteIndexSelector as unknown as jest.MockedFunction<((state: ReduxState) => number)>;
const valueSelector = currentNoteValueSelector as jest.MockedFunction<typeof currentNoteValueSelector>;
const countSelector = notesCountSelector as jest.MockedFunction<typeof notesCountSelector>;

const state = mockState();
const dispatch = mockDispatch();

function mockNote(index: number, value: string) {
  beforeAll(() => {
    indexSelector.mockReturnValue(index);
    valueSelector.mockReturnValue(value);
  });
  afterAll(() => {
    indexSelector.mockReset();
    valueSelector.mockReset();
  });

  return { index, value };
}
function mockNotesCount(count: number) {
  beforeAll(() => {
    countSelector.mockReturnValue(count);
  });
  afterAll(() => {
    countSelector.mockReset();
  });
  return count;
}

describe(noteSaved.started, () => {
  beforeEach(() => {
    reactor({ state, dispatch, action: noteSaved.started });
  });

  function testDispatchUploadNotes() {
    test('dispatch uploadNotes.started', () => {
      expect(dispatch).toBeCalledWith(uploadNotes.started());
    });
  }

  describe('index is non-negative', () => {
    const { index, value } = mockNote(5, 'some new note');

    test('dispatch noteSaved.end with current index & value from state as payload', () => {
      expect(dispatch).toBeCalledWith(noteSaved.done(value, index));
    });

    testDispatchUploadNotes();
  });

  describe('index is -1', () => {
    const { value } = mockNote(-1, 'some entirely new note');
    const count = mockNotesCount(4);

    test('dispatch noteSaved.end with current value and index as an index of an added note', () => {
      expect(dispatch).toBeCalledWith(noteSaved.done(value, count));
    });

    testDispatchUploadNotes();
  });
});