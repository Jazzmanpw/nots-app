import { createReducer, createReducerMap } from './common';

import type { AnyAction } from 'redux';

describe('createReducer', () => {
  const initState = 'some init state';
  const reducer = createReducer({
    UPPER: state => state.toUpperCase(),
    REPLACE: (state, { match, value }) => state.replace(match, value),
  }, initState);

  test('return the second arg as a default state', () => {
    expect(reducer(undefined, {} as AnyAction)).toBe(initState);
  });

  test('if the action type is in the map, return corresponding reducer result', () => {
    expect(reducer(initState, { type: 'UPPER' })).toBe(initState.toUpperCase());
  });

  test('reducer from the action map has access to the action', () => {
    expect(reducer(initState, { type: 'REPLACE', match: 'init', value: 'new' })).toBe('some new state');
  });

  test('if the action type is not in the map, return the previous state', () => {
    const state = 'some state';
    expect(reducer(state, { type: 'UNKNOWN_ACTION' })).toBe(state);
  });

  test('if the action map has "default" reducer and an unknown action is dispatched, ' +
    'return a result of the default reducer', () => {
    const reducer = createReducer({ default: state => `${state} default` }, 'state');
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toBe('state default');
  });
});

describe('createReducerMap', () => {
  const initStates = {
    entry: null as string | null,
    another: 42,
  }
  const reducerMap = createReducerMap({
    entry: {
      ADD_ENTRY: () => 'something added',
      REMOVE_ENTRY: () => null,
    },
    another: {
      TRANSFORM: state => state * 2 + 100,
    },
  }, initStates);

  test('return a map of reducers', () => {
    expect(reducerMap).toEqual({
      entry: expect.any(Function),
      another: expect.any(Function),
    });
  });
  
  describe.each([
    ['entry', { ADD_ENTRY: 'something added', REMOVE_ENTRY: null }] as const,
    ['another', { TRANSFORM: 184 }] as const,
  ])('nested action map applied', (key, resultMap) => {
    test('initial state to be from the second argument', () => {
      expect(reducerMap[key](undefined, {} as AnyAction)).toBe(initStates[key]);
    });

    test.each(Object.entries(resultMap))('action applied', (type, result) => {
      expect(reducerMap[key](undefined, { type })).toBe(result);
    });
  });
});
