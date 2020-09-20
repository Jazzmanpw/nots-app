import { combineReducers } from 'redux';

import currentNoteReducer from 'Features/current-note';
import notesReducer from 'Features/notes';

export default combineReducers({
  currentNote: currentNoteReducer,
  notes: notesReducer,
})