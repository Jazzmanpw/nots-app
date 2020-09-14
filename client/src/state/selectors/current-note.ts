import type { ReduxState } from 'State/store';

const currentNoteSelector = (state: ReduxState) => state.currentNote;

export const currentNoteValueSelector = (state: ReduxState) => currentNoteSelector(state).value;

export const currentNoteIndexSelector = (state: ReduxState) => currentNoteSelector(state).index;

export const noteSelectedSelector = (state: ReduxState) => currentNoteIndexSelector(state) >= 0;
