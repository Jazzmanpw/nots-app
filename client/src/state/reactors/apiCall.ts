import api from 'Utils/api';
import { getNotes } from 'State/actions/apiCall';

import type { ReactorArg } from 'State/middlewares/reactor';

export default async function apiCall({ dispatch, action: { type } }: ReactorArg): Promise<void> {
  if (type === getNotes.started.type) {
    dispatch(getNotes.done(await api.get('/notes')));
  }
}