import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { downloadNotes } from 'State/actions/apiCall';

import store from 'State/store';
import { CurrentNoteForm, NoteListForm } from 'Components/index';

store.dispatch(downloadNotes.started());

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
