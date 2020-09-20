import { createAction } from 'deox';

import type { AnyAction, Dispatch } from 'redux';
import type { ReduxState } from 'State/store';

export function mockDispatch(): jest.MockedFunction<Dispatch> {
  const dispatch = jest.fn();
  afterEach(() => {
    dispatch.mockClear();
  });
  return dispatch;
}

export function mockState(): ReduxState {
  return {} as ReduxState;
}

export const initAction = createAction('__init');

export function testAction<P, M>(action: AnyAction, payload?: P, meta?: M): void {
  test(action.type, () => {
    expect(action).toEqual({ type: expect.any(String), payload, meta });
  })
}