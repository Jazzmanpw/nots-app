import { notesSelector } from 'State/selectors/notes';
import api from 'Utils/api';
import { downloadNotes, uploadNotes } from 'State/actions/apiCall';

import type { ReactorArg } from 'State/middlewares/reactor';

export default async function apiCall({ state, dispatch, action: { type } }: ReactorArg): Promise<void> {
  if (type === downloadNotes.started.type) {
    dispatch(downloadNotes.done(await api.get('/notes')));
    return;
  }
  if (type === uploadNotes.started.type) {
    await api.put('/notes', notesSelector(state));
    dispatch(uploadNotes.done());
  }
}