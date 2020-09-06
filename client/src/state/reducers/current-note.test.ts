import type { NoteChanged } from 'State/actions/current-note';
import reducer from './current-note';

test('initial state to be an empty string', () => {
  // a dumb type conversion to make the test work
  expect(reducer(undefined, {} as NoteChanged)).toEqual({ index: -1, value: '' });
});