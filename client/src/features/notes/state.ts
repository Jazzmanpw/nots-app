import { createReducer } from 'deox';
import { noteSaved } from 'Features/current-note/actions';
import { noteDeleted, noteSelected } from './actions';

import type { ReduxState } from 'State/store';

export default createReducer([] as string[], handle => [
  handle(noteSaved.done, (state, { payload: { value, index } }) => {
    const newState = [...state];
    newState[index] = value;
    return newState;
  }),
  handle(noteSelected, (state, { payload }) => {
    return payload.index === state.length ? [...state, payload.value] : state;
  }),
  handle(noteDeleted, (state, { payload }) => state.filter((_, i) => i !== payload)),
]);


export const notesSelector = (state: ReduxState) => state.notes;

export const notesCountSelector = (state: ReduxState) => notesSelector(state).length;

export const noNotesSavedSelector = (state: ReduxState) => !notesCountSelector(state);