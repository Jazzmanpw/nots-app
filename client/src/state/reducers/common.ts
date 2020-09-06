import type { AnyAction, Reducer, ReducersMapObject } from 'redux';

// state is not undefined by default (unlike Redux.Reducer type)
type InnerReducer<S, A extends AnyAction> = (state: S, action: A) => S;

type ActionMap<S, A extends AnyAction> = Record<string, InnerReducer<S, A>> & { default?: InnerReducer<S, A> }

function defaultReducer<S>(state: S): S {
  return state;
}

export function createReducer<S, A extends AnyAction>(
  actionMap: ActionMap<S, A>,
  initState: S,
): Reducer<S, A> {
  return (state = initState, action) => {
    const reducer = actionMap[action.type] || actionMap.default || defaultReducer;
    return reducer(state, action);
  }
}

export function createReducerMap<S extends Record<string, unknown>, A extends AnyAction>(
  nestedStateMap: { [K in keyof S]: ActionMap<S[K], A> },
  initStates: S,
): ReducersMapObject<S, A> {
  return Object.fromEntries((Object.entries(nestedStateMap)).map(
    ([key, actionMap]) => [key, createReducer(actionMap, initStates[key])],
  )) as unknown as ReducersMapObject<S>;
}
