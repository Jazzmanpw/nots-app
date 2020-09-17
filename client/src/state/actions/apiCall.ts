import { createAction } from 'deox';

export const downloadNotes = {
  started: createAction('DOWNLOAD_NOTES:STARTED'),
  done: createAction('DOWNLOAD_NOTES:DONE', resolve => (notes: string[]) => resolve(notes)),
};

export const uploadNotes = {
  started: createAction('UPLOAD_NOTES:STARTED'),
  done: createAction('UPLOAD_NOTES:DONE'),
}
