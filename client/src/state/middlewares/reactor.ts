import type { AnyAction, Dispatch, Middleware } from 'redux';
import type { ReduxState } from 'State/store';

export default (...reactors: Reactor[]): Middleware<unknown, ReduxState> => store => next => action => {
  next(action);
  const state = store.getState();
  reactors.forEach(reactor => reactor({ state, dispatch: store.dispatch, action }));
}

export interface ReactorArg {
  state: ReduxState,
  dispatch: Dispatch,
  action: AnyAction,
}

export type Reactor = (arg: ReactorArg) => void