import { createAction } from 'deox';

export const getNotes = {
  started: createAction('GET_NOTES:STARTED'),
  done: createAction('GET_NOTES:DONE', resolve => (notes: string[]) => resolve(notes)),
};
