import { NOTE_CHANGED, NOTE_SAVED } from 'State/action-types';

export type NoteSaved = ReturnType<typeof noteSaved>
export function noteSaved() {
  return { type: NOTE_SAVED };
}

export type NoteChanged = ReturnType<typeof noteChanged>
export function noteChanged(value: string) {
  return { type: NOTE_CHANGED, value };
}

export type CurrentNoteAction = NoteChanged | NoteSaved