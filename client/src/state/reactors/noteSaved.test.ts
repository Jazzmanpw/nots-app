import { noteSaved } from 'State/actions/current-note';
import { currentNoteIndexSelector, currentNoteValueSelector } from 'State/selectors/current-note';
import { notesCountSelector } from 'State/selectors/notes';
import { mockDispatch, mockState } from 'Utils/tests';
import reactor from './noteSaved';

import type { ReduxState } from 'State/store';

jest
  .mock('State/selectors/current-note')
  .mock('State/selectors/notes')
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

describe(noteSaved.start, () => {
  beforeEach(() => {
    reactor({ state, dispatch, action: noteSaved.start });
  });

  describe('index is non-negative', () => {
    const { index, value } = mockNote(5, 'some new note');

    test('dispatch noteSaved.end with current index & value from state as payload', () => {
      expect(dispatch).toBeCalledWith(noteSaved.end(value, index));
    });
  });

  describe('index is -1', () => {
    const { value } = mockNote(-1, 'some entirely new note');
    const count = mockNotesCount(4);

    test('dispatch noteSaved.end with current value and index as an index of an added note', () => {
      expect(dispatch).toBeCalledWith(noteSaved.end(value, count));
    });
  });
});