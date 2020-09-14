import React, { ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noteSelected } from 'State/actions/current-note';
import { currentNoteIndexSelector } from 'State/selectors/current-note';
import { notesSelector } from 'State/selectors/notes';

export default function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  const currentNoteIndex = useSelector(currentNoteIndexSelector);

  const onChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const index = +e.target.value;
    dispatch(noteSelected(notes[index] || '', index));
  }

  return (
    <select size={10} onChange={onChange} value={currentNoteIndex} className='note-list'>
      {notes.map((value, i) => <option value={i}>{value.substr(0, 30)}</option>)}
      <option value={notes.length}>New note</option>
    </select>
  );
}
