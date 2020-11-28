import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { BooksPartialState } from './books.reducer';
import { selectAllBooks, selectBookEntities, selectBookIds, selectBooksLoaded, selectSelectedBook } from './books.selectors';


@Injectable()
export class BooksFacade {
  booksLoaded$ = this.store.pipe(select(selectBooksLoaded));
  allBooks$ = this.store.pipe(select(selectAllBooks));
  bookEntities = this.store.pipe(select(selectBookEntities));
  bookIds = this.store.pipe(select(selectBookIds));
  selectedBook$ = this.store.pipe(select(selectSelectedBook));

  constructor(private store: Store<BooksPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
