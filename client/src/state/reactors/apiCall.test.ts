import { notesSelector as originalNotesSelector } from 'Features/notes/state';
import api from 'Utils/api';
import { downloadNotes, uploadNotes } from 'State/actions/apiCall';
import apiCall from 'State/reactors/apiCall';
import { mockDispatch, mockState } from 'Utils/tests';

jest
  .mock('Utils/api')
  .mock('Features/notes/state')
;

const state = mockState();
const dispatch = mockDispatch();

const notesSelector = originalNotesSelector as jest.MockedFunction<typeof originalNotesSelector>;
const get = api.get as jest.MockedFunction<typeof api.get>;
const put = api.put as jest.MockedFunction<typeof api.put>;

describe(downloadNotes.started, () => {
  const response = ['note', 'another'];
  beforeEach(() => {
    get.mockReturnValue(Promise.resolve(response));
    apiCall({ state, dispatch, action: downloadNotes.started() });
  });
  afterEach(() => {
    get.mockReset();
  });

  test('call api.get with "/notes" pathname', () => {
    expect(get).toBeCalledWith('/notes');
  });

  test('dispatch getNotes.done with the response received', () => {
    expect(dispatch).toBeCalledWith(downloadNotes.done(response))
  });
});

describe(uploadNotes.started, () => {
  const notes = ['some', 'notes'];
  beforeAll(() => {
    notesSelector.mockReturnValue(notes);
  });
  afterAll(() => {
    notesSelector.mockReset();
  });

  beforeEach(() => {
    apiCall({ state, dispatch, action: uploadNotes.started() });
  })
  afterEach(() => {
    put.mockReset();
  });

  test('call api.put with "/notes" pathname and state.notes as value', () => {
    expect(put).toBeCalledWith('/notes', notes);
  });

  test('dispatch uploadNotes.done', () => {
    expect(dispatch).toBeCalledWith(uploadNotes.done());
  });
});