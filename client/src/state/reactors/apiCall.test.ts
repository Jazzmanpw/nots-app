import api from 'Utils/api';
import { getNotes } from 'State/actions/apiCall';
import apiCall from 'State/reactors/apiCall';
import { mockDispatch, mockState } from 'Utils/tests';

jest
  .mock('API')
;
const state = mockState();
const dispatch = mockDispatch();

const get = api.get as jest.MockedFunction<typeof api.get>;

describe(getNotes.started, () => {
  const response = ['note', 'another'];
  beforeEach(() => {
    get.mockReturnValue(Promise.resolve(response));
    apiCall({ state, dispatch, action: getNotes.started() });
  });
  afterEach(() => {
    get.mockReset();
  });

  test('call api.get with "/notes" pathname', () => {
    expect(api.get).toBeCalledWith('/notes');
  });

  test('dispatch getNotes.done with the response received', () => {
    expect(dispatch).toBeCalledWith(getNotes.done(response))
  });
});