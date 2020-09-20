import { combineReducers } from 'redux';

import currentNoteReducer from 'Features/current-note';
import notes from 'State/reducers/notes';

export default combineReducers({
  currentNote: currentNoteReducer,
  notes,
})