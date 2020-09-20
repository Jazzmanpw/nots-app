import { combineReducers } from 'redux';

import currentNoteReducer from 'Features/current-note/state';
import notesReducer from 'Features/notes/state';

export default combineReducers({
  currentNote: currentNoteReducer,
  notes: notesReducer,
})