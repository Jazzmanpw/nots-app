import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'State/store';
import { NoteForm } from 'Components/index';

ReactDOM.render(
  <Provider store={store}>
    <NoteForm />
  </Provider>,
  window.document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
