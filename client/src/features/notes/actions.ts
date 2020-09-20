import { createAction } from 'deox';

export const noteSelected = createAction(
  'NOTE_SELECTED',
  resolve => (value: string, index: number) => resolve({ value, index }),
)

export const noteDeleted = createAction('NOTE_DELETED', resolve => (index: number) => resolve(index));