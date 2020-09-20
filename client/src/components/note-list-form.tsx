import React, { ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentNoteIndexSelector } from 'Features/current-note/state';
import { noteDeleted, noteSelected } from 'Features/notes/actions';
import { notesSelector } from 'Features/notes/state';

export default function NoteListForm() {
  const dispatch = useDispatch();
  const notes = useSelector(notesSelector);
  const currentNoteIndex = useSelector(currentNoteIndexSelector);

  const onChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const index = +e.target.value;
    dispatch(noteSelected(notes[index], index));
  }
  const addNote = () => dispatch(noteSelected('', notes.length));
  const deleteNote = () => dispatch(noteDeleted(currentNoteIndex));

  // TODO: generate a unique key for every note
  return (
    <form className='note-list-form'>
      <select size={10} onChange={onChange} value={currentNoteIndex} className='note-list' key='list'>
        {notes.length && currentNoteIndex === -1 ? <option value={-1} disabled>Select a note</option> : null}
        {notes.map((value, i) => <option value={i}>{value.substr(0, 30)}</option>)}
      </select>
      <button type='button' onClick={addNote} key='add'>Add</button>
      <button type='button' onClick={deleteNote} key='delete'>Delete</button>
    </form>
  );
}
