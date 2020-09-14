import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'State/store';
import { CurrentNoteForm, NoteListForm } from 'Components/index';

ReactDOM.render(
  <Provider store={store}>
    <CurrentNoteForm key='current' />
    <NoteListForm key='list' />
  </Provider>,
  window.document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
