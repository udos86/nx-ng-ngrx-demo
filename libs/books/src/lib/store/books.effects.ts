import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromBooks from './books.reducer';
import * as BooksActions from './books.actions';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return BooksActions.loadBooksSuccess({
            books: [
              { id: '1', title: '1984', author: 'George Orwell' },
              { id: '2', title: 'Brave New World', author: 'Aldous Huxley' },
              { id: '3', title: 'Infinite Jest', author: 'David Foster Wallace' }
            ]
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BooksActions.loadBooksFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) { }
}
