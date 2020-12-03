import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { navigation } from '@nrwl/angular';
import { BooksFacade, booksNoop, loadBooks, selectBook } from '@nx-ng-ngrx-demo/books';
import { navigate } from '@nx-ng-ngrx-demo/router';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { DetailComponent } from '../books/components/detail/detail.component';
import { RootComponent } from '../books/containers/root/root.component';

@Injectable()
export class RouterEffects {

  /* Data Fetching on Router Navigation 
  |-------------------------
  |+ relies on default NgRx router-store action
  |+ treats router as source of truth and initiator of fetch action
  |+ regards NgRX architecture by using effect
  |+ works with RouterState.Minimal and does not require Noop Action
  |- analyzes navigation by root-level url
  |

  bookRouteNavigation = createEffect(() => this.actions$.pipe(
    ofType(routerNavigationAction),
    map(({ payload }) => payload.routerState.url.includes('/books/')),
    filter(isBookRoute => isBookRoute),
    switchMap(() => this.booksFacade.booksLoaded$),
    take(1),
    filter(loaded => !loaded),
    map(() => loadBooks())
  ));
  */

  /* Nx Data Fetching on Router Navigation 
  |-------------------------
  |+ relies on Nx-specific RxJS operator navigation
  |+ treats router as source of truth and initiator of fetch action
  |+ regards NgRX architecture by using effect
  |+ analyzes navigation by (feature module) component instead of url
  |- only works with RouterState.Full and requires Noop Action
  |

  booksRoot$ = createEffect(() => this.actions$.pipe(
    navigation(RootComponent, {
      run: (_route: ActivatedRouteSnapshot) => {
        return this.booksFacade.booksLoaded$.pipe(
          map(loaded => loaded ? booksNoop() : loadBooks()),
          take(1)
        );
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
          take(1),
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
  */

  /* Router Navigation on Action 
  |-------------------------
  |+ regards NgRX architecture by using effect
  |- treats action (not router) as source of truth and initiator of fetch action
  |- does not consider initial deep url call from the outside
  |

  navigateBooksDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectBook),
      map(({ id }) => navigate({ commands: ['books', 'detail', id] }))
    )
  );
  */

  constructor(private actions$: Actions, private readonly booksFacade: BooksFacade) { }
}
