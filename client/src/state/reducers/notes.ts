import { createReducer } from 'deox';

import type { Reducer } from 'redux';

export default createReducer([] as string[],handle => []) as Reducer<string[]>;