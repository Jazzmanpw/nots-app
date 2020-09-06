import { combineReducers } from 'redux';

import { NOTE_CHANGED } from 'State/action-types';
import { createReducerMap } from './common';

import type { NoteChanged } from 'State/actions/current-note';

const initStates = {
  index: -1,
  value: '',
}

export default combineReducers(createReducerMap({
  index: {},
  value: {
    [NOTE_CHANGED]: (_state, { value }: NoteChanged) => value,
  },
}, initStates));
