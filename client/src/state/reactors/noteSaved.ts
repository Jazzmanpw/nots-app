import { currentNoteIndexSelector, currentNoteValueSelector, noteSaved } from 'Features/current-note';
import { uploadNotes } from 'State/actions/apiCall';
import { notesCountSelector } from 'Features/notes';

import type { ReactorArg } from 'State/middlewares/reactor';

export default function ({ state, dispatch, action }: ReactorArg): void {
  if (action.type === noteSaved.started.type) {
    const index = currentNoteIndexSelector(state);
    const newIndex = index < 0 ? notesCountSelector(state) : index;
    dispatch(noteSaved.done(currentNoteValueSelector(state), newIndex));
    dispatch(uploadNotes.started());
  }
}