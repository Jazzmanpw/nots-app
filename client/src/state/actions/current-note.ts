import { createAction } from 'deox';

export const noteSaved = {
  start: createAction('NOTE_SAVED:START'),
  end: createAction(
    'NOTE_SAVED:END',
    resolve => (value: string, index: number) => resolve({ value, index }),
  ),
}

export const noteChanged = createAction('NOTE_CHANGED', resolve => (value: string) => resolve(value));

export const noteSelected = createAction(
  'NOTE_SELECTED',
  resolve => (value: string, index: number) => resolve({ value, index }),
)
