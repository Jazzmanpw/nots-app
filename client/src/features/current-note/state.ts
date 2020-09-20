import { createReducer } from 'deox';
import { combineReducers } from 'redux';

import { noteDeleted, noteSelected } from 'Features/notes/actions';
import { noteChanged } from './actions';

import type { ReduxState } from 'State/store';

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

const currentNoteSelector = (state: ReduxState) => state.currentNote;

export const currentNoteValueSelector = (state: ReduxState) => currentNoteSelector(state).value;

export const currentNoteIndexSelector = (state: ReduxState) => currentNoteSelector(state).index;

export const noteSelectedSelector = (state: ReduxState) => currentNoteIndexSelector(state) >= 0;
