import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Book } from './books.models';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Book/API] Add Book',
  props<{ book: Book }>()
);

export const upsertBook = createAction(
  '[Book/API] Upsert Book',
  props<{ book: Book }>()
);

export const addBooks = createAction(
  '[Book/API] Add Books',
  props<{ books: Book[] }>()
);

export const upsertBooks = createAction(
  '[Book/API] Upsert Books',
  props<{ books: Book[] }>()
);

export const updateBook = createAction(
  '[Book/API] Update Book',
  props<{ book: Update<Book> }>()
);

export const updateBooks = createAction(
  '[Book/API] Update Books',
  props<{ books: Update<Book>[] }>()
);

export const deleteBook = createAction(
  '[Book/API] Delete Book',
  props<{ id: string }>()
);

export const deleteBooks = createAction(
  '[Book/API] Delete Books',
  props<{ ids: string[] }>()
);

export const clearBooks = createAction(
  '[Book/API] Clear Books'
);

export const selectBook = createAction(
  '[Books] Select Book',
  props<{ id: string | number }>()
);

export const booksNoop = createAction(
  '[Books] Noop'
);
