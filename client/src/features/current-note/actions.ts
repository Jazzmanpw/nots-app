import { createAction } from 'deox';

export const noteSaved = createAction(
  'NOTE_SAVED',
  resolve => (value: string, index: number) => resolve({ value, index }),
)

export const noteChanged = createAction('NOTE_CHANGED', resolve => (value: string) => resolve(value));
