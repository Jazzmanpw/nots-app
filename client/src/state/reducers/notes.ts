import { createReducer } from 'deox';

import { noteSaved } from 'Features/current-note';
import { noteDeleted, noteSelected } from 'State/actions/notes';

export default createReducer([] as string[],handle => [
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