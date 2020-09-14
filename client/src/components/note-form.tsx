import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noteChanged, noteSaved } from 'State/actions/current-note';
import { currentNoteValueSelector, noteSelectedSelector } from 'State/selectors/current-note';

import type { ChangeEventHandler, FormEventHandler } from 'react';

export default function NoteForm() {
  const dispatch = useDispatch();
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const value = useSelector(currentNoteValueSelector);
  const disabled = !useSelector(noteSelectedSelector);

  const onSave: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(noteSaved.start());
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value } }) => {
    dispatch(noteChanged(value));
  };

  return (
    <form onSubmit={onSave}>
      <textarea ref={textInputRef} onChange={onChange} disabled={disabled} value={value}/>
      <button disabled={disabled}>Save the note</button>
    </form>
  )
}