import { applyMiddleware, createStore } from 'redux';
import reduxDevtools from 'redux-devtools-extension';

import reactors from 'State/reactors';
import reducer from './reducers';

export default createStore(reducer, reduxDevtools.composeWithDevTools(applyMiddleware(reactors)));

export interface ReduxState extends ReturnType<typeof reducer> {}
