import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, State, BooksPartialState, adapter } from './books.reducer';

export const selectBooksState = createFeatureSelector<BooksPartialState, State>(booksFeatureKey);

const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectBooksLoaded = createSelector(
  selectBooksState,
  (state: State) => state.loaded
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: State) => state.error
);

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: State) => selectAll(state)
);

export const selectBookIds = createSelector(
  selectBooksState,
  (state: State) => selectIds(state)
);

export const selectBookEntities = createSelector(
  selectBooksState,
  (state: State) => selectEntities(state)
);

export const selectBooksTotal = createSelector(
  selectBooksState,
  (state: State) => selectTotal(state)
);

export const selectSelectedBookId = createSelector(
  selectBooksState,
  (state: State) => state.selectedId
);

export const selectSelectedBook = createSelector(
  selectBookEntities,
  selectSelectedBookId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
