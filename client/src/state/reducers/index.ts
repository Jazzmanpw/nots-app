import { combineReducers } from 'redux';

import currentNote from 'State/reducers/current-note';
import notes from 'State/reducers/notes';

export default combineReducers({
  currentNote,
  notes,
})