import { createAction } from 'deox';

export const noteSaved = {
  started: createAction('NOTE_SAVED:STARTED'),
  done: createAction(
    'NOTE_SAVED:DONE',
    resolve => (value: string, index: number) => resolve({ value, index }),
  ),
}

export const noteChanged = createAction('NOTE_CHANGED', resolve => (value: string) => resolve(value));
