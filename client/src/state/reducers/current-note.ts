import { combineReducers } from 'redux';
import { createReducer } from 'deox';

import { noteChanged, noteSaved } from 'State/actions/current-note';

export default combineReducers({
  index: createReducer(-1 as number, handle => [
    handle(noteSaved.end, (_, { payload: { index } }) => index),
  ]),
  value: createReducer('' as string, handle => [
    handle(noteChanged, (_, { payload }) => payload),
  ])
})

