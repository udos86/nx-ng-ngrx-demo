import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BooksActions from './books.actions';
import { Book } from './books.models';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  selectedId?: string | number; // which Books record has been selected
  loaded: boolean; // has the Books list been loaded
  error?: string | null; // last known error (if any)
}

export interface BooksPartialState {
  readonly [booksFeatureKey]: State;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks,
    (state) => ({ ...state, loaded: false, error: null, })
  ),
  on(BooksActions.loadBooksSuccess,
    (state, { books }) => adapter.setAll(books, { ...state, loaded: true })
  ),
  on(BooksActions.loadBooksFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(BooksActions.addBook,
    (state, { book }) => adapter.addOne(book, state)
  ),
  on(BooksActions.addBooks,
    (state, { books }) => adapter.addMany(books, state)
  ),
  on(BooksActions.upsertBook,
    (state, { book }) => adapter.upsertOne(book, state)
  ),
  on(BooksActions.upsertBooks,
    (state, { books }) => adapter.upsertMany(books, state)
  ),
  on(BooksActions.updateBook,
    (state, { book }) => adapter.updateOne(book, state)
  ),
  on(BooksActions.updateBooks,
    (state, { books }) => adapter.updateMany(books, state)
  ),
  on(BooksActions.deleteBook,
    (state, { id }) => adapter.removeOne(id, state)
  ),
  on(BooksActions.deleteBooks,
    (state, { ids }) => adapter.removeMany(ids, state)
  ),
  on(BooksActions.clearBooks,
    state => adapter.removeAll(state)
  ),
  on(BooksActions.selectBook,
    (state, { id }) => ({ ...state, selectedId: id })
  ),
  on(BooksActions.booksNoop,
    state => state
  )
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
