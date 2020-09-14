import type { ReduxState } from 'State/store';

export const notesSelector = (state: ReduxState) => state.notes;

export const notesCountSelector = (state: ReduxState) => notesSelector(state).length;

export const noNotesSavedSelector = (state: ReduxState) => !notesCountSelector(state);