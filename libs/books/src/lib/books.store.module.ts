import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { booksFeatureKey, reducer } from './store/books.reducer';
import { BooksEffects } from './store/books.effects';
import { BooksFacade } from './store/books.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(booksFeatureKey, reducer),
    EffectsModule.forFeature([BooksEffects])
  ],
  providers: [BooksFacade],
})
export class BooksStoreModule {}
