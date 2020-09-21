import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noteChanged, noteSaved } from 'Features/current-note/actions';
import { currentNoteIndexSelector, currentNoteValueSelector, noteSelectedSelector } from 'Features/current-note/state';
import { noNotesSavedSelector } from 'Features/notes/state';

import type { ChangeEventHandler, FormEventHandler } from 'react';

export default function CurrentNoteForm() {
  const dispatch = useDispatch();
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const disabled = !useSelector(noteSelectedSelector);
  const value = useSelector(currentNoteValueSelector);
  const index = useSelector(currentNoteIndexSelector);
  const noNotesSaved = useSelector(noNotesSavedSelector);

  const onSave: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(noteSaved(value, index));
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value } }) => {
    dispatch(noteChanged(value));
  };

  return (
    <form onSubmit={onSave} className='current-note-form'>
      <textarea
        ref={textInputRef}
        onChange={onChange}
        disabled={disabled}
        value={!disabled ? value :
          noNotesSaved ? 'Add a note' :
            ''}
      />
      <button disabled={disabled}>Save the note</button>
    </form>
  )
}