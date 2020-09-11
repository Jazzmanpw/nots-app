import { combineReducers } from 'redux';
import { createReducer } from 'deox';

import { noteChanged } from 'State/actions/current-note';

export default combineReducers({
  index: createReducer(-1 as number, handle => []),
  value: createReducer('' as string, handle => [
    handle(noteChanged, (_, { payload }) => payload),
  ])
})

