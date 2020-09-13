import { noteSaved } from 'State/actions/current-note';
import { currentNoteIndexSelector, currentNoteValueSelector } from 'State/selectors/current-note';
import { notesCountSelector } from 'State/selectors/notes';

import type { ReactorArg } from 'State/middlewares/reactor';

export default function ({ state, dispatch, action }: ReactorArg): void {
  if (action.type === noteSaved.start.type) {
    const index = currentNoteIndexSelector(state);
    const newIndex = index < 0 ? notesCountSelector(state) : index;
    dispatch(noteSaved.end(currentNoteValueSelector(state), newIndex));
  }
}