import { createReducer } from 'deox';

import { noteSaved } from 'State/actions/current-note';

export default createReducer([] as string[],handle => [
  handle(noteSaved.end, (state, { payload: { value, index } }) => {
    const newState = [...state];
    newState[index] = value;
    return newState;
  }),
]);