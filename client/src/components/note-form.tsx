import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { noteChanged, noteSaved } from 'State/actions/current-note';

import type { ChangeEventHandler, FormEventHandler } from 'react';

export default function NoteForm() {
  const dispatch = useDispatch();
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const onSave: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(noteSaved.start());
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target: { value } }) => {
    dispatch(noteChanged(value));
  };

  return (
    <form onSubmit={onSave}>
      <textarea ref={textInputRef} onChange={onChange} />
      <button>Save the note</button>
    </form>
  )
}