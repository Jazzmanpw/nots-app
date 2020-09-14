import { combineReducers } from 'redux';
import { createReducer } from 'deox';

import { noteChanged } from 'State/actions/current-note';
import { noteDeleted, noteSelected } from 'State/actions/notes';

export default combineReducers({
  index: createReducer(-1 as number, handle => [
    handle(noteSelected, (_, { payload: { index } }) => index),
    handle(noteDeleted, () => -1),
  ]),
  value: createReducer('' as string, handle => [
    handle(noteChanged, (_, { payload }) => payload),
    handle(noteSelected, (_, { payload: { value } }) => value),
    handle(noteDeleted, () => ''),
  ])
})

