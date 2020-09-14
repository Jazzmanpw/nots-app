import { combineReducers } from 'redux';
import { createReducer } from 'deox';

import { noteChanged, noteSelected } from 'State/actions/current-note';

export default combineReducers({
  index: createReducer(0 as number, handle => [
    handle(noteSelected, (_, { payload: { index } }) => index),
  ]),
  value: createReducer('' as string, handle => [
    handle(noteChanged, (_, { payload }) => payload),
    handle(noteSelected, (_, { payload: { value } }) => value),
  ])
})

