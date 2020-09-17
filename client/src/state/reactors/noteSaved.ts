import { uploadNotes } from 'State/actions/apiCall';
import { noteSaved } from 'State/actions/current-note';
import { currentNoteIndexSelector, currentNoteValueSelector } from 'State/selectors/current-note';
import { notesCountSelector } from 'State/selectors/notes';

import type { ReactorArg } from 'State/middlewares/reactor';

export default function ({ state, dispatch, action }: ReactorArg): void {
  if (action.type === noteSaved.started.type) {
    const index = currentNoteIndexSelector(state);
    const newIndex = index < 0 ? notesCountSelector(state) : index;
    dispatch(noteSaved.done(currentNoteValueSelector(state), newIndex));
    dispatch(uploadNotes.started());
  }
}