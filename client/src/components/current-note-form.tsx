import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noteChanged, noteSaved } from 'State/actions/current-note';
import { currentNoteValueSelector } from 'State/selectors/current-note';

import type { ChangeEventHandler, FormEventHandler } from 'react';

export default function CurrentNoteForm() {
  const dispatch = useDispatch();
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const value = useSelector(currentNoteValueSelector);

  const onSave: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(noteSaved.start());
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value } }) => {
    dispatch(noteChanged(value));
  };

  return (
    <form onSubmit={onSave} className='current-note-form'>
      <textarea ref={textInputRef} onChange={onChange} value={value} />
      <button>Save the note</button>
    </form>
  )
}