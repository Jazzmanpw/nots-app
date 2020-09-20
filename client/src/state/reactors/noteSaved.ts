import { noteSaved } from 'Features/current-note/actions';
import { currentNoteIndexSelector, currentNoteValueSelector } from 'Features/current-note/state';
import { notesCountSelector } from 'Features/notes/state';
import { uploadNotes } from 'State/actions/apiCall';

import type { ReactorArg } from 'State/middlewares/reactor';

export default function ({ state, dispatch, action }: ReactorArg): void {
  if (action.type === noteSaved.started.type) {
    const index = currentNoteIndexSelector(state);
    const newIndex = index < 0 ? notesCountSelector(state) : index;
    dispatch(noteSaved.done(currentNoteValueSelector(state), newIndex));
    dispatch(uploadNotes.started());
  }
}