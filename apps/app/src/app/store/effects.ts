import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { navigation } from '@nrwl/angular';
import { BooksFacade, loadBooks, selectBook } from '@nx-ng-ngrx-demo/books';
import { navigate } from '@nx-ng-ngrx-demo/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { DetailComponent } from '../books/detail/detail.component';
import { RootComponent } from '../books/root/root.component';

@Injectable()
export class RouterEffects {
  /*
  navigateBooksDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectBook),
      map(({ id }) => navigate({ commands: ['books', 'detail', id] }))
    )
  );
  */

  booksRoot$ = createEffect(() => this.actions$.pipe(
    navigation(RootComponent, {
      run: (route: ActivatedRouteSnapshot) => {
        return loadBooks();
      },
      onError: (route: ActivatedRouteSnapshot, error: any) => {
        return null;
      },
    })
  ));

  booksDetail$ = createEffect(() => this.actions$.pipe(
    navigation(DetailComponent, {
      run: (route: ActivatedRouteSnapshot) => {
        const id = route.params['id'];
        return this.booksFacade.booksLoaded$.pipe(
          filter(loaded => loaded),
          switchMap(() => this.booksFacade.bookEntities),
          map(entities => !!entities[id]),
          map(hasBook => {
            return hasBook ? selectBook({id}) : navigate({ commands: ['/404'] });
          })
        );
      },
      onError: (route: ActivatedRouteSnapshot, error: any) => {
        return null;
      },
    })
  ));

  constructor(private actions$: Actions, private readonly booksFacade: BooksFacade) { }
}
