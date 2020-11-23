import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBooks from './store/books/books.reducer';
import { BooksEffects } from './store/books/books.effects';
import { BooksFacade } from './store/books/books.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects])
  ],
  providers: [BooksFacade],
})
export class BooksModule {}
