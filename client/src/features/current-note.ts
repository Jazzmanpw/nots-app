import { createAction } from 'deox';
import { combineReducers } from 'redux';
import { createReducer } from 'deox';

import { noteDeleted, noteSelected } from 'State/actions/notes';

import type { ReduxState } from 'State/store';

export const noteSaved = {
  started: createAction('NOTE_SAVED:STARTED'),
  done: createAction(
    'NOTE_SAVED:DONE',
    resolve => (value: string, index: number) => resolve({ value, index }),
  ),
}

export const noteChanged = createAction('NOTE_CHANGED', resolve => (value: string) => resolve(value));

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

